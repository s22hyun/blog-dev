import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function WithHeaderLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <>
            {/* Header 영역 */}
            <Header />
            {/* Main 영역 */}
            <main className="flex-1">{children}</main>

            {/* Modal 영역 */}
            {modal}

            {/* Footer 영역 */}
            <Footer />
        </>
    );
}
