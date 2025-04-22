import type { Project } from "@/types/project";

export const mainProjects: Project[] = [
  {
    title: "Jeju-Month",
    description:
      "React를 활용하여 직관적인 UI/UX를 제공하고, 일정 관리, 추천 장소 탐색, 여행 팁 공유를 위한 커뮤니티 기능을 담았습니다. 제주에서의 한 달을 보다 쉽고 편안하게 계획하도록 도와줍니다.",
    image: "/projectImages/200OK.png",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "OPEN API", "Redux"],
    demoLink: "#",
    githubLink: "https://github.com/Sugwan-p/jejumonth-frontend/tree/main",
    notionLink:
      "https://efficient-knot-8e2.notion.site/1b3931125dd680759976daa060aa3fde?v=1b3931125dd6816d88c2000cba4c7216",
    contribution: 20,
  },
  {
    title: "RideOn",
    description:
      "사용자가 원하는 순간 다크 모드와 라이트 모드를 자유롭게 전환할 수 있으며, 테마 변화만으로도 완전히 새로운 사이트에 접속한 듯한 경험을 제공합니다. 자전거를 타며 취미 생활을 즐기는 라이더들을 위해 편의시설과 도로 정보를 쉽게 확인할 수 있으며, 다양한 자전거 관련 상품도 편리하게 구매할 수 있도록 지원합니다.",
    image: "/projectImages/RiedOn.png",
    tags: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "OPEN API",
      "Pinia",
      "Vuetify",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Sugwan-p/RideOn/tree/main",
    notionLink:
      "https://efficient-knot-8e2.notion.site/1b4931125dd680648bedc53c886608f0?v=1b4931125dd6816e9557000c8e7890fe",
    contribution: 25,
  },
  {
    title: "GymMate",
    description:
      "GymMate는 헬스 유저와 트레이너를 연결하는 통합 피트니스 플랫폼입니다. 사용자 경험에 중점을 두고, 라이트/다크 모드를 자유롭게 전환할 수 있는 직관적인 UI를 제공하며, 제휴 헬스장 검색부터 운동 기록, 결제 내역 확인까지 전 과정을 손쉽게 관리할 수 있습니다. Zustand를 활용한 글로벌 상태 관리와 Hero UI 기반의 일관된 디자인 시스템을 통해 복잡한 기능도 깔끔하고 효율적으로 구현했습니다.",
    image: "/projectImages/gymmatemain.png",
    video: "/projectImages/gymmatemain.mov",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OPEN API",
      "Zustand",
      "Hero UI",
      "dayjs",
    ],
    demoLink: "#",
    githubLink: "https://github.com/Sugwan-p/WEB3_4_HelloWorld_FE",
    notionLink:
      "https://efficient-knot-8e2.notion.site/1b4931125dd680648bedc53c886608f0?v=1b4931125dd6816e9557000c8e7890fe",
    contribution: 40,
  },
];

export const subProjects = [
  {
    title: "MySite",
    description: "개인 포트폴리오 사이트 - [계속 수정 중]",
    tags: ["next.js", "tailwindCSS", "typescript"],
    link: "https://github.com/Sugwan-p/myportfolio",
  },
  {
    title: "UNO 보드게임",
    description: "UNO 보드게임 사이트 - [확장 예정]",
    tags: ["next.js", "tailwindCSS", "typescript", "Firebase"],
    link: "https://github.com/Sugwan-p/UNO",
  },
];
