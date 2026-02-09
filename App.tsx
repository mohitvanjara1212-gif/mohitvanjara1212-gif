import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ChatBot } from './components/ChatBot';
import { Dashboard } from './components/Dashboard';
import StudyMaterialPage from './components/StudyMaterialPage';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'dashboard' | 'study-material'>('landing');
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'login'
  });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuth = (mode: 'login' | 'register') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setAuthModal(p => ({ ...p, isOpen: false }));
    // Stay on index/landing page instead of redirecting to dashboard automatically
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('landing');
  };

  if (view === 'dashboard' && isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Dashboard onLogout={handleLogout} onBackToSite={() => setView('landing')} />
      </div>
    );
  }

  if (view === 'study-material') {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar 
          scrolled={true} 
          onAuthClick={openAuth}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          onDashboardClick={() => setView('dashboard')}
          onHomeClick={() => setView('landing')}
        />
        <StudyMaterialPage onBack={() => setView('landing')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="blob w-[500px] h-[500px] bg-blue-100/40 rounded-full top-[-10%] left-[-10%] animate-drift"></div>
        <div className="blob w-[600px] h-[600px] bg-indigo-50/50 rounded-full bottom-[-10%] right-[-10%] animate-drift [animation-delay:-5s]"></div>
        <div className="blob w-[400px] h-[400px] bg-blue-50/60 rounded-full top-1/2 left-1/2 -translate-x-1/2 animate-drift [animation-delay:-10s]"></div>
      </div>

      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-600 z-[100] transition-all duration-150 shadow-[0_2px_10px_rgba(59,130,246,0.5)]" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navbar 
        scrolled={scrolled} 
        onAuthClick={openAuth}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onDashboardClick={() => setView('dashboard')}
        onHomeClick={() => setView('landing')}
      />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Courses />
        <Contact />
      </main>

      <Footer />

      <AuthModal 
        isOpen={authModal.isOpen} 
        initialMode={authModal.mode}
        onClose={() => setAuthModal(p => ({ ...p, isOpen: false }))} 
        onLoginSuccess={handleLoginSuccess}
      />

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Action Buttons Container */}
      {view === 'landing' && (
        <div className="fixed bottom-10 right-10 z-[9999] flex items-center bg-white border-2 border-slate-200 shadow-2xl rounded-2xl h-16 overflow-hidden pointer-events-auto">
          {/* AI Advisor Button */}
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`flex items-center justify-center w-16 h-full transition-all group relative ${isChatOpen ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-slate-50'}`}
            title="AI Advisor"
          >
            <svg className={`w-8 h-8 transition-all ${isChatOpen ? 'scale-110' : 'group-hover:scale-125'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8V4m0 0H9m3 0h3M7 8h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2z" />
              <circle cx="9" cy="13" r="1" className={isChatOpen ? 'fill-white' : 'fill-blue-600'} />
              <circle cx="15" cy="13" r="1" className={isChatOpen ? 'fill-white' : 'fill-blue-600'} />
              <path d="M10 17h4" strokeWidth="1.5" />
            </svg>
            {isChatOpen && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-400 rounded-full m-3 animate-pulse"></span>
            )}
          </button>
          
          {/* Divider and Back to Top Button */}
          <div className={`flex items-center h-full transition-all duration-500 ${scrolled ? 'w-16 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
            <div className="w-[1px] h-10 bg-slate-200"></div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center w-full h-full text-slate-400 hover:text-blue-600 hover:bg-slate-50 transition-all group"
              title="Back to Top"
            >
              <svg className="w-7 h-7 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;