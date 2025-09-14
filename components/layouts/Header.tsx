import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function Header() {
    return (
        <header className="bg-background sticky top-0 z-50 border-b">
            <div className="container flex h-[var(--header-height)] items-center justify-between px-4">
                <Link href="/" className="text-xl font-semibold">
                    <span className="font-bold">시현 개발</span>
                </Link>
                <ThemeToggle />
            </div>
        </header>
    );
}
