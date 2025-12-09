import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MdxImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: number | string;
    height?: number | string;
}

export function MdxImage({
    src,
    alt,
    width,
    height,
    className,
    ...props
}: MdxImageProps) {
    if (!src) return null;

    // width와 height가 없으면 일반 img 태그 렌더링 (또는 fallback)
    if (!width || !height) {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={src} alt={alt} className={className} {...props} />;
    }

    const w = typeof width === 'string' ? parseInt(width) : width;
    const h = typeof height === 'string' ? parseInt(height) : height;

    return (
        <span className="block my-8 overflow-hidden rounded-lg border">
            <Image
                src={src}
                alt={alt || ''}
                width={w}
                height={h}
                className={cn('h-auto w-full object-cover', className)}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/x8AAuMB8DtXNJsAAAAASUVORK5CYII=" // 기본 회색 블러
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 800px" // 반응형 사이즈 힌트
                {...props}
            />
        </span>
    );
}
