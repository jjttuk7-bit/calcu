import React from 'react';
import { BookOpen, CheckCircle, Info, ShieldAlert } from 'lucide-react';

export const GuidePage: React.FC = () => {
  const guides = [
    {
      title: '부가세 계산기 사용법',
      steps: [
        '과세 대화창에서 원천 공급가액 항목을 입력합니다.',
        '국세청 표준 기준에 맞는 과세유형(일반 10%, 영세 0%, 면세)을 올바르게 누릅니다.',
        '실시간 계산되어 산식 표출된 부가세 10%와 최종 합계 세액을 원클릭 복사 단락으로 가져갑니다.',
      ],
      id: 'guide-vat',
    },
    {
      title: '공급가액 역산 계산기 사용법',
      steps: [
        '소비자로부터 송금받았거나 세금계산서 상에 정해진 최종 포함 총 합산금액을 기입합니다.',
        '자동으로 공급가액(1.1 정산 분리법)과 부가세를 정확하게 정렬 정량합니다.',
        '내부 정표 관리나 인지세 대입시 해당 공급가 명세를 실무 서류에 이관합니다.',
      ],
      id: 'guide-supply',
    },
    {
      title: '프리랜서 3.3% 계산기 사용법',
      steps: [
        '외주 발주사로부터 보장 또는 약정받은 원천징수 전 원천 총 계약대금을 기재합니다.',
        '그 즉시 국세 소득세 고지세인 3%와 이에 포함되는 주민세 0.3%가 별도 산액 산출됩니다.',
        '모든 차감세 명판을 확인한 후 통장에 입금되는 최종 실수령액 수치 비율을 전송/대비합니다.',
      ],
      id: 'guide-freelancer',
    },
    {
      title: '견적서 금액 나누기 사용법',
      steps: [
        '클라이언트와 결정한 견적 총예산액을 입력해 줍니다.',
        '견적서 서식 구조에 맞게 과세 항목 명세로 환원할 수 있는 부분 분리 가액이 나타납니다.',
        '이를 견적 작성 서류 상 공급가액 난과 부가세 징수 대조표에 기입할 수 있게 원터치 복사 지원합니다.',
      ],
      id: 'guide-split',
    },
    {
      title: '마진율 / 수익률 계산기 사용법',
      steps: [
        '도매 사입한 제품의 개당 순수 도매 원가(매입가)와 일반 소비자 대상 지정 판매가를 기산합니다.',
        '판매 공제를 감안한 순마진율 및 투자 원가 대비 회수율(ROI Markup)의 차이가 일람 표기됩니다.',
        '마케팅 광고 소진 비중 및 배송 박스 단가 차감에 맞는 손해가 없는 최상의 타겟 판매 마가를 도출합니다.',
      ],
      id: 'guide-margin',
    },
  ];

  return (
    <div id="guide-page-container" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 font-sans text-left">
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <div className="flex items-center space-x-2 text-[#0F172A]">
          <BookOpen className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-bold uppercase tracking-wider">사용 가이드</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight">
          도구함 완벽 실무 운용 설명서
        </h2>
        <p className="text-xs text-slate-500 font-medium leading-normal">
          사업계산도구함에 안착된 5대 핵심 시뮬레이션 모듈의 공학 산식 명세와 신속한 조율 행동 양식을 제공합니다.
        </p>
      </div>

      <div className="space-y-6">
        {guides.map((g, index) => (
          <div key={index} id={g.id} className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center">
              <span className="mr-2 text-xs font-bold font-mono bg-[#0F172A] text-white w-5 h-5 rounded-full flex items-center justify-center">
                {index + 1}
              </span>
              {g.title}
            </h3>
            <ul className="space-y-2 pl-2">
              {g.steps.map((step, sIdx) => (
                <li key={sIdx} className="flex items-start text-xs text-slate-600 leading-relaxed font-normal">
                  <span className="mr-1.5 text-blue-600 font-extrabold">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-slate-200 space-y-3">
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 flex items-start space-x-3">
          <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-amber-900">참고 가치 지향성 고지</h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              본 도구함에서 처리되는 모든 수리 명판은 대략적인 계산을 직각 진행하여 이용자의 실무 감각 및 견적 조율 속도 보강을 돕기 위해 공급되는 장비입니다. 정량적인 과세 신고, 고지세 납입, 법적 공인서류 등록 시점에는 세무 대리 처리를 거치는 걸 절대 권고합니다.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-start space-x-3">
          <Info className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-900">서버 보안 기밀 고지</h4>
            <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
              입력하신 계약금액, 매입가, 단가 등은 인프라 환경에서 어떠한 소스 데이터베이스(DB)로도 묶이지 않습니다. 로컬 클라이언트에서 완전 처리되오니 안심하고 복사 기능을 탑제하여 즐거운 돈 정산 관리를 시작해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
