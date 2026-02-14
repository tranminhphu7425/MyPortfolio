
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Facebook, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Moon, 
  Sun, 
  Code2, 
  Award, 
  Briefcase, 
  User, 
  BookOpen, 
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES, ACHIEVEMENTS } from './constants';
import RetroSign from './components/RetroSign';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Về tôi' },
    { id: 'projects', label: 'Dự án' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-[#FDF5E6]' : 'bg-[#FDF5E6] text-[#333]'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#FDF5E6]/10 shadow-2xl' : 'bg-[#FDF5E6]/95 backdrop-blur-md border-b border-[#386641]/20 shadow-md'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black uppercase tracking-tighter retro-shadow text-[#bc4749] flex items-center gap-2">
            <Sparkles className="w-6 h-6" /> MINH PHÚ
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                   document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                   setActiveTab(item.id);
                }}
                className={`uppercase font-bold text-sm tracking-widest hover:text-[#bc4749] transition-colors ${activeTab === item.id ? 'text-[#bc4749] border-b-2 border-[#bc4749]' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href={PERSONAL_INFO.cvUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#bc4749] text-[#FDF5E6] px-4 py-2 rounded-sm font-bold uppercase text-xs tracking-tighter hover:bg-[#a53b3d] transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden min-h-screen">
        <div className="max-w-4xl w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <div className="relative mb-12">
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-[#386641] shadow-2xl relative z-10"
               >
                 <img 
                   src={PERSONAL_INFO.avatar} 
                   alt={PERSONAL_INFO.fullName} 
                   className="w-full h-full object-cover"
                 />
               </motion.div>
               <div className="absolute -top-4 -left-4 w-full h-full bg-[#bc4749] rounded-full -z-0 opacity-20 blur-xl animate-pulse"></div>
            </div>

            <RetroSign className="w-full md:max-w-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
               <h1 className="text-4xl md:text-6xl font-black uppercase mb-2 tracking-tighter retro-3d-text">
                 {PERSONAL_INFO.displayName}
               </h1>
               <div className="h-1 w-24 bg-[#bc4749] mb-4"></div>
               <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#386641] dark:text-[#386641] opacity-80 mb-6">
                 {PERSONAL_INFO.role}
               </p>
               <p className="text-base md:text-lg italic font-medium max-w-lg mb-8 text-gray-700 dark:text-gray-800 leading-relaxed">
                 "{PERSONAL_INFO.tagline}"
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#386641] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#2d5234] transition-all flex items-center gap-2 shadow-lg"
                  >
                    Thuê Tôi <ArrowRight className="w-4 h-4" />
                  </button>
                  <a 
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    className="border-2 border-[#386641] text-[#386641] px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#386641] hover:text-white transition-all shadow-md"
                  >
                    GitHub
                  </a>
               </div>
            </RetroSign>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${isDarkMode ? 'bg-[#222]' : 'bg-[#f5ead5]'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-[#bc4749] text-white font-bold uppercase text-xs tracking-widest mb-4">
              VỀ TÔI
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight retro-shadow">
              Hành Trình & Đam Mê
            </h2>
            <div className="space-y-4 text-lg leading-relaxed dark:text-gray-100">
              <p>
                Tôi là một sinh viên CNTT tại Đại học Cần Thơ, người luôn khao khát khám phá thế giới công nghệ. 
                Với sự kiên trì và tư duy logic, tôi không chỉ học cách lập trình mà còn học cách giải quyết vấn đề một cách sáng tạo.
              </p>
              <p>
                Phong cách làm việc của tôi là sự kết hợp giữa kỹ thuật vững chắc và tinh thần đổi mới. 
                Tôi tin rằng mỗi dòng code đều là một phần của giải pháp lớn hơn nhằm cải thiện trải nghiệm người dùng.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-[#386641] bg-white/50 dark:bg-black/30 backdrop-blur-sm">
                <div className="font-bold text-[#bc4749] text-2xl">4 Năm</div>
                <div className="text-sm font-bold uppercase opacity-60">Kinh nghiệm học tập</div>
              </div>
              <div className="p-4 border-l-4 border-[#386641] bg-white/50 dark:bg-black/30 backdrop-blur-sm">
                <div className="font-bold text-[#bc4749] text-2xl">3+</div>
                <div className="text-sm font-bold uppercase opacity-60">Dự án hoàn thiện</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-[#386641] text-[#FDF5E6] p-8 rounded-sm shadow-xl vintage-texture border-2 border-[#386641]">
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6" /> Kỹ năng
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`px-4 py-2 text-sm font-bold uppercase border-2 ${skill.category === 'technical' ? 'border-[#FDF5E6] text-[#FDF5E6]' : 'border-[#bc4749] text-[#bc4749] bg-[#FDF5E6]'} rounded-sm`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#333] p-8 rounded-sm shadow-xl vintage-texture border-2 border-[#386641]">
              <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2 text-[#bc4749]">
                <Award className="w-6 h-6" /> Chứng chỉ
              </h3>
              <ul className="space-y-4">
                {ACHIEVEMENTS.map((ach, index) => (
                  <li key={index} className="flex flex-col border-b border-gray-100 dark:border-white/10 pb-2 last:border-0 last:pb-0">
                    <span className="font-bold text-lg text-[#386641] dark:text-[#FDF5E6]">{ach.title}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-200 italic font-medium">{ach.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-[#bc4749] text-white font-bold uppercase text-xs tracking-widest mb-4">
              DANH MỤC DỰ ÁN
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight retro-shadow">
              Sản Phẩm Tiêu Biểu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex flex-col h-full border-4 border-[#386641] bg-white dark:bg-[#111] overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-4">
                      <a href={project.demoUrl} target="_blank" className="text-white hover:text-[#bc4749] transition-colors p-2 bg-black/40 rounded-full backdrop-blur-sm">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href={project.githubUrl} target="_blank" className="text-white hover:text-[#bc4749] transition-colors p-2 bg-black/40 rounded-full backdrop-blur-sm">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase mb-3 tracking-tighter text-[#bc4749]">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-3 flex-grow leading-relaxed text-gray-700 dark:text-gray-100">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase px-2 py-1 bg-[#386641] text-white rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#fffbeb]'}`}>
        <div className="max-w-4xl mx-auto">
          <RetroSign variant="secondary" className="mb-12">
             <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
               Kinh Nghiệm & Học Vấn
             </h2>
          </RetroSign>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-4 border-[#bc4749] pb-8 last:pb-0"
              >
                <div className="absolute left-[-14px] top-0 w-6 h-6 bg-[#bc4749] rounded-full border-4 border-[#FDF5E6]"></div>
                <div className="bg-white dark:bg-[#333] p-6 shadow-lg border-2 border-[#386641] rounded-sm transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                    <h3 className="text-2xl font-black uppercase text-[#386641] dark:text-[#6a994e]">
                      {exp.company}
                    </h3>
                    <span className="px-3 py-1 bg-[#bc4749] text-white font-bold text-xs uppercase rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold uppercase mb-4 opacity-80 italic text-gray-800 dark:text-gray-200">{exp.role}</h4>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-100">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-[#386641] text-white font-bold uppercase text-xs tracking-widest mb-4">
                CHIA SẺ KIẾN THỨC
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight retro-shadow">
                Blog Cá Nhân
              </h2>
            </div>
            <p className="max-w-md text-sm italic opacity-80 text-gray-700 dark:text-gray-300">
              Viết về công nghệ, lập trình và cách ứng dụng AI trong thực tế để tối ưu hóa hiệu suất công việc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-6 border-b-2 border-[#386641]/20 pb-8 group cursor-pointer">
                <div className="hidden sm:block text-5xl font-black text-[#bc4749]/20 group-hover:text-[#bc4749] transition-colors">0{i}</div>
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#386641] dark:text-[#6a994e] uppercase">Công nghệ • AI • {new Date().toLocaleDateString('vi-VN')}</div>
                  <h3 className="text-2xl font-black uppercase group-hover:text-[#bc4749] transition-colors">Ứng dụng Gemini AI vào quy trình phát triển phần mềm hiện đại</h3>
                  <p className="text-sm line-clamp-2 text-gray-700 dark:text-gray-200">Khám phá cách tận dụng sức mạnh của các mô hình ngôn ngữ lớn để tăng tốc độ code và cải thiện chất lượng sản phẩm...</p>
                  <div className="flex items-center gap-2 font-black uppercase text-xs tracking-tighter group-hover:gap-4 transition-all">
                    Đọc thêm <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <RetroSign className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter retro-3d-text">
                  Liên Hệ Ngay
                </h2>
                <p className="font-bold uppercase tracking-widest text-[#bc4749]">
                  Hãy cùng nhau tạo ra điều gì đó tuyệt vời!
                </p>
              </RetroSign>

              <div className="space-y-6 mt-12">
                <div className="flex items-center gap-6 p-4 bg-white/50 dark:bg-black/20 border-2 border-[#386641]/20 hover:border-[#386641] transition-all group shadow-sm">
                   <div className="p-4 bg-[#386641] text-white rounded-sm transition-transform group-hover:rotate-12">
                     <Mail className="w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-xs font-bold uppercase opacity-60">Email cho tôi</div>
                     <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold hover:text-[#bc4749] break-all">{PERSONAL_INFO.email}</a>
                   </div>
                </div>

                <div className="flex items-center gap-6 p-4 bg-white/50 dark:bg-black/20 border-2 border-[#386641]/20 hover:border-[#386641] transition-all group shadow-sm">
                   <div className="p-4 bg-[#bc4749] text-white rounded-sm transition-transform group-hover:-rotate-12">
                     <Phone className="w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-xs font-bold uppercase opacity-60">Gọi cho tôi</div>
                     <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold hover:text-[#bc4749]">{PERSONAL_INFO.phone}</a>
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={PERSONAL_INFO.github} target="_blank" className="p-4 border-2 border-[#386641] hover:bg-[#386641] hover:text-white transition-all shadow-md">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={PERSONAL_INFO.facebook} target="_blank" className="p-4 border-2 border-[#386641] hover:bg-[#386641] hover:text-white transition-all shadow-md">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#222] p-10 shadow-2xl border-4 border-[#386641] relative vintage-texture"
            >
              <h3 className="text-3xl font-black uppercase mb-8 text-center text-[#386641]">
                Gửi Lời Nhắn
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#bc4749]">Họ và Tên</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full p-4 border-2 border-[#386641] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#bc4749]/20 transition-all font-medium text-inherit"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#bc4749]">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full p-4 border-2 border-[#386641] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#bc4749]/20 transition-all font-medium text-inherit"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#bc4749]">Nội dung</label>
                  <textarea 
                    rows={4}
                    placeholder="Chào Phú, tôi muốn hợp tác cùng bạn..." 
                    className="w-full p-4 border-2 border-[#386641] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#bc4749]/20 transition-all font-medium text-inherit"
                  />
                </div>
                <button 
                  className="w-full bg-[#bc4749] text-white py-4 font-black uppercase tracking-widest hover:bg-[#a53b3d] transition-all transform active:scale-95 shadow-lg"
                >
                  Gửi Thông Tin
                </button>
              </form>
            </motion.div>

          </div>
        </div>
        
        {/* Background decorative text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
          <div className="whitespace-nowrap text-[20vw] font-black uppercase tracking-tighter leading-none">
            THIẾT KẾ • LẬP TRÌNH • SÁNG TẠO • TRẦN MINH PHÚ • 
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t-4 border-[#bc4749] ${isDarkMode ? 'bg-[#111]' : 'bg-[#FDF5E6]'}`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-2xl font-black uppercase tracking-tighter text-[#bc4749]">
              TRẦN MINH PHÚ
            </div>
            <div className="text-xs uppercase font-bold opacity-60 mt-1">
              © 2024 Bản quyền thuộc về tôi.
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 uppercase font-bold text-xs tracking-widest">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-[#bc4749] transition-colors">{item.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <div className="w-10 h-10 border-2 border-[#386641] flex items-center justify-center font-black text-xl hover:bg-[#386641] hover:text-white transition-colors cursor-default">P</div>
             <div className="w-10 h-10 border-2 border-[#bc4749] flex items-center justify-center font-black text-xl hover:bg-[#bc4749] hover:text-white transition-colors cursor-default">H</div>
             <div className="w-10 h-10 border-2 border-[#386641] flex items-center justify-center font-black text-xl hover:bg-[#386641] hover:text-white transition-colors cursor-default">U</div>
          </div>
        </div>
      </footer>

      {/* Fixed Scroll-to-top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-[#bc4749] text-white rounded-full shadow-2xl z-40 hover:scale-110 active:scale-90 transition-all opacity-80 hover:opacity-100 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-6 h-6 -rotate-90" />
      </button>

    </div>
  );
};

export default App;
