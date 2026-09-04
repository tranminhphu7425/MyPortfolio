import { Project, Skill, Experience, Achievement } from './types';

export const PERSONAL_INFO = {
  fullName: "Trần Minh Phú",
  displayName: "Trần Minh Phú",
  role: "IT Developer",
  tagline: {
    vi: "Người ham học hỏi, kết hợp tư duy logic với sáng tạo để không ngừng hoàn thiện bản thân.",
    en: "An eager learner combining logical thinking with creativity to continuously improve myself."
  },
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
    description: {
      vi: "Nền tảng web toàn diện cho việc tạo, quản lý và tham gia các bài quiz trực tuyến. Frontend hiện đại được xây dựng bằng React và TypeScript, cùng với backend API mạnh mẽ sử dụng Spring Boot.",
      en: "A comprehensive web platform for creating, managing, and taking online quizzes. Modern frontend built with React & TypeScript, powered by a robust Spring Boot backend API."
    },
    tech: ["React", "TypeScript", "Spring Boot"],
    demoUrl: "https://tranminhphu7425.github.io/quiz-universe/#/",
    githubUrl: "https://github.com/tranminhphu7425/quiz-universe",
    imageUrl: "uploads/QuizUniverse.png",
  },
  {
    id: "graph-builder",
    title: "Graph Builder",
    description: {
      vi: "Nền tảng cung cấp các ví dụ trực quan và công cụ thực tế để hiểu lý thuyết đồ thị. Cung cấp nhiều tài nguyên giúp khám phá và nắm vững các khái niệm, thuật toán đồ thị.",
      en: "An interactive platform offering visual examples and hands-on tools to master graph theory concepts and algorithms."
    },
    tech: ["React", "Vue.js"],
    demoUrl: "https://tranminhphu7425.github.io/graphbuilder/#/",
    githubUrl: "https://github.com/tranminhphu7425/graphbuilder",
    imageUrl: "uploads/GraphBuilder.png",
  },
  {
    id: "meeting-room-booking-system",
    title: "Meeting Room Booking System",
    description: {
      vi: "Hệ thống quản lý và đặt phòng họp trực tuyến, giúp tối ưu hóa việc sử dụng không gian làm việc trong doanh nghiệp.",
      en: "An online meeting room booking and management system, optimizing corporate workspace utilization and meeting scheduling."
    },
    tech: ["PHP", "PostgreSQL", "Bootstrap 5"],
    demoUrl: "https://github.com/tranminhphu7425/MeetingRoomBookingSystem",
    githubUrl: "https://github.com/tranminhphu7425/MeetingRoomBookingSystem",
    imageUrl: "uploads/MeetingRoomBookingSystem.png",
  },
  {
    id: "SportBooking",
    title: "SportBooking",
    description: {
      vi: "Đặt sân thể thao trực tuyến, hỗ trợ ứng dụng cho cả người đặt sân, người cung cấp dịch vụ sân, và cả admin quản lý hệ thống.",
      en: "Online sports court booking platform supporting players, venue owners, and system administrators with real-time slot management."
    },
    tech: ["React", "NodeJS"],
    demoUrl: "https://github.com/tranminhphu7425/badminton-court-booking",
    githubUrl: "https://github.com/tranminhphu7425/badminton-court-booking",
    imageUrl: "uploads/SportBooking.png",
  },
];

export const SKILLS: Skill[] = [
  { name: { vi: "Lập trình PHP", en: "PHP Development" }, category: "technical" },
  { name: { vi: "ReactJS", en: "ReactJS" }, category: "technical" },
  { name: { vi: "Spring Boot", en: "Spring Boot" }, category: "technical" },
  { name: { vi: "NodeJS", en: "NodeJS" }, category: "technical" },
  { name: { vi: "TypeScript", en: "TypeScript" }, category: "technical" },
  { name: { vi: "Thành thạo máy tính", en: "Computer Proficiency" }, category: "soft" },
  { name: { vi: "Kỹ thuật mạng", en: "Networking Essentials" }, category: "soft" },
  { name: { vi: "Tư duy logic", en: "Logical Thinking" }, category: "soft" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Đại học Cần Thơ",
    role: { vi: "Sinh Viên CNTT", en: "IT Student" },
    period: { vi: "2021 - 2025 (4 năm)", en: "2021 - 2025 (4 years)" },
    description: {
      vi: "Theo học chuyên ngành Công nghệ thông tin, tập trung vào phát triển phần mềm và kiến thức hệ thống.",
      en: "Majoring in Information Technology, focusing on software development and computer system architecture."
    }
  },
  {
    company: "Google Student Ambassador Program",
    role: { vi: "Đại sứ Sinh viên Google (GSA)", en: "Google Student Ambassador (GSA)" },
    period: { vi: "Hoàn thành nhiệm kỳ", en: "Tenure Completed" },
    description: {
      vi: "Đại diện cho Google tại trường đại học, tiên phong tổ chức các sự kiện công nghệ, workshop AI và Google Workspace. Kết thúc chương trình với thành tích xuất sắc và nhận danh hiệu cao quý nhất.",
      en: "Represented Google at university, pioneering tech events, AI workshops, and Google Workspace sessions. Concluded the tenure with distinguished honors and top accolades."
    },
    badge: { vi: "TOP 5 GSA XUẤT SẮC • TRAILBLAZER", en: "TOP 5 NATIONAL GSA • TRAILBLAZER" },
    images: [
      "uploads/260710_google_NAMNGUYEN_3540.jpg",
      "uploads/260710_google_NAMNGUYEN_4765.jpg"
    ],
    highlights: [
      {
        vi: "Top 5 Google Student Ambassador (GSA) xuất sắc nhất toàn quốc",
        en: "Top 5 Best Performing Google Student Ambassadors nationwide"
      },
      {
        vi: "Vinh danh đạt danh hiệu 'Trailblazer' của chương trình",
        en: "Awarded the prestigious 'Trailblazer' title of the program"
      },
      {
        vi: "Truyền cảm hứng và lan tỏa công nghệ Google & AI đến cộng đồng sinh viên",
        en: "Empowered and inspired the student community with Google & AI technologies"
      }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { 
    title: { 
      vi: "Top 5 GSA Xuất Sắc Toàn Quốc - Danh Hiệu Trailblazer", 
      en: "Top 5 National Outstanding GSA - Trailblazer Award" 
    }, 
    issuer: "Google Student Ambassador Program",
    badge: { vi: "TOP 5 TRAILBLAZER", en: "TOP 5 TRAILBLAZER" },
    highlight: true 
  },
  { 
    title: { 
      vi: "Google UX Design Professional Certificate", 
      en: "Google UX Design Professional Certificate" 
    }, 
    issuer: "Google" 
  },
  { 
    title: { 
      vi: "Gemini Certified Student", 
      en: "Gemini Certified Student" 
    }, 
    issuer: "Google Cloud" 
  }
];
