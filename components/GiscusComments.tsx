'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
export default function GiscusComments() {
    const { theme } = useTheme();
    return (
        <Giscus
            repo="CABB4G/blog-giscus"
            repoId="R_kgDOPkM4Jg"
            category="Announcements"
            categoryId="DIC_kwDOOHw4Qc4Cn9v2"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={theme === 'dark' ? 'dark' : 'light'}
            lang="ko"
        />
    );
}
