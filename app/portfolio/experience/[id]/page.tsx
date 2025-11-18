import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { portfolioData } from '@/lib/portfolio-data';
import Image from 'next/image';

interface ExperienceDetailPageProps {
    params: Promise<{ id: string }>;
}

const experiences = portfolioData.experiences;

export async function generateMetadata({ params }: ExperienceDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const experience = experiences.find((exp) => exp.id === id);

    if (!experience) {
        return {
            title: '경험을 찾을 수 없음',
        };
    }

    return {
        title: `${experience.position || experience.company}`,
        description: experience.description,
    };
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
    const { id } = await params;
    const experience = experiences.find((exp) => exp.id === id);

    if (!experience) {
        notFound();
    }

    return (
        <div className="container py-8">
            <div className="mx-auto max-w-4xl space-y-8">
                {/* 헤더 네비게이션 */}
                <div>
                    <Link
                        href="/portfolio/experience"
                        className="hover:bg-accent mb-4 inline-flex rounded-lg p-2 transition-colors print:hidden"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">{experience.title}</h1>
                    </div>
                </div>

                {/* 기본 정보 카드 */}
                <Card>
                    <CardContent className="py-2">
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <Building2 className="text-primary h-5 w-5 shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">프로젝트/회사</p>
                                    <p className="font-medium">{experience.company}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="text-primary h-5 w-5 shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">기간</p>
                                    <p className="font-medium">{experience.period}</p>
                                </div>
                            </div>
                            {experience.location && (
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-primary h-5 w-5 shrink-0" />
                                    <div>
                                        <p className="text-muted-foreground text-sm">직급</p>
                                        <p className="font-medium">{experience.position}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* 주요 업무 */}
                {experience.responsibilities && experience.responsibilities.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>주요 업무</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {experience.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex gap-3">
                                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                        <span className="text-foreground/80">{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {/* 주요 성과 */}
                {experience.achievements && experience.achievements.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>주요 성과</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {experience.achievements.map((achievement, index) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-foreground/80">{`✓ ${achievement}`}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {/* 스크린샷 갤러리 */}
                {experience.images && experience.images.length > 0 && (
                    <Card>
                        <CardHeader>
                            <CardTitle>스크린샷</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                {experience.images.map((imagePath, index) => (
                                    <div
                                        key={index}
                                        className="relative h-96 overflow-hidden rounded-lg border bg-muted md:h-[440px]"
                                    >
                                        <Image
                                            src={imagePath}
                                            alt={`${experience.title} 스크린샷 ${index + 1}`}
                                            fill
                                            className="object-fill print:object-contain"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* 개요 */}
                <Card className="print-allow-break">
                    <CardContent>
                        {experience.fullDescription && Array.isArray(experience.fullDescription) ? (
                            <div className="space-y-6">
                                {experience.fullDescription.map((section, index) => (
                                    <div key={index}>
                                        <h3 className="mb-2 text-lg font-semibold">
                                            {section.title}
                                        </h3>
                                        <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
                                {(experience.fullDescription as string) || experience.description}
                            </p>
                        )}
                    </CardContent>
                </Card>

                {/* 네비게이션 */}
                <div className="flex flex-wrap gap-4 print:hidden">
                    <Link
                        href="/portfolio/experience"
                        className="hover:bg-accent flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        경험 목록으로
                    </Link>
                    <Link
                        href="/portfolio"
                        className="hover:bg-accent flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
                    >
                        포트폴리오 메인으로
                    </Link>
                </div>
            </div>
        </div>
    );
}
