import React from 'react';
import { useLocation } from 'react-router-dom';
import { VatCalculatorTool } from '../tools/vat-calculator/VatCalculatorTool';
import { SupplyPriceTool } from '../tools/supply-price/SupplyPriceTool';
import { FreelancerTaxTool } from '../tools/freelancer-tax/FreelancerTaxTool';
import { QuoteSplitTool } from '../tools/quote-split/QuoteSplitTool';
import { MarginCalculatorTool } from '../tools/margin-calculator/MarginCalculatorTool';

export const ToolPage: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Simple, robust router mapping inside ToolPage wrapper
  const renderSelectedTool = () => {
    switch (currentPath) {
      case '/vat-calculator':
        return <VatCalculatorTool />;
      case '/supply-price':
        return <SupplyPriceTool />;
      case '/freelancer-tax':
        return <FreelancerTaxTool />;
      case '/quote-split':
        return <QuoteSplitTool />;
      case '/margin-calculator':
        return <MarginCalculatorTool />;
      default:
        return (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900">도구를 찾을 수 없습니다</h3>
            <p className="text-xs text-slate-500 mt-2">요청하신 주소에 알맞은 계산기를 배치하는 중입니다. 홈으로 이동해주세요.</p>
          </div>
        );
    }
  };

  return <div id="tool-page-wrapper">{renderSelectedTool()}</div>;
};
