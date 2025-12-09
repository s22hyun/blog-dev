// 포트폴리오 데이터 타입 정의
export interface Profile {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    bio: string;
    image: string;
}

export interface TechStack {
    category: string;
    skills: string[];
}

export interface WorkRole {
    title: string;
    highlights: string[];
}

export interface WorkExperience {
    company: string;
    position: string;
    period: string;
    logo: string;
    roles: WorkRole[];
}

export interface DetailSection {
    title: string;
    content: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    role: string;
    techStack: string[];
    fullDescription?: string | DetailSection[];
    achievements?: string[];
    responsibilities?: string[];
    position?: string;
    location?: string;
    image?: string;
    images?: string[]; // 여러 스크린샷 이미지 경로
}

export interface Education {
    school: string;
    degree: string;
    major: string;
    period: string;
    logo: string;
    highlights: string[];
}

export interface Award {
    title: string;
    organization: string;
    date: string;
    description: string;
    link?: string;
}

export interface PortfolioData {
    profile: Profile;
    techStacks: TechStack[];
    workExperience: WorkExperience[];
    experiences: Experience[];
    education: Education[];
    awards: Award[];
}

// 포트폴리오 데이터
export const portfolioData: PortfolioData = {
    profile: {
        name: `박시현`,
        title: 'React Native Engineer (전문연구요원 현역 전직 2023.06 - 현재)',
        location: '서울, 대한민국',
        email: 'sii22hp@gmail.com',
        phone: '010-2613-7182',
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
            title: '워치마일(Non-GPS 내비게이션)',
            company: '베스텔라랩',
            period: '2023.06 - 현재',
            description: `• 베스텔라랩의 메인 비즈니스 모델인 Non-GPS 구역에서도 빈 주차면까지 안내하는 실내 내비게이션 앱
            • React Native를 통해 빈 주차면까지 최단 거리 탐색, 지도 렌더링, 제스쳐, 내비게이션에 필요한 애니메이션을 구현
            • BLE를 통한 실내 측위를 Native Module(Kotlin, Swift)로 구현하여 성능을 최적화
            • 어떤 주차장 구조에서도 데이터 교체로 바로 내비게이션 서비스를 도입할 수 있는 통합 알고리즘 구현
            • 알고리즘 개발, 사내 기술 교육, 운영까지 프로젝트 전반을 주도하여 완수`,
            role: '모바일 앱 개발, 핵심 알고리즘 개발, 사내 기술 교육',
            techStack: [
                'React Native',
                'Android(Kotlin)',
                'iOS(Swift)',
                'Skia',
                'Reanimated',
                'React Query',
            ],
            position: 'Product Lead & Developer',
            location: '베스텔라랩',
            fullDescription: [
                {
                    title: '프로젝트 배경',
                    content: `빈 주차면을 파악하는 영상 분석 기술, 요청에 따라 적절한 데이터를 전달하는 API, 최종적으로 유저에게 서비스를 제공하는 앱으로 구성되어 있습니다. 프로젝트를 맡기 이전에는 주차장 별로 각각의 앱과 프로젝트로 관리 및 구현되고 있어 앱이 출시되는데까지 평균 3주가 소요되었습니다. 앱은 물론 API 서버도 통합적으로 관리되지 못하고 매번 만들어져야했습니다.`,
                },
                {
                    title: '범용 내비게이션 로직',
                    content: `어느 주차장에서나 필요한 데이터만 넣어주면 내비게이션이 가능한 통합 로직을 구현했습니다. 주차장에서 차량의 최단 경로는 차량이 움직일 수 있는 방향을 고려해야하는 어려운 부분이 있었습니다.
                    Graph 이론으로 주차장의 구조를 분해하고 차량의 방향성을 포함하는 알고리즘을 구현하여 여러 층, 복잡한 구조를 가지더라도 최단 경로를 항상 찾아낼 수 있는 알고리즘을 구현했습니다. 기존 경로 탐색 로직이 공인 및 자체 성능평가 0.5초 이내를 기준으로 하던 것을 0.2초 이내 기준으로 변경하고 현재까지 어떤 현장에서도 100% 달성하고 있습니다.
                    최종적으로 새로운 주차장 앱이 만들어질 경우 앱 출시에 걸리는 기간을 5일 미만으로 단축했습니다.
                    통합 로직이 구현되어 데이터만 관리하면 서비스가 가능한 상황이 만들어져 주차장 관리자에게 제공할 수 있는 대시보드 겸 관리자 페이지를 제공하고 이를 비즈니스 모델로 활용할 수 있게 되었습니다.
                    `,
                },
                {
                    title: 'Native Module을 통한 성능 개선',
                    content: `React Native 구현을 통해 전체적인 앱 생산성을 높이는 한편, 성능이 중요한 측위 부분은 Native Module로 구현하여 최적화를 진행했습니다. 지도 렌더링 및 애니메이션도 성능을 많이 사용하는 영역이지만 당시 Native Module을 고려하지 않은 이유는 React Native와 Native Module이 데이터를 주고 받는 과정에서 직렬화, 역직렬화 오버헤드가 크기 때문이었습니다.
                    따라서, 성능 요구 사항이 높으면서도 Native Module에서 React Native 쪽으로 단순한 구조의 위치 정보만 전송하면 되는 측위를 Native Module로 구현했습니다.`,
                },
                {
                    title: '제스처, 지도 렌더링 및 애니메이션 성능',
                    content: `통합 워치마일 프로젝트의 UX 설계할 당시 중요하게 생각했던 부분이 이미 사람들이 익숙해진 상용 지도 앱의 UX에서 제공하는 부분을 연속성있게 제공해야 유저들이 혼란스럽지 않을 것이라는 것이었습니다.
                    상용 지도와 비슷한 유저 경험을 위해 pan, pinch, rotation 제스쳐가 동시에 일어나는 상황도 대응이 가능해야하는데, community에는 이러한 요구사항을 만족하는 이미지 제어 라이브러리가 없었습니다. 2D 렌더링 성능이 좋은 react-native-skia와 react-native-reanimated를 통해 제스쳐를 비롯한 내비게이션에 필요한 애니메이션을 translation matrix 단위에서 직접 설계하고 구현했습니다.`,
                },
            ],
            achievements: [
                '범용 내비게이션 알고리즘으로 다양한 주차장 구조 대응',
                '주차장 추가에 걸리는 시간 (3주 -> 5일 이내)',
                'React Native Skia를 활용한 60fps 지도 렌더링',
                '내비게이션 애니메이션 구현',
            ],
            responsibilities: [
                'React Native 기반 iOS/Android 앱 개발',
                'Kotlin, Swift로 BLE 기반 실내 측위 Native Module 개발',
                'React Native Skia, Reanimated를 활용한 지도 렌더링 및 애니메이션 구현',
                '최단 거리 탐색 알고리즘 설계 및 구현',
                '측위 센서 설치 방법 정립 및 사내 기술 교육',
                '앱 출시 및 운영, 사용자 피드백 반영',
                'OTA를 통한 업데이트 배포(Codepush -> Revopush)',
            ],
            images: [
                '/images/portfolio/watchmile/screenshot1.png',
                '/images/portfolio/watchmile/screenshot2.png',
                '/images/portfolio/watchmile/screenshot3.png',
                '/images/portfolio/watchmile/screenshot4.png',
            ],
        },
        {
            id: '2',
            title: 'AR & 보행자 내비게이션',
            company: '베스텔라랩',
            period: '2025.09 - 2025.11',
            description: `• 실내 AR 내비게이션 기술 연구 및 Android(Kotlin) 개발
                • 일반적으로 AR 내비게이션 구현에 사용되는 SLAM을 사용할 수 없는 상황에서 AR 내비게이션을 위한 아이디어 제시 및 구현
                • 워치마일 서비스의 주차장 차량 내비게이션 로직을 재사용하여 효율성 및 확장성 확보`,
            role: 'AR 내비게이션 기술 연구, Android(Kotlin) 개발, 해외 기술 소통 및 미팅(사우디, 카타르)',
            techStack: ['Android(Kotlin)', 'ARCore', 'MVVM', 'Compose UI'],
            position: 'Android Developer',
            location: '베스텔라랩',
            fullDescription: [
                {
                    title: 'GPS & Non GPS 측위',
                    content: `사우디 Bujairi Terrace, 송도 컨벤시아 GPS 지역과 Non GPS 지역에서 seamless하게 사용할 수 있는 내비게이션 서비스를 구현했습니다. 경계 구역을 통과할 때, BLE 측위와 GPS 측위의 평가 알고리즘을 구현하여 신뢰할 수 있는 측위 데이터를 계산했습니다.
                    projection과 Umeyama 알고리즘을 이용하여 GPS좌표와 지도 데이터간 변환 알고리즘을 통해 기존 워치마일 데이터를 재사용하면서도 GPS 측위가 가능하게 됐습니다.
                    이 과정에서 워치마일 서비스의 비즈니스 모델이 기존 실내에서 실외 주차장으로도 확장됐습니다.`,
                },
                {
                    title: 'BLE 측위 기술과 ARCore를 결합한 새로운 방식의 AR 내비게이션 로직',
                    content: `AR 내비게이션에서는 주로 SLAM을 사용하여 모든 공간의 Feature Map을 확보하고 이를 통해 VL(Visual Location)이라고 불리는 로직을 통해 위치 및 Pose를 알아냅니다. 하지만 사용할 수 있는 리소스의 한계로 인해 SLAM을 통한 AR 내비게이션 구현이 불가능한 상황이었습니다.
                    AR Core에 Anchor라는 기능이 있는데 이는 매우 작은 영역의 Feature Map을 스캔하고 이를 다른 anchor와 3D 공간에서 공유하는 기능입니다. 이 anchor와 워치마일 데이터의 지도 위 좌표계간 매칭쌍을 통해 VL없이 내 위치 및 Pose를 추정하는 알고리즘을 구상했고 이를 통해 SLAM 없이 AR 내비게이션을 구현했습니다.
                    3D Object를 AR 공간에 배치하여 나아가야할 경로를 나타내는 렌더링하는 기능을 구현했습니다.
                    `,
                },
                {
                    title: 'Google 지도 데이터가 없는 곳에서 Google Map을 이용한 내비게이션 구현',
                    content: `사우디 Bujairi Terrace에 내비게이션을 구현했습니다.당시 Bujairi Terrace가 Google Map 내에서 데이터가 없는 지역이었기 때문에 워치마일 데이터 형식을 Google Map 위에도 렌더링할 수 있도록 구현했습니다.`,
                },
                {
                    title: '사우디 현장 PoC 경험',
                    content: `사우디의 수도 리야드의 Bujairi Terrace라는 현장에 도보 내비게이션을 구축해야하는 현장이었습니다. 당초 출장이 개발 및 기술 총괄로 저를 포함 해외 사업부 인턴과 미팅 담당자를 포함하고 있었는데, 비행기 경유지에서 기술 총괄이 비자 문제로 사우디로 입국하지 못하게 되면서 인턴과 제가 주요 행사에 참석하고 바이어 미팅을 진행하는 등 잊지 못할 경험을 했습니다.
                    당시 한국 현지에서는 카카오 모빌리티와의 워치마일 SDK 구축이 한창 진행되고 있는 상황이라 사우디 현지 의 업무시간에는 사우디 업무를, 종료하고 숙소에 돌아와서는 한국 현지가 업무시간이 되어 협업을 진행하면서 정말 힘들지만 알찬 경험을 했습니다. 
                    이러한 경험들로 인해 외국어 실력에 자신있는 편은 아니었지만 현장에서 부딪히며 상황을 겪다보니 이후에 다른 해외 미팅(UAE, 카타르 등) 참석에 부담이 많이 줄어들게 된 경험이었습니다.
                    `,
                },
            ],
            achievements: [
                'SLAM 없이 BLE 측위와 ARCore를 결합한 AR 내비게이션 구현',
                'Non-GPS 지역과 GPS 지역을 자유롭게 오가는 내비게이션 구현',
                '워치마일 서비스의 주차장 차량 내비게이션 로직을 재사용하여 효율성 및 확장성 확보',
            ],
            responsibilities: [
                'AR 내비게이션 기술 리서치 및 솔루션 설계',
                'ARCore를 활용한 AR 기능 구현',
                'BLE 측위와 AR을 결합한 하이브리드 내비게이션 개발',
                'Jetpack Compose 기반 UI 개발',
                '현장 테스트 및 사용자 피드백 반영',
            ],
            images: [
                '/images/portfolio/arnavigation/screenshot1.png',
                '/images/portfolio/arnavigation/screenshot2.png',
                '/images/portfolio/arnavigation/screenshot3.png',
                '/images/portfolio/arnavigation/screenshot4.jpeg',
            ],
        },
        {
            id: '3',
            title: 'BLE 기반 Non-GPS 측위 기술 연구 및 개발',
            company: '베스텔라랩',
            period: '2023.09 - 현재',
            description: `• 실내 내비게이션(워치마일), 실내 자율 주행(제로 크루징) 등 사내 프로젝트에 사용되는 핵심 기술
                • Non-GPS 환경에서 측위 오차를 2m에서 0.5m로 개선
                • 측위 기술이 실제 사용되는 현장에서 몸으로 부딪히며 측위 센서 설치 방법을 정립하고 사내 기술 교육을 진행
                • 측위 센서 테스트를 위해 비개발 인원도 사용할 수 있는 테스트 도구를 구현
                • 자동화 및 개념 정립으로 인해 사내 측위 센서 설치 및 기획 인원이 개발자에서 비개발, 비전문 인력으로 이동
                `,
            role: '알고리즘 설계, 현장 하드웨어 설치 방법 정립 및 교육',
            techStack: ['React Native', 'Kotlin', 'Swift', 'BLE'],
            position: 'Product Lead & Developer',
            location: '베스텔라랩',
            fullDescription: [
                {
                    title: '기술 배경',
                    content: `워치마일(Non GPS 내비게이션)과 제로 크루징(실내 자율 주행) 등 사내 메인 BM에 사용되는 BLE 기반 확률 측위 기술입니다. 실내 공간에 Bluetooth 4.0 표준 이상의 BLE 측위 센서를 사용하여 Advertising 신호를 수집하고 이를 통한 수학적 계산을 통해 위치를 알아내는 기술입니다.`,
                },
                {
                    title: '좋은 기술은 현장에서부터 나온다',
                    content: `워치마일 앱을 맡게되고부터 코드로 구현하는 앱도 중요하지만, 사내에서 거의 블랙박스 형태로 취급하고 있던 측위 기술에 대해 연구를 시작했습니다. 가장 중요한 것이 측위 센서가 설치되어야할 현장과 설치 방법, 그에 따라 신호들이 어떻게 변화하는지 아는 것이 연구의 기본이라고 생각했습니다. 그래서 측위 센서 설치를 직접 진행하거나 사내에 테스트 필드를 직접 구축하기도 하고 직접 바꿔가며 좋은 신호 품질을 보장할 수 있는 설치 방법과 이를 테스트할 수 있는 도구에 대해 고민했습니다.`,
                },
                {
                    title: '측위 테스트 도구',
                    content: `누구나 측위 센서가 설치 기획대로 설치되었는지, 측위의 품질은 어떤지, 내비게이션이 잘 되는지 앱이 빌드되기전에 선재적으로 확인할 수 있는 도구입니다. 기본적으로 앱에서 사용하는 모듈에 의존성을 갖도록 구현했기 때문에, 해당 도구에서 잘 작동한다면 최종 앱에서도 내비게이션 서비스의 품질을 보장할 수 있도록 구현했습니다.
                    테스트 도구를 통해 전문 인력이 진행해야했던 측위 센서의 세팅 및 설치를 비전문 인력으로 외주화하는데 성공했습니다. 현재는 수십 개의 현장에 빠르게 테스트 도구를 통해 빠르고 정확한 테스트를 진행하고 일정한 품질로 내비게이션 서비스가 이루어지고 있습니다.
                    `,
                },
                {
                    title: '측위 센서 배치 문제의 발견',
                    content: `측위 센서를 배치한 최외곽 구간의 측위 이상 문제를 발견하고 개선했습니다. 측위 알고리즘이 회전하는 구간에서 측위 정확도가 크게 내려가는 현상이 지속되어 속도를 가지고 회전하게되면 해당 모멘텀을 측위에 더해주는 알고리즘이 있었습니다.
                    하지만, 수많은 측위 센서 현장과 앱 현장 테스트, 코드 분석을 통해 해당 문제가 최외곽 구역에서 측위가 측위 센서의 안쪽에만 계산되는 문제라는 것을 밝혔습니다. 최외곽 구역은 주차장 특성상 필연적으로 회전 구간을 가지고 있었고, 이 회전 구간이 원인이라고 오해했던 것 입니다. 측위 센서 배치를 통해 이 문제를 바로잡고 모멘텀 로직을 제거하여 공인 시험 성적 및 자체 시험 성적에서 평균 2m로 작성하던 기준을 0.5m 이내로 개선했습니다.
                    `,
                },
            ],
            achievements: [
                'Non-GPS 환경에서 측위 오차를 2m에서 0.5m로 개선',
                '측위 센서 설치 영역 최외곽 측위 편향 문제 발견 및 해결',
                '비개발 인력도 사용 가능한 측위 센서 테스트 도구 개발',
                '사내 기술 교육으로 비전문 인력의 센서 설치 작업 가능',
            ],
            responsibilities: [
                'BLE 기반 실내 측위 알고리즘 연구 및 개발',
                '측위 센서 최적 배치 및 환경 연구',
                '현장 측위 테스트 및 정확도 개선',
                '비개발 인력을 위한 측위 센서 테스트 도구 개발',
                '측위 기술 교육 자료 작성 및 사내 교육 진행',
            ],
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
            description: `• 식물 종류 탐지 및 SNS 서비스 창업 프로젝트
            • image classification 모델을 tensorflow lite를 통해 device에서 추론하는 앱`,
            link: 'https://www.fsnews.co.kr/news/articleView.html?idxno=39240',
        },
        {
            title: '제 30회 글로벌 SW 공모 대전 최우수상(국무총리상)',
            organization: '과학기술정보통신부',
            date: '2018.11',
            description: `• 컴퓨터 비전을 기반으로 하는 자동 음악 채보 시스템인 CViano 개발
            • SVM 알고리즘을 사용하여 건반을 구분하여 채보 알고리즘을 구현
            `,
            link: 'https://www.skku.edu/skku/campus/skk_comm/news.do?mode=view&articleNo=68399&article.offset=0&articleLimit=10',
        },
    ],
};
