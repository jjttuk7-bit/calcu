import React from 'react';
import { Link } from 'react-router-dom';
import { ToolCard } from '../components/ToolCard';
import { SeoContent } from '../components/SeoContent';
import { 
  Calculator, 
  RotateCcw, 
  UserCheck, 
  Scissors, 
  TrendingUp,
  ShieldCheck,
  Cpu,
  UserX,
  FileCheck2,
  Copy,
  ChevronRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const tools = [
    {
      id: 'vat',
      title: '부가세 계산기',
      description: '공급가액, 부가세액, 최종 세금계산서 합산 합계 금액을 소수점 원 단위까지 빠르고 정확하게 분석 계산합니다.',
      path: '/vat-calculator',
      icon: <Calculator className="w-5 h-5" />,
    },
    {
      id: 'supply',
      title: '공급가액 역산 계산기',
      description: '부가세가 포함된 총액(결제액)에서 세무 신고 배정을 전용으로 원천 공급가액과 부가세를 깔끔하게 분리 정량합니다.',
      path: '/supply-price',
      icon: <RotateCcw className="w-5 h-5" />,
    },
    {
      id: 'freelancer',
      title: '프리랜서 3.3% 계산기',
      description: '외주 대금 및 계약금액 기준, 3.3% 원천세액(사업소득세 및 주민세)을 사전 적용 공제하여 통장에 꽂히는 총 실수령액을 역산합니다.',
      path: '/freelancer-tax',
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      id: 'split',
      title: '견적서 금액 나누기',
      description: '의뢰받은 총 프로젝트 합계 예산을 사업 계약서 작성 및 세무 신고에 사용할 공급가액과 부가세 1:1 세부 분할합니다.',
      path: '/quote-split',
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: 'margin',
      title: '마진율 / 수익률 계산기',
      description: '쇼핑몰 사장님과 셀러 대상, 제품 도매 매입 원가와 최종 판매가 설정 기준 실제 마진액, 유효 마진율, 투자 이율(ROI)을 비교 산출합니다.',
      path: '/margin-calculator',
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const valueProps = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0F172A]" />,
      title: '입력값 저장 없음',
      desc: '입력하신 견적 계약 잔금이나 마진율, 원천징수 계약액수 등 어떠한 값도 외부에 기록되거나 아카이빙되지 않고 전면 기밀 휘발됩니다.',
    },
    {
      icon: <UserX className="w-5 h-5 text-[#0F172A]" />,
      title: '회원가입 없음',
      desc: '불필요한 가입 절차나 실명 인증, SNS 연동 등 귀찮은 과정이 일절 존재하지 않으며 접속 즉시 최고의 명성 계산을 누릴 수 있습니다.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0F172A]" />,
      title: '브라우저 계산',
      desc: '모든 수리 연산과 수식 증명은 클라이언트 PC/모바일 로컬 웹 브라우저 메모리 안에서 자바스크립트로 단독 수행되어 안전합니다.',
    },
    {
      icon: <Calculator className="w-5 h-5 text-[#0F172A]" />,
      title: '무료 사용',
      desc: '소액 잔금부터 수억 대 거래 예산 구역까지 대금 가산 제약이나 기능 유료 잠금 없이 누구나 평생 제한 없이 무료로 계산할 수 있습니다.',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#0F172A]" />,
      title: '사업자·프리랜서 실무 계산에 특화',
      desc: '세율 고정, 소수점 절사 처리, 공제 합산 실수령액 등 소상공인 셀러와 독립 크리에이터 등의 업계 정산 주기 및 거래 관행에 완벽 조율되었습니다.',
    },
  ];

  return (
    <div id="home-page-container" className="space-y-8 text-left">
      {/* 2. Grid list of business calculators */}
      <section id="tools-showcase" className="space-y-4">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-1.5 flex-wrap">
            <Calculator className="w-5 h-5 text-[#0F172A]" />
            5대 핵심 맞춤형 실무 계산 서비스
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">상황에 알맞은 계산기를 선택하여 세액을 복사하고 업무 속도를 높여보세요.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              path={tool.path}
              icon={tool.icon}
            />
          ))}
        </div>
      </section>

      {/* 3. Common user workflows */}
      <section id="use-cases-panel" className="bg-[#0F172A] text-slate-105 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
            가장 빈번한 실무 매뉴얼
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-2.5">
            자주 쓰는 계산 흐름
          </h3>
          <p className="text-xs text-slate-300 mt-1">도구를 함께 활용하여 업무를 매끄럽게 연동해보세요.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-indigo-451 font-extrabold text-indigo-400">흐름 A</span>
              <h4 className="text-xs font-bold text-white mt-1">공급가액 입력 → 부가세 계산 → 합계금액 확인</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed mt-2 font-medium">
                부가세 포함 전 기본 공급가액을 기입하고 10%세율 또는 자유 임의 수치를 적용해 부가세와 최종 견적서 합계금액을 손쉽게 도출합니다.
              </p>
            </div>
            <Link to="/vat-calculator" className="flex items-center text-[10px] font-bold text-indigo-400 mt-4 group">
              <span>부가세 계산기 가기</span>
              <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-indigo-451 font-extrabold text-indigo-400">흐름 B</span>
              <h4 className="text-xs font-bold text-white mt-1">총액 입력 → 공급가액 역산 → 견적서 작성</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed mt-2 font-medium">
                주고받은 최종 이체 대급 총액에서 원천 공급 본래 가격과 국세 부가 가치세를 올바르게 역추적하여 수기 전산 서식에 정확히 입력합니다.
              </p>
            </div>
            <Link to="/supply-price" className="flex items-center text-[10px] font-bold text-indigo-400 mt-4 group">
              <span>공급가액 역산 가기</span>
              <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-indigo-451 font-extrabold text-indigo-400">흐름 C</span>
              <h4 className="text-xs font-bold text-white mt-1">계약금액 입력 → 3.3% 계산 → 실수령액 확인</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed mt-2 font-medium">
                용역 및 독립 도급 활동 관련 세전 합의 대금을 기재해 징수액(소득/지방세)을 거치고 통장에 꽂힐 잔고와 선납 세무 환급 근거를 얻습니다.
              </p>
            </div>
            <Link to="/freelancer-tax" className="flex items-center text-[10px] font-bold text-indigo-400 mt-4 group">
              <span>3.3% 계산기 가기</span>
              <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-indigo-451 font-extrabold text-indigo-400">흐름 D</span>
              <h4 className="text-xs font-bold text-white mt-1">판매가·매입가 입력 → 마진율 확인</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed mt-2 font-medium">
                제품 사입 원물 원가와 희망하는 소비자 판매액을 적고 대행사 마진 배송 수수료를 대입하여 유효 공헌 수익 마진율을 검사합니다.
              </p>
            </div>
            <Link to="/margin-calculator" className="flex items-center text-[10px] font-bold text-indigo-400 mt-4 group">
              <span>마진율 계산기 가기</span>
              <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Value proposition highlights */}
      <section id="why-choose-us" className="space-y-4">
        <div className="border-b border-slate-250 pb-3">
          <h2 className="text-base font-bold text-slate-900">
            왜 사업계산도구함인가?
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">안전성, 즉시성, 투명성을 확보한 고효율 돈 계산 툴 박스입니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border border-slate-200/70 flex items-start space-x-3.5 hover:shadow-xs transition-shadow duration-150 text-left"
            >
              <div className="p-2 bg-slate-50 shadow-xs rounded-lg flex-shrink-0">
                {prop.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold text-slate-900">{prop.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEO footer content */}
      <SeoContent toolId="home" />
    </div>
  );
};
