
import { Project, Skill, Experience, Achievement } from './types';

export const PERSONAL_INFO = {
  fullName: "Trần Minh Phú",
  displayName: "Trần Minh Phú",
  role: "IT Developer",
  tagline: "Người ham học hỏi, kết hợp tư duy logic với sáng tạo để không ngừng hoàn thiện bản thân.",
  avatar: "uploads/gsa-vn26-1fd3a643-0f49-4fa2-9f74-ba42982986c2.jpg",
  cvUrl: "uploads/TranMinhPhu's CV.pdf",
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
    imageUrl: "uploads/QuizUniverse.png",
  },
  {
    id: "graph-builder",
    title: "Graph Builder",
    description: "Nền tảng cung cấp các ví dụ trực quan và công cụ thực tế để hiểu lý thuyết đồ thị. Cung cấp nhiều tài nguyên giúp khám phá và nắm vững các khái niệm, thuật toán đồ thị.",
    tech: ["React", "Vue.js"],
    demoUrl: "https://tranminhphu7425.github.io/graphbuilder/#/",
    githubUrl: "https://github.com/tranminhphu7425/graphbuilder",
    imageUrl: "uploads/GraphBuilder.png",
  },
  {
    id: "SportBooking",
    title: "SportBooking",
    description: "Đặt sân thể thao trực tuyến, hỗ trợ ứng dụng cho cả người đặt sân, người cung cấp dịch vụ sân, và cả admin quản lý hệ thống.",
    tech: ["React", "NodeJS"],
    demoUrl: "https://github.com/tranminhphu7425/badminton-court-booking",
    githubUrl: "https://github.com/tranminhphu7425/badminton-court-booking",
    imageUrl: "uploads/SportBooking.png",
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
  },
  {
    company: "Google Student Ambassador Program",
    role: "Đại sứ sinh viên Google",
    period: "2026 - 2027 (1 năm)",
    description: "Đại diện cho Google tại trường đại học, tổ chức sự kiện, chia sẻ kiến thức về công nghệ và hỗ trợ cộng đồng sinh viên trong việc tiếp cận các sản phẩm và dịch vụ của Google."
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Google UX Design Professional Certificate", issuer: "Google" },
  { title: "Gemini Certified Student", issuer: "Google Cloud" }
];
