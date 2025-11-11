import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Mail,
    MapPin,
    Github,
    Trophy,
    GraduationCap,
    Briefcase,
    ArrowRight,
    Building2,
    Calendar,
    ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Park Sihyun Portfolio',
    description: 'Park Sihyun Portfolio',
};

const portfolioData = {
    profile: {
        name: `박시현`,
        title: '모바일 파트 지원 (전문연구요원 현역 전직 2023.06 - 현재)',
        location: '서울, 대한민국',
        email: 'sii22hp@gmail.com',
        github: 'https://github.com/s22hyun',
        bio: `현실의 문제를 파고들어 명확하게 정의하는 것을 좋아하고, 0 to 1 케이스를 특히 즐겁게 고민합니다.
        Non-GPS 실내 내비게이션 '워치마일'을 기획부터 출시, 운영까지 리드했습니다.
        개발자와 유저가 모두 실수 없이 사용할 수 있는 시스템을 만드는 과정에서 가장 큰 성취감을 느낍니다.`,
        image: '/images/avatar_porfolio.png',
    },
    techStacks: [
        {
            category: 'Mobile',
            skills: ['React Native(TypeScript)', 'Android(Kotlin)', 'iOS(Swift)'],
        },
        {
            category: 'State Management',
            skills: ['React Query', 'Zustand'],
        },
        {
            category: 'Tools',
            skills: ['Git', 'GitLab', 'Figma', 'Notion'],
        },
    ],
    workExperience: [
        {
            company: '베스텔라랩',
            position: 'Developer(선임 연구원), Product Lead',
            period: '2023.06 - 현재',
            logo: '/images/vestellalab.webp',
            roles: [
                {
                    title: '0→1 앱 개발 리드 및 서비스 총괄',
                    highlights: [
                        `Non-GPS 실내 내비게이션 앱 '워치마일'의 기획, 개발, 운영 등 0 to 1 개발 전 과정을 리드`,
                        '측위 센서 설치 위치 및 방법 설계, 테스트 도구 개발 등 서비스 구축 전반에 직접 참여',
                    ],
                },
                {
                    title: 'Native module로 핵심 기능 구현',
                    highlights: [
                        '측위 등 성능이 중요한 핵심 로직을 Kotlin, Swift 네이티브 모듈로 개발하여 RN의 성능 한계를 해결',
                        'BLE를 통한 실내 측위를 Android/iOS Native SDK로 만들어 외부 파트너사에 제공하고 기술 제휴를 논의',
                    ],
                },
                {
                    title: '지도 렌더링과 애니메이션을 직접 구현하여 최적의 UX 제공',
                    highlights: [
                        'React Native Skia, Reanimated를 사용하여 지도 및 경로 안내 애니메이션을 직접 구현하여 부드러운 UX를 제공',
                        'UI 로직을 재사용 가능한 공통 컴포넌트로 설계하여 개발 효율성과 유지보수성을 확보',
                    ],
                },
                {
                    title: '팀 리딩 및 기술 공유 문화 조성',
                    highlights: [
                        '신규 팀원을 위한 온보딩 프로그램을 직접 설계하고 도입했으며, 코드 리뷰와 멘토링을 통해 팀의 기술 역량 강화',
                        '개발, 비개발 직군을 대상으로 기술 교육을 진행하여 전사적인 제품 이해도를 높이고 협업 효율을 개선',
                    ],
                },
            ],
        },
        {
            company: 'AIPro',
            position: 'App Developer',
            period: '2020.05 - 2020.09',
            logo: '/images/AIPro.png',
            roles: [
                {
                    title: '공모전 수상 프로젝트의 창업 및 상용화 경험',
                    highlights: [
                        `공모전 수상작(SnapPro)을 기반으로 창업에 참여했으며, 이를 실제 서비스인 '왓캠(식물 종류 탐지 및 SNS)'으로 발전시키는 제품화 과정을 경험`,
                    ],
                },
                {
                    title: '모바일 환경에서의 AI 모델 탑재 및 네이티브 모듈 구현',
                    highlights: [
                        'React Native를 기반으로 앱을 개발했으며, 당시 자료가 부족했던 모바일 환경에서 AI 모델을 직접 네이티브 모듈로 구현하여 식물 탐지 및 추론 기능을 탑재',
                    ],
                },
            ],
        },
    ],
    experiences: [
        {
            id: '1',
            company: '워치마일(Non-GPS 내비게이션)',
            period: '2023.06 - 현재',
            description: `베스텔라랩의 메인 비즈니스 모델인 Non-GPS 주차 내비게이션 앱입니다.
            React Native를 통해 최단 경로 탐색 알고리즘, 지도 렌더링 라이브러리, 내비게이션에 필요한 모든 애니메이션, BLE를 통한 측위 모듈 등 직접 앱과 비즈니스 로직을 고민하고 구현하였습니다.
            초기 기획, UI/UX 설계, 알고리즘 개발, 사내 기술 교육, 운영까지 프로젝트 전반을 주도하여 완수했습니다.`,
            role: '모바일 앱 개발, 핵심 알고리즘 개발, 사내 기술 교육',
            techStack: [
                'React Native',
                'TypeScript',
                'Android(Kotlin)',
                'iOS(Swift)',
                'Skia',
                'Reanimated',
                'React Query',
            ],
            image: '/experience-1.jpg',
        },
        {
            id: '2',
            company: 'BLE 기반 Non-GPS 측위 기술 연구 및 개발',
            period: '2023.09 - 현재',
            description: `실내 내비게이션(워치마일), 실내 자율 주행(제로 크루징) 등 사내 프로젝트에 사용되는 핵심 기술인 BLE 기반 Non-GPS 측위 기술의 구현 및 개선에 직접 참여했습니다.
                좋은 앱은 코드 밖에서도 나온다는 생각에 측위 센서 설치 현장에서 문제를 접하고 이를 직접 해결했으며, 센서 설치 방법을 정립하고 사내 기술 교육을 진행했습니다.
                테스트 도구를 만들어 변수가 있는 현장에서 발생하는 문제들에 대해 선재적으로 대응할 수 있는 시스템을 구축했습니다.`,
            role: '알고리즘 설계, 현장 하드웨어 설치 방법 정립 및 교육',
            techStack: ['React Native', 'Kotlin', 'Swift', 'BLE'],
            image: '/experience-2.jpg',
        },
        {
            id: '3',
            company: 'AR 내비게이션',
            period: '2025.09 - 2025.11',
            description: `송도 컨벤시아(컨벤션 센터) 실내 AR 내비게이션 기술 연구 및 Android(Kotlin) 개발을 진행했습니다.
                일반적으로 AR 내비게이션 구현에 사용되는 SLAM을 사용할 수 없는 상황에서 최대한 AR 내비게이션 경험을 사용자에게 제공할 수 있도록 기존 실내 내비게이션 노하우를 적용하여 아이디어를 제안하고 이를 직접 구현했습니다.`,
            role: '기술 연구, Android(Kotlin) 개발',
            techStack: ['Android(Kotlin)', 'ARCore'],
            image: '/experience-3.jpg',
        },
    ],
    education: [
        {
            school: '성균관대학교',
            degree: '석사',
            major: '교과교육학과 컴퓨터교육 전공',
            period: '2019.09 - 2022.02',
            logo: '/images/skku.jpg',
            highlights: [
                '물체 검출과 GPU 가속을 이용한 드론 자율비행 시스템 연구(학위 논문)',
                '한국 생산성 본부 알고리즘 코딩 테스트 강의 수업 강사(연대, 성대, 이대)',
                '드론 기반 Object Detection 연구',
            ],
        },
        {
            school: '성균관대학교',
            degree: '학사',
            major: '컴퓨터교육과',
            period: '2015.03 - 2019.08',
            logo: '/images/skku.jpg',
            highlights: ['성균관대학교 신입생 대상 필수 교양 코딩 강의 실습 수업 강사'],
        },
    ],
    awards: [
        {
            title: '농식품 공공데이터 활용 창업 경진대회 우수상',
            organization: '농림축산식품부',
            date: '2020.08',
            description: '식물 종류 탐지 및 SNS 서비스 창업 프로젝트',
            link: 'https://www.fsnews.co.kr/news/articleView.html?idxno=39240',
        },
        {
            title: '제 30회 글로벌 SW 공모 대전 최우수상(국무총리상)',
            organization: '과학기술정보통신부',
            date: '2018.11',
            description: '컴퓨터 비전을 기반으로 하는 자동 음악 채보 시스템인 CViano 개발',
            link: 'https://www.skku.edu/skku/campus/skk_comm/news.do?mode=view&articleNo=68399&article.offset=0&articleLimit=10',
        },
    ],
};

