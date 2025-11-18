import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Mail,
    Phone,
    MapPin,
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
import { portfolioData } from '@/lib/portfolio-data';

export const metadata: Metadata = {
    title: 'Park Sihyun Portfolio',
    description: 'Park Sihyun Portfolio',
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
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="h-4 w-4" />
                                        <a
                                            href={`tel:${profile.phone}`}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {profile.phone}
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
                <div className="space-y-4 print-allow-break">
                    <div className="flex items-center justify-between print-allow-break">
                        <h3 className="flex items-center gap-2 text-xl font-bold">
                            <Briefcase className="text-primary h-5 w-5" />
                            프로젝트 및 경험
                        </h3>
                        {/* <Link
                            href="/portfolio/experience"
                            className="hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
                        >
                            전체보기
                            <ArrowRight className="h-4 w-4" />
                        </Link> */}
                    </div>
                    <div className="space-y-3 gap-2 grid">
                        {experiences.map((exp) => (
                            <Link key={exp.id} href={`/portfolio/experience/${exp.id}`}>
                                <Card className="hover:shadow-lg hover:border-primary/30 group transition-all duration-200">
                                    <CardContent>
                                        <div className="space-y-4">
                                            {/* 헤더 - 프로젝트명과 기간 */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="group-hover:text-primary text-lg font-semibold transition-colors">
                                                        {exp.title}
                                                    </h3>
                                                    {exp.period && (
                                                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
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
                </div>

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
                                            <p className="text-foreground/80 text-sm whitespace-pre-line">
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
