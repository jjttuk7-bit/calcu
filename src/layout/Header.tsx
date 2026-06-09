import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Shield, BookOpen, Lock, HelpCircle } from 'lucide-react';
import { PrivacyBadges } from '../components/PrivacyBadges';

export const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: '도구 목록', path: '/', icon: <Calculator className="w-4 h-4" />, id: 'nav-home' },
    { label: '이용 가이드', path: '/guide', icon: <BookOpen className="w-4 h-4" />, id: 'nav-guide' },
    { label: '개인정보 보호', path: '/privacy', icon: <Lock className="w-4 h-4" />, id: 'nav-privacy' },
  ];

  return (
    <header id="app-header" className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" id="logo-link" className="flex items-center space-x-2 w-max focus:outline-hidden group">
            <div className="bg-[#0F172A] text-white p-2.5 rounded-lg group-hover:bg-[#1E293B] transition-colors shadow-sm">
              <Calculator className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#0F172A] tracking-tight leading-tight">
                사업계산도구함
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                사업자와 프리랜서를 위한 간편 실무 계산기
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="메인 네비게이션">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  id={item.id}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-slate-100 text-[#0F172A] border border-slate-200 shadow-xs'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Right Action Indicator */}
          <div className="md:hidden flex items-center">
            <span className="text-[10px] font-bold text-[#0F172A] bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#0F172A]" />
              보안 계산성공
            </span>
          </div>
        </div>
      </div>

      {/* Sub Header Hero text */}
      <div className="bg-slate-50/55 border-b border-slate-100 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight">
            사업자와 프리랜서를 위한 간편 계산 도구
          </h1>
          <p className="text-slate-600 text-xs md:text-sm font-medium max-w-2xl mx-auto leading-relaxed">
            부가세, 공급가액, 프리랜서 3.3%, 견적서 금액 나누기, 마진율을 복잡한 세무 지식 없이도 몇 초 만에 완벽하게 분석해 드립니다.
          </p>
          <PrivacyBadges />
        </div>
      </div>
    </header>
  );
};