export default function PortfolioPage() {
    const { profile, workExperience, experiences, techStacks, education, awards } = portfolioData;

    return (
        <div className="container py-8">
            <div className="mx-auto max-w-5xl space-y-8">
                {/* 프로필 섹션 */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                            <Avatar className="h-44 w-34 border-4 border-primary/10">
                                <AvatarImage src={profile.image} alt={profile.name} />
                                <AvatarFallback className="text-2xl">
                                    {profile.name.slice(0, 2)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <div>
                                    <h1 className="text-3xl font-bold">{profile.name}</h1>
                                    <p className="text-muted-foreground mt-1 text-xl">
                                        {profile.title}
                                    </p>
                                </div>
                                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                                    {profile.bio}
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="h-4 w-4" />
                                        <span>{profile.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="h-4 w-4" />
                                        <a
                                            href={`mailto:${profile.email}`}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {profile.email}
                                        </a>
                                    </div>
                                    {/* {profile.github && (
                                        <a
                                            href={profile.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary flex items-center gap-2 text-sm transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            <span>GitHub</span>
                                        </a>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/* 기술 스택 섹션 */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <span className="text-primary">💻</span>
                            기술 스택
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6 md:grid-cols-2">
                            {techStacks.map((stack) => (
                                <div key={stack.category} className="space-y-3">
                                    <h3 className="font-semibold text-sm text-muted-foreground">
                                        {stack.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* 회사 이력 섹션 */}
                <Card className="print-page-break-after">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Building2 className="text-primary h-5 w-5" />
                            경력
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {workExperience.map((work, index) => (
                                <div key={index} className="relative flex gap-4 pb-6 last:pb-0">
                                    {/* 타임라인 */}
                                    <div className="relative flex flex-col items-center">
                                        {work.logo ? (
                                            <div className="bg-background relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20">
                                                <Image
                                                    src={work.logo}
                                                    alt={`${work.company} logo`}
                                                    width={50}
                                                    height={50}
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                                                <Briefcase className="h-5 w-5 text-white" />
                                            </div>
                                        )}
                                        {index !== workExperience.length - 1 && (
                                            <div className="bg-border absolute top-11 h-full w-[2px]" />
                                        )}
                                    </div>

                                    {/* 내용 */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {work.company}
                                            </h3>
                                            <p className="text-muted-foreground font-medium">
                                                {work.position}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>{work.period}</span>
                                        </div>

                                        {/* 역할/프로젝트 목록 */}
                                        {work.roles && work.roles.length > 0 && (
                                            <div className="space-y-3">
                                                {work.roles.map((role, roleIdx) => (
                                                    <div key={roleIdx} className="space-y-2">
                                                        <p className="text-foreground font-medium text-sm">
                                                            {role.title}
                                                        </p>
                                                        {role.highlights &&
                                                            role.highlights.length > 0 && (
                                                                <ul className="space-y-1.5 pl-1">
                                                                    {role.highlights.map(
                                                                        (highlight, idx) => (
                                                                            <li
                                                                                key={idx}
                                                                                className="flex items-start gap-2 text-sm text-foreground/70"
                                                                            >
                                                                                <span className="text-primary shrink-0">
                                                                                    •
                                                                                </span>
                                                                                <span className="leading-relaxed">
                                                                                    {highlight}
                                                                                </span>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* 프로젝트 및 경험 섹션 */}
                <Card className="print-allow-break">
                    <CardHeader>
                        <div className="flex items-center justify-between print-allow-break">
                            <CardTitle className="flex items-center gap-2">
                                <Briefcase className="text-primary h-5 w-5" />
                                프로젝트 및 경험
                            </CardTitle>
                            <Link
                                href="/portfolio/experience"
                                className="hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
                            >
                                전체보기
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {experiences.map((exp) => (
                                <Link key={exp.id} href={`/portfolio/experience/${exp.id}`}>
                                    <Card className="hover:shadow-lg hover:border-primary/30 group transition-all duration-200">
                                        <CardContent>
                                            <div className="space-y-4">
                                                {/* 헤더 - 프로젝트명과 기간 */}
                                                <div className="flex items-start justify-between gap-4">
                                                    <div className="flex-1">
                                                        <h3 className="group-hover:text-primary text-lg font-semibold transition-colors">
                                                            {exp.company}
                                                        </h3>
                                                        {exp.period && (
                                                            <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                                                                <Calendar className="h-3.5 w-3.5" />
                                                                <span>{exp.period}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <ArrowRight className="text-muted-foreground group-hover:text-primary h-5 w-5 shrink-0 transition-colors" />
                                                </div>

                                                {/* 역할 */}
                                                <div className="bg-muted/50 rounded-lg px-3 py-2">
                                                    <p className="text-xs font-semibold text-muted-foreground mb-1">
                                                        담당 역할
                                                    </p>
                                                    <p className="text-sm font-medium text-foreground">
                                                        {exp.role}
                                                    </p>
                                                </div>

                                                {/* 설명 */}
                                                <div className="space-y-2">
                                                    <p className="text-xs font-semibold text-muted-foreground">
                                                        프로젝트 소개
                                                    </p>
                                                    <p className="text-foreground/80 text-sm leading-relaxed whitespace-pre-line">
                                                        {exp.description}
                                                    </p>
                                                </div>

                                                {/* 기술 스택 */}
                                                <div className="space-y-2">
                                                    <p className="text-xs font-semibold text-muted-foreground">
                                                        사용 기술
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {exp.techStack.map((tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant="secondary"
                                                                className="text-xs"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* 학력 섹션 */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-primary" />
                                학력
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="flex gap-3">
                                            {edu.logo ? (
                                                <div className="bg-background relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20">
                                                    <Image
                                                        src={edu.logo}
                                                        alt={`${edu.school} logo`}
                                                        width={48}
                                                        height={48}
                                                        className="object-contain"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                                                    <GraduationCap className="text-primary h-6 w-6" />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{edu.school}</h3>
                                                <p className="text-muted-foreground text-sm">
                                                    {edu.degree} - {edu.major}
                                                </p>
                                                <p className="text-muted-foreground mt-1 text-xs">
                                                    {edu.period}
                                                </p>
                                            </div>
                                        </div>
                                        {edu.highlights && edu.highlights.length > 0 && (
                                            <ul className="space-y-1.5 pl-1">
                                                {edu.highlights.map((highlight, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm text-foreground/70"
                                                    >
                                                        <span className="text-primary shrink-0">
                                                            •
                                                        </span>
                                                        <span className="leading-relaxed">
                                                            {highlight}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* 수상 경력 섹션 */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Trophy className="h-5 w-5 text-primary" />
                                수상 경력
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {awards.map((award, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{award.title}</h3>
                                                <p className="text-muted-foreground text-sm">
                                                    {award.organization}
                                                </p>
                                            </div>
                                            {award.link && (
                                                <a
                                                    href={award.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-primary text-muted-foreground flex shrink-0 items-center gap-1 text-xs transition-colors"
                                                    title="기사 보기"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            {award.date}
                                        </p>
                                        {award.description && (
                                            <p className="text-foreground/80 text-sm">
                                                {award.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
