import React, { useState, useEffect, useRef } from "react";
import { ButtonLarge } from "../../../../components/ButtonLarge";
import { CardLarge } from "../../../../components/CardLarge";

export const Frame = (): JSX.Element => {
  // 목표 시간 설정 (예: 2일 39시간 44초 후)
  const [targetDate] = useState(() => {
    const now = new Date();
    now.setDate(now.getDate() + 2);
    now.setHours(now.getHours() + 39);
    now.setMinutes(now.getMinutes() + 0);
    now.setSeconds(now.getSeconds() + 44);
    return now;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // 초기 계산
    calculateTimeLeft();

    // 1초마다 업데이트
    const timer = setInterval(calculateTimeLeft, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, [targetDate]);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    
    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // 마우스 드래그 스크롤 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // 마우스 휠 가로 스크롤 핸들러
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollContainerRef.current) return;
    
    // 페이지 스크롤 차단
    e.preventDefault();
    e.stopPropagation();

    const cardWidth = window.innerWidth >= 1024 ? 470 : window.innerWidth >= 640 ? 400 : 300;
    const gap = 15;
    const cardsToScroll = 3; // 한 번에 이동할 카드 수
    const scrollAmount = (cardWidth + gap) * cardsToScroll;
    
    if (e.deltaY > 0) {
      // 아래로 스크롤 - 오른쪽으로 이동
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    } else {
      // 위로 스크롤 - 왼쪽으로 이동
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // 비수동 wheel 리스너로 메인 페이지 스크롤 차단 + 가로 스크롤 처리
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheelNonPassive = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const cardWidth = window.innerWidth >= 1024 ? 470 : window.innerWidth >= 640 ? 400 : 300;
      const gap = 15;
      const cardsToScroll = 3;
      const scrollAmount = (cardWidth + gap) * cardsToScroll;

      // 트랙패드의 가로 스크롤(deltaX)도 고려
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      el.scrollBy({
        left: delta > 0 ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    };

    el.addEventListener('wheel', onWheelNonPassive, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheelNonPassive);
    };
  }, []);

  return (
    <div className="flex flex-col items-start relative self-stretch w-full min-h-[800px] lg:min-h-[1742px]">
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-[61px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-4 sm:gap-5 relative self-stretch w-full flex-[0_0_auto] px-4">
            <div className="flex flex-col items-center gap-1 sm:gap-2 relative self-stretch w-full flex-[0_0_auto] pt-[50px]">
              <div className="relative self-stretch mt-[-1.00px] font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-variable-collection-CP-CPC text-[32px] sm:text-[48px] lg:text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[1.0] [font-style:var(--CP-h3-font-style)]">
                1단계
              </div>

              <div className="relative self-stretch font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-cpwhite text-[32px] sm:text-[48px] lg:text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[1.0] [font-style:var(--CP-h3-font-style)]">
                위즈덤 카드 작성하기
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-5 relative self-stretch w-full flex-[0_0_auto] px-4">
            <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-[25px] relative self-stretch w-full flex-[0_0_auto] max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-[25px] relative flex-1">
                <div className="flex flex-col w-[60px] sm:w-[70px] lg:w-[84px] items-center gap-2.5 relative">
                  <div className="flex flex-col h-[60px] sm:h-[70px] lg:h-[84px] items-center justify-center gap-2.5 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-[21px] relative self-stretch w-full rounded-[30px] sm:rounded-[35px] lg:rounded-[42px] border border-solid border-[#ffffff33] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
                    <div className="relative self-stretch mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-variable-collection-CP-CPC text-[20px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] [font-style:var(--CP-h1-font-style)]">
                      {timeLeft.days.toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative self-stretch font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[12px] sm:text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                    일
                  </div>
                </div>

                <div className="flex flex-col w-[60px] sm:w-[70px] lg:w-[84px] items-center gap-2.5 relative">
                  <div className="flex flex-col h-[60px] sm:h-[70px] lg:h-[84px] items-center justify-center gap-2.5 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-[21px] relative self-stretch w-full rounded-[30px] sm:rounded-[35px] lg:rounded-[42px] border border-solid border-[#ffffff33] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
                    <div className="relative self-stretch mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-variable-collection-CP-CPC text-[20px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] [font-style:var(--CP-h1-font-style)]">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative self-stretch font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[12px] sm:text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                    시
                  </div>
                </div>

                <div className="flex flex-col w-[60px] sm:w-[70px] lg:w-[84px] items-center gap-2.5 relative">
                  <div className="flex flex-col h-[60px] sm:h-[70px] lg:h-[84px] items-center justify-center gap-2.5 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-[21px] relative self-stretch w-full rounded-[30px] sm:rounded-[35px] lg:rounded-[42px] border border-solid border-[#ffffff33] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
                    <div className="relative self-stretch mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-variable-collection-CP-CPC text-[20px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] [font-style:var(--CP-h1-font-style)]">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative self-stretch font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[12px] sm:text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                    분
                  </div>
                </div>

                <div className="flex flex-col w-[60px] sm:w-[70px] lg:w-[84px] items-center gap-2.5 relative">
                  <div className="flex flex-col h-[60px] sm:h-[70px] lg:h-[84px] items-center justify-center gap-2.5 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-[21px] relative self-stretch w-full rounded-[30px] sm:rounded-[35px] lg:rounded-[42px] border border-solid border-[#ffffff33] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
                    <div className="relative self-stretch mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-variable-collection-CP-CPC text-[20px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] [font-style:var(--CP-h1-font-style)]">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative self-stretch font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[12px] sm:text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                    초
                  </div>
                </div>
              </div>
            </div>

            <div className="relative self-stretch font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-variable-collection-CP-CPC text-[16px] sm:text-[18px] lg:text-[length:var(--CP-body3-font-size)] text-center tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] [font-style:var(--CP-body3-font-style)] px-4">
              남았어요 ! 얼른 작성해보세요
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-[20px] px-4 sm:px-8 lg:px-[240px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex min-w-0 w-full lg:w-auto lg:flex-1 min-h-[40vh] sm:min-h-[35vh] md:min-h-[30vh] lg:min-h-[25vh] xl:min-h-[180px] items-center justify-center gap-2.5 px-[2vw] sm:px-[3vw] md:px-[4vw] lg:px-8 py-[4vh] sm:py-[5vh] md:py-[6vh] lg:py-[100px] relative border border-solid border-[#ffffff26] aspect-video bg-[url(https://c.animaapp.com/K3FjWwF5/img/frame-2121457743.png)] bg-cover bg-[50%_50%]">
            <button 
              onClick={openVideoModal}
              className="relative w-[80px] sm:w-[100px] md:w-[110px] lg:w-[120px] h-[80px] sm:h-[100px] md:h-[110px] lg:h-[120px] aspect-square cursor-pointer group bg-transparent border-0 outline-none appearance-none focus:outline-none"
            >
              {/* 어두운 원형 배경 with 내부 녹색 테두리 */}
              <div 
                className="absolute inset-0 rounded-full bg-[#2a2a2a] bg-opacity-90 flex items-center justify-center transition-all duration-300 ease-in-out pulse-target" 
                style={{ boxShadow: 'inset 0 0 0 1px #adff00' }}
              >
                {/* 플레이 아이콘 (SVG로 안정적 렌더링) */}
                <svg
                  className="w-[26px] sm:w-[32px] md:w-[36px] lg:w-[40px] h-[26px] sm:h-[32px] md:h-[36px] lg:h-[40px] text-[#adff00] transition-transform duration-300 ease-in-out"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <polygon points="8,5 20,12 8,19" fill="currentColor" />
                </svg>
              </div>
              
              {/* 호버 시 외부 글로우 효과 */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out" style={{ boxShadow: '0 0 20px #adff00' }}></div>
            </button>
          </div>

          <div className="flex flex-col min-w-0 w-full lg:max-w-[490px] items-start relative flex-1">
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full mb-4">
              <div className="relative self-stretch mt-[-1.00px] font-CP-h2 font-[number:var(--CP-h2-font-weight)] text-cpwhite text-[24px] sm:text-[32px] lg:text-[length:var(--CP-h2-font-size)] tracking-[var(--CP-h2-letter-spacing)] leading-[var(--CP-h2-line-height)] [font-style:var(--CP-h2-font-style)]">
                이색 미니 보험의 등장
              </div>

              <p className="relative self-stretch font-CP-body2 font-[number:var(--CP-body2-font-weight)] text-cpbody-seconary-text text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body2-font-size)] tracking-[var(--CP-body2-letter-spacing)] leading-[var(--CP-body2-line-height)] [font-style:var(--CP-body2-font-style)]">
                이번 영상은 "요즘 보험"에 대한 트렌드를 다루고 있어요. 아이돌
                덕질하다 다치거나, 책을 오래 읽다가 시력이 나빠지는 등의 일상 속
                예상 못한 상황을 보장해주는 '미니 보험' 상품에 대한 내용이에요.
                '우리 서비스에도 이런 개인화된 접근을 할 수 있을까?' 고민해볼 수
                있는 좋은 사례예요. 이번주 위즈덤도 화이팅~! 💪
              </p>
            </div>

            <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-5 sm:w-6 h-5 sm:h-6"
                  alt="Frame"
                  src="https://c.animaapp.com/K3FjWwF5/img/frame-2121457746.svg"
                />

                <p className="relative flex-1 mt-[-1.00px] font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] [font-style:var(--CP-body3-font-style)]">
                  2025. 09. 08 (월) ~ 2025. 09. 12 (목) 23:59
                </p>
              </div>

              <ButtonLarge
                className="!self-stretch !left-[unset] !w-full !top-[unset]"
                divClassName="!mr-0 !ml-0"
                property1="default"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[50px] px-4 py-8 sm:py-12 lg:py-[90px] relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-cpwhite text-[32px] sm:text-[40px] lg:text-5xl text-center tracking-[-1.44px] leading-[1.2]">
          실시간 순위
        </div>

        <div 
          className="relative w-full"
          data-ranking-section
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-[15px] overflow-x-auto pb-4 px-4 scrollbar-hide cursor-grab active:cursor-grabbing overscroll-x-contain overscroll-y-none"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {Array.from({ length: 11 }, (_, index) => (
              <div key={index} className="relative flex-shrink-0">
                {/* 1등 배지 - 첫 번째 카드에만 표시, 카드에 붙어서 함께 스크롤 */}
                {index === 0 && (
                  <div className="absolute top-5 left-5 w-[60px] sm:w-[70px] lg:w-[73px] h-[70px] sm:h-[80px] lg:h-[88px] pointer-events-none z-10">
                    <img
                      className="absolute top-[35px] sm:top-[40px] lg:top-[45px] left-[7px] sm:left-[8px] lg:left-[9px] w-5 sm:w-6 lg:w-7 h-[30px] sm:h-[35px] lg:h-[43px]"
                      alt="Rectangle"
                      src="https://c.animaapp.com/K3FjWwF5/img/rectangle-34625610.svg"
                    />
                    <img
                      className="absolute top-[35px] sm:top-[40px] lg:top-[45px] left-[25px] sm:left-[28px] lg:left-[33px] w-5 sm:w-6 lg:w-7 h-[30px] sm:h-[35px] lg:h-[43px]"
                      alt="Rectangle"
                      src="https://c.animaapp.com/K3FjWwF5/img/rectangle-34625611.svg"
                    />
                    <img
                      className="absolute top-0 left-0 w-[55px] sm:w-[65px] lg:w-[71px] h-[55px] sm:h-[65px] lg:h-[71px]"
                      alt="Star"
                      src="https://c.animaapp.com/K3FjWwF5/img/star-21.svg"
                    />
                    <div className="absolute top-[10px] sm:top-[12px] lg:top-[13px] left-[10px] sm:left-[12px] lg:left-[13px] w-[35px] sm:w-[40px] lg:w-[45px] h-[35px] sm:h-[40px] lg:h-[45px] bg-[#f0b04a] rounded-full flex items-center justify-center">
                      <span className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-[24px] sm:text-[30px] lg:text-[35px] leading-none">
                        1
                      </span>
                    </div>
                  </div>
                )}

                {/* 2등 배지 - 두 번째 카드에만 표시, 카드에 붙어서 함께 스크롤 */}
                {index === 1 && (
                  <div className="absolute top-5 left-5 w-[60px] sm:w-[70px] lg:w-[73px] h-[70px] sm:h-[80px] lg:h-[88px] pointer-events-none z-10">
                    {/* 스파이크 외곽 (#E5E5E5) - star SVG를 마스크로 채움 */}
                    <div
                      className="absolute top-0 left-0 w-[55px] sm:w-[65px] lg:w-[71px] h-[55px] sm:h-[65px] lg:h-[71px]"
                      style={{
                        WebkitMaskImage: 'url(https://c.animaapp.com/K3FjWwF5/img/star-21.svg)',
                        maskImage: 'url(https://c.animaapp.com/K3FjWwF5/img/star-21.svg)',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        backgroundColor: '#E5E5E5'
                      }}
                    />
                    {/* 중앙 원형(실버톤) + 숫자 중앙 정렬 */}
                    <div className="absolute top-[10px] sm:top-[12px] lg:top-[13px] left-[10px] sm:left-[12px] lg:left-[13px] w-[35px] sm:w-[40px] lg:w-[45px] h-[35px] sm:h-[40px] lg:h-[45px] bg-[#c9c9c9] rounded-full flex items-center justify-center">
                      <span className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-[24px] sm:text-[30px] lg:text-[35px] leading-none">
                        2
                      </span>
                    </div>
                  </div>
                )}

                {/* 3등 배지 - 세 번째 카드에만 표시 (동메달) */}
                {index === 2 && (
                  <div className="absolute top-5 left-5 w-[60px] sm:w-[70px] lg:w-[73px] h-[70px] sm:h-[80px] lg:h-[88px] pointer-events-none z-10">
                    {/* 스파이크 외곽(브론즈 테두리) */}
                    <div
                      className="absolute top-0 left-0 w-[55px] sm:w-[65px] lg:w-[71px] h-[55px] sm:h-[65px] lg:h-[71px]"
                      style={{
                        WebkitMaskImage: 'url(https://c.animaapp.com/K3FjWwF5/img/star-21.svg)',
                        maskImage: 'url(https://c.animaapp.com/K3FjWwF5/img/star-21.svg)',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        backgroundColor: '#BC7346'
                      }}
                    />
                    {/* 중앙 원형(브론즈) + 숫자 중앙 정렬 */}
                    <div
                      className="absolute top-[10px] sm:top-[12px] lg:top-[13px] left-[10px] sm:left-[12px] lg:left-[13px] w-[35px] sm:w-[40px] lg:w-[45px] h-[35px] sm:h-[40px] lg:h-[45px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#D07A35', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.15)' }}
                    >
                      <span className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-[24px] sm:text-[30px] lg:text-[35px] leading-none">
                        3
                      </span>
                    </div>
                  </div>
                )}

                <CardLarge
                  className="!left-[unset] !top-[unset] !min-w-[300px] !w-[300px] sm:!min-w-[400px] sm:!w-[400px] lg:!min-w-[470px] lg:!w-[470px]"
                  crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-13@2x.png"
                  firePerspective="https://c.animaapp.com/K3FjWwF5/img/fire-perspective-matte-12@2x.png"
                  headerBgUrl={`https://c.animaapp.com/K3FjWwF5/img/frame-2121457846-${index + 1}@2x.png`}
                  frameClassNameOverride="!self-stretch !w-full"
                  likePerspective="https://c.animaapp.com/K3FjWwF5/img/like-perspective-matte-12@2x.png"
                  starPerspective="https://c.animaapp.com/K3FjWwF5/img/star-perspective-matte-12@2x.png"
                  text={[
                    "나는 개발자 중에 제일 힙한 개발자다 !",
                    "나는 기획자 중에 제일 똑똑한 기획자다 !",
                    "나는 마케터 중에 제일 유쾌한 마케터다 !",
                    "나는 번역가 중에 제일 감각적인 번역가다 !",
                    "나는 디자이너 중에 제일 귀여운 디자이너다 !",
                    "나는 사진작가 중에 제일 빛나는 사진작가다",
                    "나는 요리사 중에 제일 재밌는 요리사다 !",
                    "나는 선생님 중에 제일 다정한 선생님이다 !",
                    "나는 운동선수 중에 제일 씩씩한 운동선수다 !",
                    "나는 연구원 중에 제일 꼼꼼한 연구원이다 !",
                    "나는 여행자 중에 제일 자유로운 여행자다 !"
                  ][index]}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 비디오 모달 */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 aspect-video">
            {/* 닫기 버튼 */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-[#adff00] transition-colors z-10"
              aria-label="동영상 닫기"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* YouTube 임베드 */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/gYV0IAUxGhw?autoplay=1&rel=0&modestbranding=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* 배경 클릭으로 닫기 */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeVideoModal}
          ></div>
        </div>
      )}
    </div>
  );
};
