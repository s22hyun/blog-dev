import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export const metadata: Metadata = {
    title: '경험 - 포트폴리오',
    description: 'React Native 개발 경험 및 프로젝트',
};

const experiences = portfolioData.experiences;

export default function ExperiencePage() {
    return (
        <div className="container py-8">
            <div className="mx-auto max-w-5xl space-y-8">
                {/* 헤더 */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/portfolio"
                        className="hover:bg-accent rounded-lg p-2 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">프로젝트 및 경험</h1>
                        <p className="text-muted-foreground mt-1">
                            다양한 프로젝트와 실무 경험을 통해 성장해왔습니다
                        </p>
                    </div>
                </div>

                {/* 경험 목록 */}
                <div className="space-y-6 grid">
                    {experiences.map((exp) => (
                        <Link key={exp.id} href={`/portfolio/experience/${exp.id}`}>
                            <Card className="hover:shadow-lg hover:border-primary/30 group transition-all duration-200">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 space-y-1">
                                            <CardTitle className="group-hover:text-primary transition-colors">
                                                {exp.title}
                                            </CardTitle>
                                            <CardDescription className="text-base font-medium">
                                                {exp.role}
                                            </CardDescription>
                                        </div>
                                        <ChevronRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                        {exp.location && (
                                            <div className="flex items-center gap-1.5 text-muted-foreground">
                                                <MapPin className="h-4 w-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-foreground/80 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {exp.achievements && exp.achievements.length > 0 && (
                                        <div>
                                            <h4 className="mb-2 text-sm font-semibold">
                                                주요 성과
                                            </h4>
                                            <ul className="text-muted-foreground space-y-1 text-sm">
                                                {exp.achievements
                                                    .slice(0, 2)
                                                    .map((achievement, i) => (
                                                        <li key={i} className="flex gap-2">
                                                            <span className="text-primary">•</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                {exp.achievements.length > 2 && (
                                                    <li className="text-primary flex gap-2 font-medium">
                                                        <span>
                                                            +{exp.achievements.length - 2}개 더 보기
                                                        </span>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2">
                                        {exp.techStack.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* 하단 네비게이션 */}
                <Card className="bg-muted/50 border-dashed">
                    <CardContent className="py-6 text-center">
                        <p className="text-muted-foreground mb-4">
                            각 경험을 클릭하면 자세한 내용을 확인할 수 있습니다
                        </p>
                        <Link
                            href="/portfolio"
                            className="hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            포트폴리오 메인으로 돌아가기
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
