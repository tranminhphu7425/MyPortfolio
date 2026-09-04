import React, { useState, useEffect, useRef } from 'react';
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
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Send,
  ArrowDown,
  Trophy,
  Star,
  Globe
} from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  useMotionValue
} from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES, ACHIEVEMENTS } from './constants';
import { Language, getText } from './types';
import { TRANSLATIONS } from './translations';
import RetroSign from './components/RetroSign';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 40 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) / (width / strength));
    y.set((clientY - centerY) / (height / strength));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-5 ml-1 bg-[#bc4749] align-middle"
      />
    </span>
  );
};

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = duration * 60;
      const increment = end / totalSteps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const ProjectCard = ({ project, index, language }: { project: any; index: number; language: Language }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const effectClass = index % 3 === 0 ? "crack-br" : index % 3 === 1 ? "spider-web-tl" : "";
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`group relative flex flex-col h-full border-4 border-[#386641] dark:border-white bg-white dark:bg-[#111] overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl dust-overlay ${effectClass}`}
    >
      <div className="dust-layer"></div>
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          whileHover={{ scale: 1.15 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
          <div className="flex gap-4">
            <Magnetic strength={20}>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:text-[#bc4749] hover:scale-110 active:scale-95"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </Magnetic>

            <Magnetic strength={20}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:text-[#bc4749] hover:scale-110 active:scale-95"
              >
                <Github className="w-5 h-5" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black uppercase tracking-tighter text-[#bc4749]">
            {project.title}
          </h3>
          <ChevronRight className="w-6 h-6 text-[#386641] dark:text-white transform group-hover:translate-x-2 transition-transform" />
        </div>
        <p className="text-sm mb-6 flex-grow leading-relaxed text-gray-800 dark:text-gray-100 font-medium">
          {getText(project.description, language)}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="text-[10px] font-black uppercase px-3 py-1 bg-[#386641] dark:bg-white text-white dark:text-[#1a1a1a] rounded-full shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('vi');
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'vi' || savedLang === 'en') {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'vi' ? 'en' : 'vi';
    handleSetLanguage(next);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(t.contact.emailSubject);
    const body = encodeURIComponent(
      `${t.contact.emailBodyName}: ${form.name}\n${t.contact.emailBodyEmail}: ${form.email}\n${t.contact.emailBodyMessage}:\n${form.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const navbarPadding = useTransform(scrollYProgress, [0, 0.05], ["1rem", "0.75rem"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'blog', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <div className={`motion-container min-h-screen transition-colors duration-700 font-medium ${isDarkMode ? 'bg-[#1a1a1a] text-[#FDF5E6]' : 'bg-[#FDF5E6] text-[#333]'}`}>

      {/* Large Background Effects */}
      <div className="bg-web-large" style={{ top: '5%', left: '-5%', transform: 'rotate(180deg)', opacity: 0.6 }} />
      <div className="bg-crack-large" style={{ top: '75%', right: '-5%', transform: 'rotate(-30deg) scale(0.6)' }} />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#bc4749] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        style={{ padding: navbarPadding }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? (isDarkMode ? 'bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-[#FDF5E6]/95 backdrop-blur-xl border-b border-[#386641]/10 shadow-lg') : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black uppercase tracking-tighter retro-shadow text-[#bc4749] flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            PHU'S PORTFOLIO
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Magnetic key={item.id} strength={20}>
                <button
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`relative px-4 py-2 uppercase font-bold text-xs tracking-[0.2em] transition-all duration-300 hover:text-[#bc4749] ${activeTab === item.id ? 'text-[#bc4749]' : isDarkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#bc4749]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <Magnetic strength={20}>
              <div className="flex items-center p-0.5 border-2 border-[#386641] dark:border-white rounded-sm bg-white/40 dark:bg-black/40 text-[10px] font-black tracking-wider shadow-sm">
                <button
                  onClick={() => handleSetLanguage('vi')}
                  className={`px-2 py-1 rounded-sm transition-all ${language === 'vi' ? 'bg-[#bc4749] text-white shadow-md scale-105' : 'text-gray-600 dark:text-gray-300 hover:text-[#bc4749]'}`}
                  aria-label="Tiếng Việt"
                >
                  VI
                </button>
                <button
                  onClick={() => handleSetLanguage('en')}
                  className={`px-2 py-1 rounded-sm transition-all ${language === 'en' ? 'bg-[#bc4749] text-white shadow-md scale-105' : 'text-gray-600 dark:text-gray-300 hover:text-[#bc4749]'}`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>
            </Magnetic>

            {/* Dark Mode Toggle */}
            <Magnetic strength={30}>
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
                aria-label={t.nav.toggleTheme}
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <Sun className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <Moon className="w-5 h-5 text-[#386641]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>

            {/* CV Download Button */}
            <Magnetic strength={20}>
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-[#bc4749] text-white px-5 py-2.5 rounded-sm font-black uppercase text-[10px] tracking-widest hover:bg-[#a53b3d] transition-all flex items-center gap-2 shadow-lg hover:shadow-red-500/20 active:scale-95"
              >
                <Download className="w-4 h-4" /> {t.nav.downloadCv}
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden min-h-[80vh]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#bc4749] to-transparent rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#386641] to-transparent rounded-full blur-[100px]"
          />
        </div>

        <div className="max-w-5xl w-full z-10">
          <RetroSign>
            <div className="relative mb-12 lg:mb-0 shrink-0">
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#386641] dark:border-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-white/5 relative z-10 cursor-pointer dust-overlay spider-web-tr"
              >
                <div className="dust-layer rounded-full"></div>
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.fullName}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-4 bg-[#bc4749] rounded-full -z-0 blur-3xl"
              />
            </div>

            <div className="md:max-w-4xl flex-grow">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tight retro-3d-text"
              >
                {PERSONAL_INFO.displayName}
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ delay: 1, duration: 1 }}
                className="h-2 bg-[#bc4749] mb-8 d-inline mx-auto"
              />

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] mb-8 text-[#386641] dark:text-[#bc4749]"
              >
                {PERSONAL_INFO.role}
              </motion.p>
              <div className="text-lg md:text-xl italic font-semibold mb-12 leading-relaxed text-gray-800 dark:text-[#FDF5E6] h-16">
                <Typewriter text={getText(PERSONAL_INFO.tagline, language)} />
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <Magnetic strength={40}>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group bg-[#386641] text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-[#2d5234] transition-all flex items-center gap-3 shadow-2xl"
                  >
                    {t.hero.hireMe} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Magnetic>
                <Magnetic strength={40}>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-4 border-[#386641] dark:border-retro-dark text-inherit px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-[#386641] dark:hover:bg-retro-dark hover:text-white dark:hover:text-[#FDF5E6] transition-all shadow-xl flex items-center gap-3"
                  >
                    {t.hero.github} <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </RetroSign>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase font-black tracking-widest">{t.nav.scrollDown}</span>
          <ArrowDown className="w-4 h-4 opacity-70" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 px-4 transition-colors duration-1000 ${isDarkMode ? 'bg-[#222]' : 'bg-[#f5ead5]'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2 bg-[#bc4749] text-white font-black uppercase text-xs tracking-[0.4em] mb-8 shadow-lg">
              {t.about.tag}
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-10 tracking-tight retro-shadow leading-none">
              {t.about.heading1} <br /> & <span className="text-[#bc4749]">{t.about.heading2}</span>
            </h2>
            <div className="space-y-6 text-xl leading-relaxed text-gray-800 dark:text-[#FDF5E6] font-medium">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -10 }} className="p-8 border-l-8 border-[#386641] dark:border-white bg-white/50 dark:bg-black/30 backdrop-blur-md shadow-xl">
                <div className="font-black text-[#bc4749] text-5xl mb-2">
                  <Counter value={4} />
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">{t.about.yearsStudy}</div>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="p-8 border-l-8 border-[#386641] dark:border-white bg-white/50 dark:bg-black/30 backdrop-blur-md shadow-xl">
                <div className="font-black text-[#bc4749] text-5xl mb-2">
                  <Counter value={4} />+
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">{t.about.completedProjects}</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-10"
          >
            {/* Skills */}
            <div className="bg-[#386641] text-[#FDF5E6] p-10 rounded-sm shadow-2xl vintage-texture border-4 border-[#386641] dark:bg-retro-dark dark:border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 dust-overlay spider-web-tl relative">
              <div className="dust-layer"></div>
              <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4">
                <Code2 className="w-10 h-10" /> {t.about.skillsTitle}
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                    className={`px-5 py-3 text-xs font-black uppercase border-2 shadow-md ${skill.category === 'technical' ? 'border-[#FDF5E6] text-[#FDF5E6]' : 'border-[#bc4749] text-[#bc4749] bg-[#FDF5E6]'} rounded-sm cursor-default transition-colors`}
                  >
                    {getText(skill.name, language)}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-[#333] p-10 rounded-sm shadow-2xl vintage-texture border-4 border-[#386641] dark:border-white transform md:-rotate-1 hover:rotate-0 transition-transform duration-500 dust-overlay crack-bl relative">
              <div className="dust-layer"></div>
              <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4 text-[#bc4749]">
                <Award className="w-10 h-10" /> {t.about.achievementsTitle}
              </h3>
              <ul className="space-y-4">
                {ACHIEVEMENTS.map((ach, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex flex-col border-b-2 border-gray-100 dark:border-white/10 pb-4 last:border-0 last:pb-0 group transition-all ${
                      ach.highlight
                        ? "p-4 bg-gradient-to-r from-[#bc4749]/15 to-transparent border-l-4 border-l-[#bc4749] rounded-sm mb-2"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-black text-lg md:text-xl text-[#386641] dark:text-[#FDF5E6] group-hover:text-[#bc4749] transition-colors flex items-center gap-2">
                        {ach.highlight && <Trophy className="w-5 h-5 text-[#bc4749] shrink-0 animate-pulse" />}
                        {getText(ach.title, language)}
                      </span>
                      {ach.badge && (
                        <span className="shrink-0 px-2.5 py-0.5 bg-[#bc4749] text-white font-black text-[9px] uppercase tracking-widest shadow-md rounded-full">
                          {getText(ach.badge, language)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-[#FDF5E6] opacity-80 italic font-bold mt-1 uppercase tracking-wider">
                      {ach.issuer}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative">
        <div className="bg-web-large" style={{ top: '0%', left: '-10%', transform: 'scale(1.0)' }} />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-5 py-2 bg-[#bc4749] text-white font-black uppercase text-xs tracking-[0.4em] mb-6"
            >
              {t.projects.tag}
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight retro-shadow">
              {t.projects.heading1} <span className="text-[#386641]">{t.projects.heading2}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} language={language} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Magnetic strength={30}>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] hover:text-[#bc4749] transition-all group">
                {t.projects.viewAllGithub} <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-32 px-4 transition-colors duration-1000 ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#fffbeb]'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <RetroSign variant="secondary" className="border-[6px] shadow-2xl crack-br">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
                {t.experience.heading}
              </h2>
            </RetroSign>
          </motion.div>

          <div className="relative space-y-12">
            {/* Animated Timeline Line */}
            <div className="absolute left-[26px] top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 overflow-hidden">
              <motion.div
                style={{ scaleY: scrollYProgress, originY: 0 }}
                className="w-full h-full bg-[#bc4749]"
              />
            </div>

            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative pl-20 group"
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className={`absolute left-[14px] top-4 w-7 h-7 ${
                    exp.badge ? "bg-[#bc4749]" : "bg-[#386641] dark:bg-[#bc4749]"
                  } rounded-full border-[6px] border-[#FDF5E6] dark:border-[#1a1a1a] z-10 shadow-lg group-hover:scale-125 transition-transform`}
                />

                <div className={`bg-white dark:bg-[#333] p-8 md:p-10 shadow-2xl border-4 border-[#386641] dark:border-white rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] dust-overlay relative ${index % 2 === 0 ? "spider-web-tr" : ""}`}>
                  <div className="dust-layer"></div>
                  
                  {/* Header Info */}
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase text-[#386641] dark:text-white group-hover:text-[#bc4749] transition-colors">
                        {exp.company}
                      </h3>
                      {exp.badge && (
                        <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#bc4749] to-[#d90429] text-white text-[10px] md:text-xs font-black uppercase tracking-widest shadow-md rounded-sm">
                          <Trophy className="w-3.5 h-3.5" />
                          {getText(exp.badge, language)}
                        </div>
                      )}
                    </div>
                    <span className="px-5 py-2 bg-[#bc4749] text-white font-black text-xs uppercase tracking-widest shadow-md">
                      {getText(exp.period, language)}
                    </span>
                  </div>

                  <h4 className="text-xl font-black uppercase mb-4 italic text-gray-800 dark:text-[#FDF5E6] flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-[#bc4749]" /> {getText(exp.role, language)}
                  </h4>

                  <p className="leading-relaxed text-gray-700 dark:text-white font-semibold text-base md:text-lg opacity-90 mb-6">
                    {getText(exp.description, language)}
                  </p>

                  {/* Bullet Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mb-6 p-4 bg-[#FDF5E6]/80 dark:bg-black/30 border-l-4 border-[#386641] dark:border-[#bc4749] rounded-sm">
                      <h5 className="text-xs font-black uppercase tracking-widest text-[#386641] dark:text-[#bc4749] mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" /> {t.experience.highlightsTitle}
                      </h5>
                      <ul className="space-y-2">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200 flex items-start gap-2">
                            <span className="text-[#bc4749] font-black mt-0.5">•</span>
                            <span>{getText(item, language)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Images Showcase */}
                  {exp.images && exp.images.length > 0 && (
                    <div className="mt-6 pt-6 border-t-2 border-gray-100 dark:border-white/10">
                      <h5 className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-300 mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#bc4749]" /> {t.experience.galleryTitle}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {exp.images.map((imgSrc, imgIdx) => (
                          <motion.div
                            key={imgIdx}
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            className="group/img relative bg-[#FDF5E6] dark:bg-[#1a1a1a] p-3 border-4 border-[#386641] dark:border-white shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-300"
                          >
                            <div className="overflow-hidden h-64 md:h-80 border-2 border-dashed border-[#386641]/40 dark:border-white/40">
                              <img
                                src={imgSrc}
                                alt={`${exp.company} achievement ${imgIdx + 1}`}
                                className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-500 group-hover/img:scale-105"
                              />
                            </div>
                            <div className="mt-3 text-center">
                              <span className="text-[11px] font-black uppercase tracking-wider text-[#386641] dark:text-[#FDF5E6] block">
                                {t.experience.imageCaption}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-5 py-2 bg-[#386641] text-white font-black uppercase text-xs tracking-[0.4em] mb-6 shadow-md">
                {t.blog.tag}
              </div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight retro-shadow">
                {t.blog.heading1} <span className="text-[#bc4749]">{t.blog.heading2}</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="max-w-xl text-lg italic text-gray-700 dark:text-[#FDF5E6] font-bold border-l-4 border-[#bc4749] pl-6"
            >
              {t.blog.subtitle}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                id: 1,
                date: "25/02/2026",
                category: language === 'vi' ? "AI • Thủ thuật" : "AI • Tips",
                title: language === 'vi' ? "Hướng dẫn nhận 3 tháng Google AI Pro miễn phí" : "How to Claim 3 Months of Google AI Pro for Free",
                desc: language === 'vi' ? "Thông qua khóa học của Google trên Coursera, bạn sẽ nhận được đặc quyền dùng thử 3 tháng Gemini Advanced + 2TB Google Drive hoàn toàn miễn phí." : "Through Google's course on Coursera, claim 3 months of complimentary Gemini Advanced + 2TB Google Drive storage.",
                href: "#guide",
                target: "_self"
              },
              {
                id: 2,
                date: new Date().toLocaleDateString(language === 'vi' ? 'vi-VN' : 'en-US'),
                category: language === 'vi' ? "Công nghệ • AI" : "Tech • AI",
                title: language === 'vi' ? "Trang Blog Phú Làm Công Nghệ" : "Phú Làm Công Nghệ Tech Blog",
                desc: language === 'vi' ? "Với vai trò GSA, mình tập trung truyền đạt cách ứng dụng AI vào học tập, nghiên cứu, lập trình và công việc thực tế — giúp bạn làm nhanh hơn, hiểu sâu hơn..." : "As a GSA, sharing practical AI integration for learning, research, coding, and real-world work to boost speed and depth...",
                href: "https://www.facebook.com/phulamcongnghe",
                target: "_blank"
              }
            ].map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-10 border-b-4 border-[#386641]/20 pb-12 group cursor-pointer hover:border-[#bc4749] transition-all"
              >
                <div className="hidden sm:block text-7xl font-black text-[#bc4749]/10 group-hover:text-[#bc4749]/40 transition-all transform group-hover:-rotate-12">0{i + 1}</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-black text-[#386641] dark:text-[#6a994e] uppercase tracking-widest">
                    <BookOpen className="w-4 h-4" /> {post.category} • {post.date}
                  </div>
                  <h3 className="text-3xl font-black uppercase group-hover:text-[#bc4749] transition-all leading-tight">{post.title}</h3>
                  <p className="text-base line-clamp-3 text-gray-800 dark:text-white font-semibold leading-relaxed">{post.desc}</p>
                  <Magnetic strength={15}>
                    <a
                      href={post.href}
                      target={post.target}
                      {...(post.target === "_blank" ? { rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-3 font-black uppercase text-xs tracking-[0.3em] hover:gap-6 transition-all hover:text-[#bc4749]"
                    >
                      {t.blog.readMore} <ArrowRight className="w-5 h-5" />
                    </a>
                  </Magnetic>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <RetroSign className="mb-12 border-[6px] shadow-2xl spider-web-tl" noneRow>
                <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter retro-3d-text">
                  {t.contact.title1} <span className="text-white">{t.contact.title2}</span>
                </h2>
                <p className="font-black uppercase tracking-[0.3em] text-[#bc4749] bg-white/10 py-2 inline-block px-3">
                  {t.contact.tagline}
                </p>
              </RetroSign>

              <div className="space-y-8 mt-16">
                <motion.div whileHover={{ x: 15 }} className="flex items-center gap-8 p-6 bg-white/50 dark:bg-black/40 border-4 border-[#386641]/20 hover:border-[#386641] dark:hover:border-white transition-all group shadow-xl backdrop-blur-md dust-overlay crack-bl relative">
                  <div className="dust-layer"></div>
                  <div className="p-5 bg-[#386641] text-white rounded-sm shadow-lg transform group-hover:rotate-12 transition-transform">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-1">{t.contact.emailLabel}</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl md:text-2xl font-black hover:text-[#bc4749] break-all dark:text-white transition-colors">{PERSONAL_INFO.email}</a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 15 }} className="flex items-center gap-8 p-6 bg-white/50 dark:bg-black/40 border-4 border-[#386641]/20 hover:border-[#386641] dark:hover:border-white transition-all group shadow-xl backdrop-blur-md dust-overlay spider-web-tr relative">
                  <div className="dust-layer"></div>
                  <div className="p-5 bg-[#bc4749] text-white rounded-sm shadow-lg transform group-hover:-rotate-12 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-1">{t.contact.phoneLabel}</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xl md:text-2xl font-black hover:text-[#bc4749] dark:text-white transition-colors">{PERSONAL_INFO.phone}</a>
                  </div>
                </motion.div>

                <div className="flex gap-6 pt-8">
                  <Magnetic strength={40}>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-5 border-4 border-[#386641] dark:border-white bg-white/20 backdrop-blur-md shadow-2xl hover:bg-[#386641] hover:text-white transition-all duration-300"
                    >
                      <Github className="w-8 h-8" />
                    </a>
                  </Magnetic>

                  <Magnetic strength={40}>
                    <a
                      href={PERSONAL_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-5 border-4 border-[#386641] dark:border-white bg-white/20 backdrop-blur-md shadow-2xl hover:bg-[#386641] hover:text-white transition-all duration-300"
                    >
                      <Facebook className="w-8 h-8" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#222] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[6px] border-[#386641] dark:border-white relative vintage-texture"
            >
              <h3 className="text-4xl font-black uppercase mb-12 text-center text-[#386641] dark:text-[#bc4749] tracking-tighter">
                {t.contact.formTitle}
              </h3>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-[#bc4749] dark:text-white block">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full p-5 border-4 border-[#386641] dark:border-white bg-transparent focus:outline-none focus:ring-4 focus:ring-[#bc4749]/20 transition-all font-black uppercase tracking-widest text-inherit placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-[#bc4749] dark:text-white block">
                    {t.contact.emailFieldLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="w-full p-5 border-4 border-[#386641] dark:border-white bg-transparent focus:outline-none focus:ring-4 focus:ring-[#bc4749]/20 transition-all font-black uppercase tracking-widest text-inherit placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-[#bc4749] dark:text-white block">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    onChange={handleChange}
                    value={form.message}
                    placeholder={t.contact.messagePlaceholder}
                    required
                    className="w-full p-5 border-4 border-[#386641] dark:border-white bg-transparent focus:outline-none focus:ring-4 focus:ring-[#bc4749]/20 transition-all font-black uppercase tracking-widest text-inherit placeholder:text-gray-300 dark:placeholder:text-gray-600"
                  />
                </div>
                <Magnetic strength={20}>
                  <button
                    type="submit"
                    className="group w-full bg-[#bc4749] text-white py-6 font-black uppercase tracking-[0.4em] text-sm hover:bg-[#a53b3d] transition-all transform active:scale-95 shadow-2xl flex items-center justify-center gap-4"
                  >
                    {t.contact.sendButton} <Send className="w-5 h-5 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
                  </button>
                </Magnetic>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Background decorative text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap text-[30vw] font-black uppercase tracking-tighter leading-none"
          >
            TRAN MINH PHU • IT DEVELOPER • CREATIVE THINKING • VISUAL DESIGN •
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-20 border-t-[8px] border-[#bc4749] ${isDarkMode ? 'bg-[#111]' : 'bg-[#FDF5E6]'} relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left relative z-10">
          <div>
            <motion.div
              whileHover={{ letterSpacing: "0.2em" }}
              className="text-4xl font-black uppercase tracking-tighter text-[#bc4749] cursor-default transition-all duration-500"
            >
              TRẦN MINH PHÚ
            </motion.div>
            <div className="text-xs uppercase font-black mt-2 tracking-[0.5em] text-gray-500 dark:text-white/40">
              {t.footer.rights}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10 uppercase font-black text-[10px] tracking-[0.4em]">
            {navItems.map(item => (
              <Magnetic key={item.id} strength={10}>
                <a href={`#${item.id}`} className="hover:text-[#bc4749] transition-colors">{item.label}</a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <motion.div whileHover={{ y: -5, rotate: 10 }} className="w-14 h-14 border-4 border-[#386641] dark:border-white flex items-center justify-center font-black text-2xl hover:bg-[#386641] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1a1a] transition-all cursor-default shadow-lg">P</motion.div>
            <motion.div whileHover={{ y: -5, rotate: -10 }} className="w-14 h-14 border-4 border-[#bc4749] flex items-center justify-center font-black text-2xl hover:bg-[#bc4749] hover:text-white transition-all cursor-default shadow-lg">H</motion.div>
            <motion.div whileHover={{ y: -5, rotate: 10 }} className="w-14 h-14 border-4 border-[#386641] dark:border-white flex items-center justify-center font-black text-2xl hover:bg-[#386641] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1a1a] transition-all cursor-default shadow-lg">U</motion.div>
          </div>
        </div>

        {/* Subtle footer pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#386641_1px,transparent_1px)] [background-size:20px_20px]" />
      </footer>

      {/* Fixed Scroll-to-top */}
      <AnimatePresence>
        {scrolled && (
          <Magnetic strength={40}>
            <motion.button
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 w-16 h-16 bg-[#bc4749] text-white rounded-full shadow-[0_15px_40px_-10px_rgba(188,71,73,0.5)] z-[100] hover:scale-110 active:scale-90 transition-all flex items-center justify-center group overflow-hidden"
              aria-label="Scroll to top"
            >
              <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
              <motion.div
                className="absolute inset-0 border-4 border-white rounded-full"
                style={{
                  pathLength: scrollYProgress,
                  clipPath: `inset(${(1 - scrollYProgress.get()) * 100}% 0 0 0)`
                }}
              />
              <ArrowRight className="w-8 h-8 -rotate-90 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </Magnetic>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
