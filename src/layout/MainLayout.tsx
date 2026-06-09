import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileToolTabs } from './MobileToolTabs';
import { AdSlot } from '../components/AdSlot';
import { Heart } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if we are on a calculation tool page
  const isToolPage = [
    '/vat-calculator',
    '/supply-price',
    '/freelancer-tax',
    '/quote-split',
    '/margin-calculator',
  ].includes(currentPath);

  return (
    <div id="main-layout-root" className="min-h-screen bg-[#F1F5F9] flex flex-col justify-between selection:bg-[#0F172A] selection:text-white">
      {/* 1. Header (includes trust badge and hero banner) */}
      <Header />

      {/* 2. Mobile tool horizontal tabs (Sticky on Mobile) */}
      <MobileToolTabs />

      {/* Mobile-only responsive Ad Slot beneath Mobile Tool Tabs */}
      <div className="block md:hidden px-4 mt-3">
        <AdSlot type="responsive" label="광고" id="mobile-tabs-sub-ad" />
      </div>

      {/* 3. Top Banner Ad (Wide Leaderboard) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <AdSlot type="leaderboard" label="상단 가로형 광고" id="layout-top-ad" />
      </div>

      {/* 4. Core Layout Frame */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col">
        {/* Responsive Grid Structure */}
        <div className="flex flex-col md:flex-row gap-6 items-start flex-1">
          {/* LEFT: Sidebar menu (hidden on mobile, sticky on desktop) */}
          <div className="hidden md:block sticky top-24 self-start">
            <Sidebar />
          </div>

          {/* CENTER: Main Work Area / Router outlet */}
          <div className="flex-1 w-full min-w-0" id="main-content-area">
            {children}
          </div>

          {/* RIGHT: Skyscraper static ad component (visible only on desktop >= large screens) */}
          {isToolPage && (
            <div className="hidden lg:block w-[300px] shrink-0 sticky top-24 self-start" id="desktop-sidebar-ad">
              <AdSlot type="skyscraper" label="측면 수직 광고" id="layout-right-ad" />
            </div>
          )}
        </div>
      </main>

      {/* 5. Bottom Banner Ad */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-4">
        <AdSlot type="leaderboard" label="하단 가로형 광고" id="layout-bottom-ad" />
      </div>

      {/* 6. Footer section */}
      <footer id="app-footer" className="bg-[#0F172A] text-slate-300 py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white tracking-wide">
              사업계산도구함
            </h4>
            <p className="text-xs text-slate-400 font-medium">
              부가세, 공급가급, 실수령액, 마진 분석까지 100% 프라이버시 브라우저 계산 도구
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-300">
            <a href="/" className="hover:text-white transition-colors">홈</a>
            <a href="/guide" className="hover:text-white transition-colors">가이드</a>
            <a href="/privacy" className="hover:text-white transition-colors">개인정보 보호</a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500 font-normal">MVP Version v1.0.0</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-slate-500">
          <span>© 2026 사업계산도구함. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> for Korean business owners and freelancers.
          </span>
        </div>
      </footer>
    </div>
  );
};
