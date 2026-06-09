import React from 'react';
import { ShieldAlert, Fingerprint, Lock, ShieldCheck, Cpu } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div id="privacy-page-container" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 font-sans text-left">
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <div className="flex items-center space-x-2 text-[#0F172A]">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-bold uppercase tracking-wider">안전 확인</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight">
          개인정보 처리 및 데이터 무저장 안심 방침
        </h2>
        <p className="text-xs text-slate-500 leading-normal font-medium">
          사업계산도구함은 이용자의 민감한 사업 대금 및 마진 비율의 완벽한 기밀을 수호하는 오프라인 지향 방침을 가집니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
          <div className="bg-white rounded-lg p-2 text-[#0F172A] shadow-sm border border-slate-150 flex-shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-900">100% 로컬 프라이버시 처리</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              본 사이트에 입력되는 공급가액, 마진 분석단가, 부가세, 프리랜서 사업 소득 원천 거래 대금은 어떠한 원격 서버로도 저장되거나 실시간 송신되지 않습니다.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-3">
          <div className="bg-white rounded-lg p-2 text-[#0F172A] shadow-sm border border-slate-150 flex-shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-900">브라우저 내 삭제 휘발성</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              모든 계산 로그 및 매입 판매 매크로 연산 결과물은 회원님의 웹 브라우저 메모리에 휘발성으로 탑재됩니다. 창을 새로고침하거나 종료하는 즉시 흔적을 남기지 않고 소멸합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-100 text-slate-750 text-xs md:text-sm leading-relaxed space-y-3 font-normal">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
          <Fingerprint className="w-4 h-4 text-[#0F172A]" />
          맞춤형 광고 게재에 따른 쿠키 전개
        </h3>
        <p className="text-slate-600 text-xs">
          본 사이트는 신뢰할 수 있게 금융 도구를 항시 무료로 유지하기 위해 대표적인 광고 파트너사 Google AdSense를 경유하여 광고 지면을 로드합니다. 이때 광고 서비스 파트너사 측에서 브라우저 식별 정보, 디바이스 해상도 매칭, 세부 맞춤 광고 타겟 지원 목적을 위해 자체적으로 쿠키(Cookie) 데이터를 활용할 수 있습니다. 쿠키 로드는 브라우저 설정창의 개인정보 메뉴에서 손쉽게 이용자가 차단할 수 있습니다.
        </p>

        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5 pt-2">
          <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
          가명 이용 및 MVP 명세 선언
        </h3>
        <p className="text-slate-600 text-xs">
          본 방침은 MVP(최소 기능 제품) 수준에 부응하여 구성된 개인정보 보호 안내입니다. 추후 정규 가입 시스템 구축이나 타 플랫폼 위탁 수수료 등 정식 세무 인프라가 배당될 시 관계 법령에 입각한 정보 처리 정책으로 업데이트하여 고지할 계획입니다. 안심하고 실시간 도구함을 운용하시길 권장합니다.
        </p>
      </div>
    </div>
  );
};
