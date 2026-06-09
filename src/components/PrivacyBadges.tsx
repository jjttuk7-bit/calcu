import React from 'react';
import { ShieldCheck, Cpu, UserMinus, FileText } from 'lucide-react';

export const PrivacyBadges: React.FC = () => {
  const badges = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
      text: '입력값 저장 없음',
      desc: '개인정보 보호',
      id: 'badge-no-save',
      bgClass: 'bg-emerald-50/60 border-emerald-100',
      textClass: 'text-emerald-950',
      descClass: 'text-emerald-600'
    },
    {
      icon: <Cpu className="w-4 h-4 text-blue-600" />,
      text: '브라우저 즉시 계산',
      desc: '로컬 샌드박스 실행',
      id: 'badge-browser-calc',
      bgClass: 'bg-blue-50/60 border-blue-100',
      textClass: 'text-blue-950',
      descClass: 'text-blue-600'
    },
    {
      icon: <UserMinus className="w-4 h-4 text-slate-600" />,
      text: '회원가입 없음',
      desc: '로그인 불필요',
      id: 'badge-no-signup',
      bgClass: 'bg-slate-100/50 border-slate-200',
      textClass: 'text-slate-900',
      descClass: 'text-slate-600'
    },
    {
      icon: <FileText className="w-4 h-4 text-indigo-600" />,
      text: '제한 없는 무료 사용',
      desc: '모든 기능 무료',
      id: 'badge-free-use',
      bgClass: 'bg-indigo-50/50 border-indigo-100',
      textClass: 'text-indigo-950',
      descClass: 'text-indigo-650'
    },
  ];

  return (
    <div id="privacy-badges-container" className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-4xl mx-auto my-3">
      {badges.map((badge) => (
        <div
          key={badge.text}
          id={badge.id}
          className={`flex items-center space-x-2 border rounded-xl p-2.5 transition-all hover:scale-[1.02] duration-200 bg-white shadow-xs`}
        >
          <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-105 flex-shrink-0">
            {badge.icon}
          </div>
          <div className="flex flex-col min-w-0 text-left">
            <span className="text-xs font-bold text-slate-850 truncate leading-tight">
              {badge.text}
            </span>
            <span className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
              {badge.desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
