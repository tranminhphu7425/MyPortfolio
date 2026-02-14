
import { Project, Skill, Experience, Achievement } from './types';

export const PERSONAL_INFO = {
  fullName: "Trần Minh Phú",
  displayName: "Trần Minh Phú",
  role: "IT Developer",
  tagline: "Người ham học hỏi, kết hợp tư duy logic với sáng tạo để không ngừng hoàn thiện bản thân.",
  avatar: "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/626515955_2110036836481075_6756887812201678756_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEukN0XTKb2Nv9Sek3OxObopQk_3w_9JMClCT_fD_0kwAGNLL-7JOvwwFJhrEF6mymPzH09dS89_a3WsfMdmzKJ&_nc_ohc=D9HW1wZirMwQ7kNvwFJN7-v&_nc_oc=AdkTIN91dne72gCiftoNuwEedfjmz7iKa8juRpYsHUsyM1SZt1RoW6wmxPbwt4wG4sc&_nc_zt=23&_nc_ht=scontent.fvca1-3.fna&_nc_gid=MYcu9Hk2n3Y5AE7Zl4UTeQ&oh=00_AfuHtxFZ9Dr0XHF9gzQxHtuv5OALRNie4HxSI8qC4kUPKQ&oe=69959D6D",
  cvUrl: "https://www.facebook.com/tranphu.152/",
  email: "tranminhphu7.4.2005@gmail.com",
  phone: "0818768940",
  github: "https://github.com/tranminhphu7425",
  facebook: "https://www.facebook.com/tranphu.152/",
};

export const PROJECTS: Project[] = [
  {
    id: "quiz-universe",
    title: "Quiz Universe",
    description: "Nền tảng web toàn diện cho việc tạo, quản lý và tham gia các bài quiz trực tuyến. Frontend hiện đại được xây dựng bằng React và TypeScript, cùng với backend API mạnh mẽ sử dụng Spring Boot.",
    tech: ["React", "TypeScript", "Spring Boot"],
    demoUrl: "https://tranminhphu7425.github.io/quiz-universe/#/",
    githubUrl: "https://github.com/tranminhphu7425/quiz-universe",
    imageUrl: "public/uploads/QuizUniverse.png",
  },
  {
    id: "graph-builder",
    title: "Graph Builder",
    description: "Nền tảng cung cấp các ví dụ trực quan và công cụ thực tế để hiểu lý thuyết đồ thị. Cung cấp nhiều tài nguyên giúp khám phá và nắm vững các khái niệm, thuật toán đồ thị.",
    tech: ["React"],
    demoUrl: "https://tranminhphu7425.id.vn/",
    githubUrl: "https://github.com/tranminhphu7425/graphbuilder",
    imageUrl: "public/uploads/GraphBuilder.png",
  },
  {
    id: "SportBooking",
    title: "SportBooking",
    description: "Đặt sân thể thao trực tuyến, hỗ trợ ứng dụng cho cả người đặt sân, người cung cấp dịch vụ sân, và cả admin quản lý hệ thống.",
    tech: ["React", "NodeJS"],
    demoUrl: "https://github.com/tranminhphu7425/badminton-court-booking",
    githubUrl: "https://github.com/tranminhphu7425/badminton-court-booking",
    imageUrl: "SportBooking.png",
  }
];

export const SKILLS: Skill[] = [
  { name: "Lập trình PHP", category: "technical" },
  { name: "ReactJS", category: "technical" },
  { name: "Spring Boot", category: "technical" },
  { name: "NodeJS", category: "technical" },
  { name: "TypeScript", category: "technical" },
  { name: "Thành thạo máy tính", category: "soft" },
  { name: "Kỹ thuật mạng", category: "soft" },
  { name: "Tư duy logic", category: "soft" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Đại học Cần Thơ",
    role: "Sinh Viên",
    period: "2021 - 2025 (4 năm)",
    description: "Theo học chuyên ngành Công nghệ thông tin, tập trung vào phát triển phần mềm và kiến thức hệ thống."
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Google UX Design Professional Certificate", issuer: "Google" },
  { title: "Gemini Certified Student", issuer: "Google Cloud" }
];
