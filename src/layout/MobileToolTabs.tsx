import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  RotateCcw, 
  UserCheck, 
  Scissors, 
  TrendingUp 
} from 'lucide-react';

export const MobileToolTabs: React.FC = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      name: '부가세',
      path: '/vat-calculator',
      icon: <Calculator className="w-3.5 h-3.5" />,
      id: 'm-tab-vat',
    },
    {
      name: '공급가액 역산',
      path: '/supply-price',
      icon: <RotateCcw className="w-3.5 h-3.5" />,
      id: 'm-tab-supply',
    },
    {
      name: '프리랜서 3.3%',
      path: '/freelancer-tax',
      icon: <UserCheck className="w-3.5 h-3.5" />,
      id: 'm-tab-freelancer',
    },
    {
      name: '견적서 나누기',
      path: '/quote-split',
      icon: <Scissors className="w-3.5 h-3.5" />,
      id: 'm-tab-split',
    },
    {
      name: '마진율 계산',
      path: '/margin-calculator',
      icon: <TrendingUp className="w-3.5 h-3.5" />,
      id: 'm-tab-margin',
    },
  ];

  // Auto-scroll selected tab into view for frictionless mobile swiping
  useEffect(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.querySelector('.mobile-tab-active');
      if (activeElement) {
        const container = containerRef.current;
        const scrollLeft = 
          (activeElement as HTMLElement).offsetLeft - 
          container.offsetWidth / 2 + 
          (activeElement as HTMLElement).offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  return (
    <div className="md:hidden bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
      <div 
        ref={containerRef}
        className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap px-4 py-3 scrollbar-none select-none scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              id={tab.id}
              className={({ isActive: linkActive }) =>
                `inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all border ${
                  linkActive
                    ? 'mobile-tab-active bg-[#0F172A] border-[#0F172A] text-white shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {tab.icon}
              <span>{tab.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
