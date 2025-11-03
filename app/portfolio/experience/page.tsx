import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: '경험 - 포트폴리오',
    description: 'React Native 개발 경험 및 프로젝트',
};

// 임시 경험 데이터
const experiences = [
    {
        id: '1',
        company: '스타트업 ABC',
        position: 'Senior React Native Developer',
        period: '2022.03 - 현재',
        location: '서울, 대한민국',
        description:
            '헬스케어 모바일 앱 개발 및 유지보수를 담당하며, 10만+ 사용자에게 서비스를 제공하고 있습니다.',
        achievements: [
            '앱 성능 최적화를 통해 초기 로딩 시간 40% 단축',
            'CI/CD 파이프라인 구축으로 배포 시간 50% 감소',
            '신규 기능 개발 및 출시 (건강 기록, 운동 트래킹)',
        ],
        techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Jest'],
        image: '/experience-1.jpg',
    },
    {
        id: '2',
        company: '테크 컴퍼니 XYZ',
        position: 'React Native Developer',
        period: '2021.01 - 2022.02',
        location: '경기, 대한민국',
        description: '이커머스 플랫폼의 모바일 앱 개발 및 기능 개선을 담당했습니다.',
        achievements: [
            '상품 검색 기능 고도화로 전환율 25% 향상',
            '결제 시스템 통합 및 안정화 (PG사 3곳 연동)',
            '푸시 알림 시스템 구축 및 운영',
        ],
        techStack: ['React Native', 'JavaScript', 'Context API', 'REST API', 'FCM'],
        image: '/experience-2.jpg',
    },
    {
        id: '3',
        company: '개인 프로젝트',
        position: 'Full Stack Developer',
        period: '2020.06 - 2020.12',
        location: '원격',
        description: '위치 기반 맛집 공유 앱을 기획부터 출시까지 진행한 개인 프로젝트입니다.',
        achievements: [
            '앱스토어 및 플레이스토어 출시 (5,000+ 다운로드)',
            'Google Maps API를 활용한 실시간 위치 기반 서비스 구현',
            '사용자 리뷰 및 평점 시스템 개발',
        ],
        techStack: ['React Native', 'Expo', 'Firebase', 'Google Maps API', 'React Navigation'],
        image: '/experience-3.jpg',
    },
];

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
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <Link key={exp.id} href={`/portfolio/experience/${exp.id}`}>
                            <Card className="hover:shadow-lg hover:border-primary/30 group transition-all duration-200">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 space-y-1">
                                            <CardTitle className="group-hover:text-primary transition-colors">
                                                {exp.position}
                                            </CardTitle>
                                            <CardDescription className="text-base font-medium">
                                                {exp.company}
                                            </CardDescription>
                                        </div>
                                        <ChevronRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                            <MapPin className="h-4 w-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-foreground/80 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div>
                                        <h4 className="mb-2 text-sm font-semibold">주요 성과</h4>
                                        <ul className="text-muted-foreground space-y-1 text-sm">
                                            {exp.achievements.slice(0, 2).map((achievement, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-primary">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                            {exp.achievements.length > 2 && (
                                                <li className="text-primary flex gap-2 font-medium">
                                                    <span>+{exp.achievements.length - 2}개 더 보기</span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>

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
