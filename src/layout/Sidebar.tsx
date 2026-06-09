import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  RotateCcw, 
  UserCheck, 
  Scissors, 
  TrendingUp, 
  ShieldCheck,
  Award
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: '부가세 계산기',
      desc: '공급가액·부가세·합계 일괄 산출',
      path: '/vat-calculator',
      icon: <Calculator className="w-4 h-4" />,
      id: 'side-vat',
    },
    {
      name: '공급가액 역산 계산기',
      desc: '합계금액에서 부가세/공가 분리',
      path: '/supply-price',
      icon: <RotateCcw className="w-4 h-4" />,
      id: 'side-supply',
    },
    {
      name: '프리랜서 3.3% 계산기',
      desc: '사업소득 원천징수 전후 실수령',
      path: '/freelancer-tax',
      icon: <UserCheck className="w-4 h-4" />,
      id: 'side-freelancer',
    },
    {
      name: '견적서 금액 나누기',
      desc: '총 예산을 깔끔하게 1.1 분할',
      path: '/quote-split',
      icon: <Scissors className="w-4 h-4" />,
      id: 'side-split',
    },
    {
      name: '마진율 계산기',
      desc: '매입·판매가 대비 정확한 마진/ROI',
      path: '/margin-calculator',
      icon: <TrendingUp className="w-4 h-4" />,
      id: 'side-margin',
    },
  ];

  return (
    <aside
      id="sidebar-navigation"
      className="w-80 bg-white border border-slate-200/80 rounded-2xl p-5 space-y-6 flex-shrink-0 h-fit"
    >
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
          계산 도구함 카테고리
        </h3>
        <nav className="space-y-1.5" aria-label="사이드바 계산 기능 일람">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                id={item.id}
                className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-150 border group ${
                  isActive
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md shadow-slate-950/20'
                    : 'text-slate-700 hover:text-slate-900 bg-transparent border-transparent hover:bg-slate-50'
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-750'
                  }`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col min-w-0 pr-1 select-none">
                  <span className={`text-xs font-bold leading-tight ${isActive ? 'text-white font-extrabold' : 'text-slate-900 group-hover:text-[#0F172A]'}`}>
                    {item.name}
                  </span>
                  <span className={`text-[10px] truncate mt-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.desc}
                  </span>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <hr className="border-slate-150" />

      {/* Safety Info Card inside Sidebar for credibility */}
      <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-150 relative overflow-hidden select-none">
        <div className="flex items-center space-x-2 text-slate-800">
          <ShieldCheck className="w-4 h-4 flex-shrink-0 text-[#0F172A]" />
          <span className="text-xs font-bold">100% 로컬 계산 보장</span>
        </div>
        <p className="text-[10px] text-slate-500 leading-relaxed mt-1.5 font-medium">
          본 플랫폼 서비스는 국세청이나 외부 서버로 어떠한 수치도 보내지 않습니다. 모든 정산 로직이 브라우저 샌드박스 내부에서 안전하게 완결됩니다.
        </p>
        <div className="absolute right-[-10px] bottom-[-10px] opacity-[0.03]">
          <Award className="w-20 h-20 text-slate-950" />
        </div>
      </div>
    </aside>
  );
};
