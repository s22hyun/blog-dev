import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from './providers';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const pretendard = localFont({
    src: '../fonts/pretendard/PretendardVariable.woff2',
    display: 'swap',
    weight: '100 900',
    variable: '--font-pretendard',
});

export const metadata: Metadata = {
    title: {
        template: '시현 개발',
        default: '시현 개발',
    },
    description: '주로 개발이야기이지만 이것저것 공유하려고 합니다.',
    keywords: ['시현', '개발', '개발자', '제품', 'React Native', '모바일'],
    authors: [{ name: '시현', url: '' }],
    creator: '시현',
    publisher: '시현',
    formatDetection: {
        email: false,
        telephone: false,
        address: false,
    },
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
    alternates: {
        canonical: '/',
    },
    other: {
        google: 'notranslate',
    },
    openGraph: {
        images: [
            {
                url: '/og-image.png',
            },
        ],
    },
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${pretendard.variable} scroll-smooth`} suppressHydrationWarning>
            <body className={`${pretendard.className} antialiased font-pretendard`}>
                <Providers>
                    <div className="flex min-h-screen flex-col">
                        {/* Header 영역 */}
                        <Header />
                        {/* Main 영역 */}
                        <main className="flex-1">{children}</main>

                        {/* Modal 영역 */}
                        {modal}

                        {/* Footer 영역 */}
                        <Footer />
                    </div>
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
