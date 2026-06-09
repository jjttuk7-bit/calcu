import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  path: string;
  icon?: React.ReactNode;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  id,
  title,
  description,
  path,
  icon,
}) => {
  return (
    <div
      id={`tool-card-${id}`}
      className="bg-white border border-slate-200 hover:border-emerald-500 rounded-xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full"
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div id={`icon-wrapper-${id}`} className="p-2.5 bg-emerald-50 rounded-lg text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
            {icon || <Calculator className="w-5 h-5" />}
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 flex items-center transition-colors">
          무료 즉시 사용
        </span>
        <Link
          to={path}
          id={`link-btn-${id}`}
          className="inline-flex items-center space-x-1 py-1.5 px-3 bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-800 text-xs font-semibold rounded-lg transition-all duration-200 border border-slate-200 hover:border-emerald-600"
        >
          <span>바로 계산하기</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
