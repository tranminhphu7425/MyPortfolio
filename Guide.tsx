import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Moon,
  Sun,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroSign from './components/RetroSign';

const Guide: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className={`motion-container min-h-screen transition-colors duration-700 font-medium ${isDarkMode ? 'bg-[#1a1a1a] text-[#FDF5E6]' : 'bg-[#FDF5E6] text-[#333]'}`}>

      {/* Background Effects */}
      <div className="bg-web-large fixed" style={{ top: '5%', right: '-5%', opacity: 0.6 }} />
      <div className="bg-crack-large fixed" style={{ bottom: '10%', left: '-5%', transform: 'scale(0.8)', opacity: 0.4 }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FDF5E6]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border-b ${isDarkMode ? 'border-white/10' : 'border-[#386641]/10'} shadow-lg`}>
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
          <a
            href="/"
            className="text-[#bc4749] font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-[-5px] transition-transform"
          >
            <ArrowLeft className="w-5 h-5" /> QUAY LẠI
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
            aria-label="Toggle Dark Mode"
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
        </div>
      </nav>

      {/* Main Content */}
      <main className=" pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 dark:border-[#386641]/20 mb-12">
          <header className="p-5">
            <div className="flex gap-3 mb-6">
              <span className="inline-block px-4 py-1 bg-[#bc4749] text-white font-black uppercase text-xs tracking-widest shadow-md">
                AI & AUTOMATION
              </span>
              <span className="inline-block px-4 py-1 bg-[#386641] text-white font-black uppercase text-xs tracking-widest shadow-md">
                THỦ THUẬT HAY
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#386641] to-[#6a994e] dark:from-[#FDF5E6] dark:to-[#e9d8a6] drop-shadow-sm">
                Hướng dẫn cách nhận 3 tháng Google AI Pro miễn phí
              </span>
              <span className="flex items-center gap-3 mt-3 text-xl md:text-2xl text-[#bc4749] dark:text-[#ff758f] drop-shadow-md">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bc4749] dark:bg-[#ff758f] opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#bc4749] dark:bg-[#ff758f]"></span>
                </span>
                (Gemini Advanced + 2TB)
              </span>
            </h1>

            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 border-l-4 border-[#bc4749] pl-4">
              <time>19/03/2026</time>
              <span>•</span>
              <span>Trần Minh Phú</span>
            </div>
          </header>
        </div>

        {/* Article Body */}
        <article className="prose prose-lg dark:prose-invert max-w-none 
          prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight 
          prose-h3:text-2xl prose-h3:text-[#bc4749] prose-h3:mt-12 prose-h3:mb-6
          prose-h4:text-xl prose-h4:text-[#386641] dark:prose-h4:text-[#6a994e] prose-h4:mt-10 prose-h4:mb-4
          prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:font-medium prose-p:leading-relaxed
          prose-li:text-gray-800 dark:prose-li:text-gray-200 prose-li:font-medium
          prose-a:text-[#bc4749] hover:prose-a:text-[#386641] prose-a:font-bold prose-a:transition-colors
          prose-strong:font-black prose-strong:text-[#386641] dark:prose-strong:text-[#bc4749]">

          <p className="text-xl border-4 border-[#386641]/20 p-6 bg-white/50 dark:bg-black/30 backdrop-blur-sm shadow-xl rounded-sm mb-12 relative overflow-hidden dust-overlay">
            <div className="dust-layer"></div>
            Hiện tại, thông qua khóa học "AI Fundamentals" của Google trên nền tảng Coursera, bạn có thể nhận được đặc quyền dùng thử <strong>3 tháng Google AI Pro hoàn toàn miễn phí</strong>. Gói này cung cấp cho bạn quyền truy cập vào các mô hình AI mới nhất của Google (Gemini) và 2TB dung lượng lưu trữ.
          </p>

          <h3 className="flex items-center gap-3"><CheckCircle2 className="w-8 h-8" /> Yêu cầu chuẩn bị:</h3>
          <ol className="list-decimal pl-6 space-y-3 marker:text-[#bc4749] marker:font-black">
            <li>Một tài khoản Google (Gmail) để nhận ưu đãi.</li>
            <li>Thẻ thanh toán quốc tế (Visa/Mastercard) có sẵn một số tiền nhỏ (khoảng 1$) để xác minh thẻ (hệ thống sẽ tự động hoàn lại khoản này).</li>
          </ol>

          <h3 className="flex items-center gap-3"><Info className="w-8 h-8" /> Các bước thực hiện:</h3>

          <h4>Bước 1: Đăng ký tài khoản và kích hoạt dùng thử Coursera (7 ngày)</h4>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#386641] dark:marker:text-[#6a994e]">
            <li>Truy cập trang chủ <a href="https://www.coursera.org/" target="_blank" rel="noreferrer noopener external">www.coursera.org</a>.</li>
            <li>Tạo một tài khoản mới (hoặc đăng nhập nếu bạn đã có).</li>
            <li>Bấm vào nút <strong>Start 7-day Free Trial</strong> (Bắt đầu 7 ngày dùng thử miễn phí).</li>
            <li>Nhập thông tin thẻ Visa/Mastercard của bạn để hoàn tất đăng ký. Hệ thống có thể sẽ trừ thử 1$ để xác minh thẻ sống, nhưng đừng lo, số tiền này sẽ được hoàn trả lại sau đó.</li>
          </ul>
          <div className="my-8 p-2 border-4 border-[#386641] dark:border-white shadow-2xl bg-white dark:bg-[#1a1a1a] transform -rotate-1 hover:rotate-0 transition-transform">
            <img src="/guide/Coursera-Credit-Card-1024x654.png" alt="Coursera Credit Card" className="w-full h-auto  hover:grayscale-0 transition-all duration-500" />
          </div>

          <h4>Bước 2: Tìm và tham gia khóa học Google AI</h4>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#386641] dark:marker:text-[#6a994e]">
            <li>Sử dụng thanh tìm kiếm của Coursera, tìm từ khóa <strong>“AI Fundamentals”</strong> (khóa học do Google cung cấp).</li>
            <li>Bấm tham gia (Enroll) vào khóa học này.</li>
          </ul>
          <div className="my-8 p-2 border-4 border-[#386641] dark:border-white shadow-2xl bg-white dark:bg-[#1a1a1a] transform rotate-1 hover:rotate-0 transition-transform">
            <img src="/guide/Coursera-AI-Fundamentals-1024x56.png" alt="Coursera AI Fundamentals" className="w-full h-auto  hover:grayscale-0 transition-all duration-500" />
          </div>

          <h4>Bước 3: Tìm đến phần nhận thưởng ở Module 2</h4>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#386641] dark:marker:text-[#6a994e]">
            <li>Trong giao diện của khóa học, nhìn sang thanh menu bên trái, chọn <strong>Module 2</strong>.</li>
            <li>Tại mục <em>Practice using AI</em>, bạn sẽ thấy các bài học. Hãy click vào mục có tên “<strong>Complete labs with Google AI Pro at no cost</strong>” và làm theo hướng dẫn để hoàn thành bài học này, sao đó sẽ mở khoá được bài học tiếp theo là: <strong>Redeem your Google AI Pro trial</strong> (Đổi bản dùng thử Google AI Pro của bạn).</li>
          </ul>
          <div className="my-8 p-2 border-4 border-[#386641] dark:border-white shadow-2xl bg-white dark:bg-[#1a1a1a] transform -rotate-1 hover:rotate-0 transition-transform">
            <img src="/guide/Redeem-your-Google-AI-Pro-trial.png" alt="Redeem your Google AI Pro trial" className="w-full h-auto  hover:grayscale-0 transition-all duration-500" />
          </div>

          <h4>Bước 4: Kích hoạt ưu đãi</h4>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#386641] dark:marker:text-[#6a994e]">
            <li>Giao diện bên phải sẽ hiện ra thông tin chi tiết về gói 3 tháng dùng thử.</li>
            <li>Bạn kéo xuống dưới cùng, tích chọn vào ô: <strong>“I agree to use this app responsibly”</strong> (Tôi đồng ý sử dụng ứng dụng này một cách có trách nhiệm).</li>
            <li>Sau đó, bấm vào nút xanh <strong>Launch App</strong> (Mở ứng dụng).</li>
          </ul>
          <div className="my-8 p-2 border-4 border-[#386641] dark:border-white shadow-2xl bg-white dark:bg-[#1a1a1a]">
            <img src="/guide/Redeem-your-Google-AI-Pro-trial (1).png" alt="Launch App" className="w-full h-auto  hover:grayscale-0 transition-all duration-500" />
          </div>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#386641] dark:marker:text-[#6a994e]">
            <li>Trình duyệt sẽ chuyển hướng bạn sang trang của Google. Tại đây, hãy làm theo các bước trên màn hình, xác nhận phương thức thanh toán của Google (sẽ hiển thị 0đ cho 3 tháng đầu tiên) để hoàn tất kích hoạt.</li>
          </ul>
          <div className="my-8 grid md:grid-cols-2 gap-6">
            <div className="p-2 border-4 border-[#386641] dark:border-white shadow-xl bg-white dark:bg-[#1a1a1a] transform rotate-3 hover:rotate-0 transition-transform">
              <img src="/guide/Redeem-your-Google-AI-Pro-trial (2).png" alt="Google Pay 1" className="w-full h-auto hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="p-2 border-4 border-[#386641] dark:border-white shadow-xl bg-white dark:bg-[#1a1a1a] transform -rotate-3 hover:rotate-0 transition-transform">
              <img src="/guide/Redeem-your-Google-AI-Pro-trial (3).png" alt="Google Pay 2" className="w-full h-auto  hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          <h4 className="text-[#bc4749] !text-[#bc4749] flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" /> Bước 5: Hủy gia hạn để tránh mất tiền (RẤT QUAN TRỌNG)
          </h4>
          <p>Sau khi đã chắc chắn tài khoản Google của bạn được nâng cấp lên gói 3 tháng Pro thành công, bạn cần làm 2 việc sau để không bị trừ tiền oan:</p>
          <ol className="list-decimal pl-6 space-y-3 marker:text-[#bc4749] marker:font-black">
            <li><strong>Hủy gia hạn Coursera:</strong> Quay lại trang Coursera, click vào Avatar ở góc trên bên phải &gt; Thanh toán (My Purchases) và chọn <strong>Cancel Subscription</strong> gói 7 ngày dùng thử.</li>
          </ol>
          <div className="my-8 p-2 border-4 border-[#386641] dark:border-white shadow-2xl bg-white dark:bg-[#1a1a1a] transform rotate-1 hover:rotate-0 transition-transform">
            <img src="/guide/Coursera-Cancel-Subscription-102.png" alt="Cancel Subscription" className="w-full h-auto  hover:grayscale-0 transition-all duration-500" />
          </div>
          <ol start={2} className="list-decimal pl-6 space-y-3 marker:text-[#bc4749] marker:font-black">
            <li><strong>Hủy gia hạn Google One:</strong> Vào trang quản lý của Google One (hoặc Google Play), chọn hủy gia hạn gói Google AI Pro.</li>
          </ol>

          <div className="my-12 p-6 border-l-8 border-[#bc4749] bg-[#bc4749]/10 dark:bg-[#bc4749]/20 font-medium">
            <h5 className="font-black uppercase tracking-widest text-[#bc4749] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5" /> LƯU Ý:
            </h5>
            <p className="m-0 text-gray-800 dark:text-gray-200">Dù bạn bấm hủy gia hạn ngay lập tức, tài khoản Google của bạn vẫn sẽ giữ nguyên đặc quyền 3 tháng VIP (Pro) đã được tặng.</p>
          </div>

          <h3 className="flex items-center gap-3"><Info className="w-8 h-8" /> Một số lưu ý về điều kiện áp dụng (Eligibility):</h3>
          <ul className="list-disc pl-6 space-y-3 marker:text-[#386641] dark:marker:text-[#6a994e]">
            <li><strong>Thời hạn đổi mã:</strong> Mã ưu đãi phải được kích hoạt trước ngày <strong>01/01/2027</strong>.</li>
            <li><strong>Tài khoản hợp lệ:</strong> Ưu đãi này thường áp dụng cho tài khoản mới hoặc người dùng Google One hiện tại chưa từng dùng các gói tương đương hoặc cao hơn. Không áp dụng cho các tài khoản đang nằm trong gói Gia đình (Family) mà không phải là quản trị viên, hoặc các tài khoản Google Workspace (tài khoản doanh nghiệp/giáo dục).</li>
            <li>Không thể cộng dồn với các ưu đãi Google One khác.</li>
          </ul>

          <p className="mt-12 text-center text-xl font-black uppercase tracking-widest text-[#386641] dark:text-[#bc4749] italic">
            Chúc các bạn thao tác thành công và có trải nghiệm tuyệt vời với sức mạnh của Google AI!
          </p>

        </article>
      </main>
    </div>
  );
};

export default Guide;
