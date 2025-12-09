import type { Root } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import probe from 'probe-image-size';
import { Readable } from 'stream';

// Node 타입 정의 (unist, hast 등에서 확장)
interface ImageNode {
    type: 'element';
    tagName: 'img';
    properties: {
        src: string;
        width?: number;
        height?: number;
        [key: string]: unknown;
    };
}

const rehypeImageMetadata: Plugin<[], Root> = () => {
    return async (tree: Root) => {
        const images: ImageNode[] = [];

        // 1. 모든 img 태그 수집
        visit(tree, 'element', (node: unknown) => {
            const imgNode = node as ImageNode;
            if (imgNode.tagName === 'img' && imgNode.properties && typeof imgNode.properties.src === 'string') {
                images.push(imgNode);
            }
        });

        // 2. 이미지 사이즈 병렬로 가져오기
        const promises = images.map(async (node) => {
            const src = node.properties.src;

            try {
                // 이미 width/height가 있으면 패스
                if (node.properties.width && node.properties.height) {
                    return;
                }

                // 로컬 이미지는 public 폴더 기준 처리 등이 필요하지만, 여기서는 외부 URL(Notion S3) 위주로 처리
                const response = await fetch(src);
                if (!response.body) throw new Error('Failed to fetch image body');
                const nodeStream = Readable.fromWeb(response.body as any);
                const dimensions = await probe(nodeStream);

                node.properties.width = dimensions.width;
                node.properties.height = dimensions.height;
            } catch (error) {
                console.error(`Failed to get image size for ${src}:`, error);
                // 실패 시 아무것도 안 함 (클라이언트에서 일반 img 태그로 렌더링되게 둠 - MdxImage에서 처리)
            }
        });

        await Promise.all(promises);
    };
};

export default rehypeImageMetadata;
