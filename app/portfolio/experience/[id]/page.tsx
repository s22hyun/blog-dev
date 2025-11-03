import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ExperienceDetailPageProps {
    params: Promise<{ id: string }>;
}

// 임시 경험 데이터 (실제로는 데이터베이스나 API에서 가져올 수 있습니다)
const experiences = [
    {
        id: '1',
        company: '스타트업 ABC',
        position: 'Senior React Native Developer',
        period: '2022.03 - 현재',
        location: '서울, 대한민국',
        description:
            '헬스케어 모바일 앱 개발 및 유지보수를 담당하며, 10만+ 사용자에게 서비스를 제공하고 있습니다.',
        fullDescription: `
헬스케어 스타트업에서 모바일 앱 개발 전반을 담당하고 있습니다.
사용자들의 건강 데이터를 안전하게 관리하고 시각화하는 서비스를 제공하며,
지속적인 성능 개선과 사용자 경험 향상을 위해 노력하고 있습니다.

팀 내에서 기술 리드 역할을 수행하며, 코드 리뷰와 아키텍처 설계에도 참여하고 있습니다.
        `,
        achievements: [
            '앱 성능 최적화를 통해 초기 로딩 시간 40% 단축',
            'CI/CD 파이프라인 구축으로 배포 시간 50% 감소',
            '신규 기능 개발 및 출시 (건강 기록, 운동 트래킹)',
            '레거시 코드 리팩토링으로 유지보수성 향상',
            '테스트 커버리지 70% 달성',
        ],
        responsibilities: [
            'React Native 기반 iOS/Android 앱 개발',
            '새로운 기능 설계 및 구현',
            '코드 리뷰 및 팀원 멘토링',
            'API 설계 및 백엔드 팀과 협업',
            '앱 성능 모니터링 및 최적화',
        ],
        techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Jest', 'Detox'],
        image: '/experience-1.jpg',
    },
    {
        id: '2',
        company: '테크 컴퍼니 XYZ',
        position: 'React Native Developer',
        period: '2021.01 - 2022.02',
        location: '경기, 대한민국',
        description: '이커머스 플랫폼의 모바일 앱 개발 및 기능 개선을 담당했습니다.',
        fullDescription: `
대규모 이커머스 플랫폼의 모바일 앱 개발 팀에서 근무하며,
다양한 기능 개발과 운영 이슈 대응을 경험했습니다.

특히 상품 검색 기능 고도화 프로젝트를 주도하여 사용자 경험을 크게 개선했으며,
결제 시스템 안정화에도 기여했습니다.
        `,
        achievements: [
            '상품 검색 기능 고도화로 전환율 25% 향상',
            '결제 시스템 통합 및 안정화 (PG사 3곳 연동)',
            '푸시 알림 시스템 구축 및 운영',
            '장바구니 기능 개선으로 이탈률 15% 감소',
        ],
        responsibilities: [
            '이커머스 앱 신규 기능 개발',
            '기존 기능 개선 및 버그 수정',
            'A/B 테스트를 통한 사용자 경험 개선',
            '외부 API 연동 (결제, 배송 등)',
            '운영 이슈 모니터링 및 대응',
        ],
        techStack: ['React Native', 'JavaScript', 'Context API', 'REST API', 'FCM', 'Sentry'],
        image: '/experience-2.jpg',
    },
    {
        id: '3',
        company: '개인 프로젝트',
        position: 'Full Stack Developer',
        period: '2020.06 - 2020.12',
        location: '원격',
        description: '위치 기반 맛집 공유 앱을 기획부터 출시까지 진행한 개인 프로젝트입니다.',
        fullDescription: `
사용자들이 자신만의 맛집을 공유하고 다른 사람의 추천을 받아볼 수 있는
위치 기반 소셜 네트워킹 앱을 개발했습니다.

기획, 디자인, 개발, 배포까지 전 과정을 혼자 진행하며
풀스택 개발 역량을 키울 수 있었습니다.
        `,
        achievements: [
            '앱스토어 및 플레이스토어 출시 (5,000+ 다운로드)',
            'Google Maps API를 활용한 실시간 위치 기반 서비스 구현',
            '사용자 리뷰 및 평점 시스템 개발',
            '소셜 로그인 (Google, Apple) 구현',
            '이미지 업로드 및 최적화 시스템 구축',
        ],
        responsibilities: [
            '앱 기획 및 UI/UX 디자인',
            'React Native 기반 모바일 앱 개발',
            'Firebase를 활용한 백엔드 구축',
            '앱스토어 및 플레이스토어 배포',
            '사용자 피드백 수집 및 개선',
        ],
        techStack: [
            'React Native',
            'Expo',
            'Firebase',
            'Google Maps API',
            'React Navigation',
            'Firestore',
        ],
        image: '/experience-3.jpg',
    },
];

export async function generateMetadata({
    params,
}: ExperienceDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const experience = experiences.find((exp) => exp.id === id);

    if (!experience) {
        return {
            title: '경험을 찾을 수 없음',
        };
    }

    return {
        title: `${experience.position} - ${experience.company}`,
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
                <div className="flex items-center gap-4">
                    <Link
                        href="/portfolio/experience"
                        className="hover:bg-accent rounded-lg p-2 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">{experience.position}</h1>
                        <p className="text-muted-foreground mt-1 text-lg">{experience.company}</p>
                    </div>
                </div>

                {/* 기본 정보 카드 */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="flex items-start gap-3">
                                <Building2 className="text-primary mt-1 h-5 w-5 shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">회사</p>
                                    <p className="font-medium">{experience.company}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Calendar className="text-primary mt-1 h-5 w-5 shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">기간</p>
                                    <p className="font-medium">{experience.period}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 h-5 w-5 shrink-0" />
                                <div>
                                    <p className="text-muted-foreground text-sm">위치</p>
                                    <p className="font-medium">{experience.location}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* 개요 */}
                <Card>
                    <CardHeader>
                        <CardTitle>개요</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
                            {experience.fullDescription || experience.description}
                        </p>
                    </CardContent>
                </Card>

                {/* 주요 업무 */}
                <Card>
                    <CardHeader>
                        <CardTitle>주요 업무</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {experience.responsibilities?.map((resp, index) => (
                                <li key={index} className="flex gap-3">
                                    <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                    <span className="text-foreground/80">{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* 주요 성과 */}
                <Card>
                    <CardHeader>
                        <CardTitle>주요 성과</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {experience.achievements.map((achievement, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="text-primary mt-1 text-lg">✓</span>
                                    <span className="text-foreground/80">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* 기술 스택 */}
                <Card>
                    <CardHeader>
                        <CardTitle>사용 기술</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {experience.techStack.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-sm">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* 네비게이션 */}
                <div className="flex flex-wrap gap-4">
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
