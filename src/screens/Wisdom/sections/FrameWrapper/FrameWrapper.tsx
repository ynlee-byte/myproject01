import React from "react";
import { Card } from "../../../../components/Card";
import { CardDefault } from "../../../../components/CardDefault";

export const FrameWrapper = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-12 sm:gap-16 lg:gap-[100px] relative self-stretch w-full flex-[0_0_auto] px-4">
      <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-20 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-1 sm:gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-variable-collection-CP-CPC text-[32px] sm:text-[48px] lg:text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] [font-style:var(--CP-h3-font-style)]">
                  2단계
                </div>

                <div className="relative self-stretch font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-cpwhite text-[32px] sm:text-[48px] lg:text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[1.2] [font-style:var(--CP-h3-font-style)]">
                  다른 크루들의 위즈덤 카드
                </div>
              </div>

              <p className="relative self-stretch mt-4 sm:mt-6 font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpbody-seconary-text text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body3-font-size)] text-center tracking-[var(--CP-body3-letter-spacing)] leading-[1.5] [font-style:var(--CP-body3-font-style)] px-4">
                다른 크루의 위즈덤 카드를 읽어보고, 표현 행위를 진행해 주세요.
                <br />
                표현 행위 카드는 총 12장이며, 각각의 의미를 확인하고 2단계를
                완료하세요 !
              </p>
            </div>
          </div>
        </div>

        {/* Card explanation section - responsive grid */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            <div className="transform will-change-transform" style={{ transform: 'rotate(-12deg)' }}>
              <CardDefault
                className="!relative !w-full !max-w-[285px] !h-auto"
                crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-14@2x.png"
                crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !left-1 sm:!left-2 lg:!left-[3px] !w-[60px] sm:!w-[80px] lg:!w-[92px] !top-2 sm:!top-2.5 lg:!top-2.5"
              />
            </div>
            <div className="transform will-change-transform" style={{ transform: 'rotate(12deg)' }}>
              <CardDefault
                className="!relative !w-full !max-w-[285px] !h-auto"
                crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-15@2x.png"
                crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !left-1 !w-[60px] sm:!w-[80px] lg:!w-[91px] !top-2 sm:!top-2.5 lg:!top-2.5"
                frameClassName="!mb-0"
                text="추천"
                text1="Recommend"
                text2="3장"
                text3="다른 사람들에게도 보여주고 싶은 3명의 지혜를 뽑는 나의 '추천' 입니다."
                text4=" 3명을 선택할 수 있으니, 동료 크루의 지혜에 감탄을 보내주세요!"
              />
            </div>
            <div className="transform will-change-transform" style={{ transform: 'rotate(-12deg)' }}>
              <CardDefault
                className="!relative !w-full !max-w-[285px] !h-auto"
                crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-16@2x.png"
                crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !left-1 sm:!left-2 lg:!left-[3px] !w-[60px] sm:!w-[80px] lg:!w-[93px] !top-2 sm:!top-2.5 lg:!top-2.5"
                frameClassName="!mb-0"
                text="존중"
                text1="Respect"
                text2="5장"
                text3="나의 지혜와 완전히 같지는 않지만 새로운 관점과 재미를 준 지혜를 뽑는 나의 '존중' 입니다. "
                text4="5명을 골라, 소소한 존중을 표현해보자구요!"
              />
            </div>
            <div className="transform will-change-transform" style={{ transform: 'rotate(12deg)' }}>
              <CardDefault
                className="!relative !w-full !max-w-[285px] !h-auto"
                crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-17@2x.png"
                crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !left-1 !w-[60px] sm:!w-[80px] lg:!w-[91px] !top-2 sm:!top-2.5 lg:!top-2.5"
                text="응원"
                text1="Hug"
                text2="3장"
                text3="조금 더 분발한다면 더 좋은 지혜에 도전해볼 수 있을 지혜를 뽑는 나의 '응원' 입니다. "
                text4="3명을 골라, 힘차게 어깨를 주물러 주자구요!"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards grid section */}
      <div className="flex flex-col items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto] px-4 lg:px-[115px]">
        {Array.from({ length: 5 }, (_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[15px] relative w-full max-w-full sm:max-w-2xl lg:max-w-6xl mx-auto">
            {Array.from({ length: 3 }, (_, colIndex) => {
              const cardIndex = rowIndex * 3 + colIndex;
              const isLastRow = rowIndex === 4;
              const isSpecialCard = isLastRow && colIndex >= 1;
              
              return (
                <Card
                  key={colIndex}
                  className="!relative !w-full !max-w-none mx-auto" // mx-auto 추가하여 개별 카드 가운데 정렬
                  crownPerspective={isSpecialCard ? "https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-32@2x.png" : "https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-29@2x.png"}
                  ellipse={isSpecialCard ? "https://c.animaapp.com/K3FjWwF5/img/ellipse-77-15@2x.png" : "https://c.animaapp.com/K3FjWwF5/img/ellipse-77-12@2x.png"}
                  firePerspective={isSpecialCard ? "https://c.animaapp.com/K3FjWwF5/img/fire-perspective-matte-27@2x.png" : "https://c.animaapp.com/K3FjWwF5/img/fire-perspective-matte-24@2x.png"}
                  likePerspective={isSpecialCard ? "https://c.animaapp.com/K3FjWwF5/img/like-perspective-matte-27@2x.png" : "https://c.animaapp.com/K3FjWwF5/img/like-perspective-matte-24@2x.png"}
                  starPerspective={isSpecialCard ? "https://c.animaapp.com/K3FjWwF5/img/star-perspective-matte-27@2x.png" : "https://c.animaapp.com/K3FjWwF5/img/star-perspective-matte-24@2x.png"}
                  vector={isSpecialCard ? "https://c.animaapp.com/K3FjWwF5/img/vector-21-15.svg" : "https://c.animaapp.com/K3FjWwF5/img/vector-21-14.svg"}
                />
              );
            })}
          </div>
        ))}

        {/* Footer section - Figma styled */}
        <footer className="relative w-full bg-[#121511] mt-[50px]">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 lg:py-16 font-['Sora']">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-center lg:items-start">
              {/* Brand + description + store badges */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-12 lg:col-span-5">
                {/* Logo row with decorative lines */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="hidden sm:block h-[6px] w-8 bg-[#adff00] rounded-sm" />
                  <img
                    className="h-9 sm:h-8 w-auto"
                    alt="ApexX icon"
                    src="https://c.animaapp.com/K3FjWwF5/img/logo-icon.png"
                  />
                  <span className="hidden sm:block h-[6px] w-8 bg-[#adff00] rounded-sm" />
                </div>

                {/* Brand title */}
                <div className="text-white font-['Chakra_Petch'] font-bold leading-none mb-3 text-[46px] sm:text-[40px] lg:text-[52px]">
                  ApexX
                </div>

                {/* Description */}
                <p className="text-[#bababa] font-['Sora'] font-light text-[13px] sm:text-[13px] lg:text-[15px] leading-[1.9] max-w-[620px]">
                  Sed libero odio, sollicitudin a porttitor ac, tempor eu nisi. Nulla sit amet
                  suscipit dolormentum mauris in, rutrum augue.
                </p>

                {/* Store badges - fixed size, horizontal */}
                <div className="mt-6 flex flex-row flex-wrap items-start justify-center sm:justify-start gap-4">
                  {/* Google Play */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-4 py-3 rounded border border-[#2f322c] bg-[#171a15] hover:border-[#adff00] transition-colors w-[180px] h-[60px] sm:w-[200px] sm:h-[64px]"
                  >
                    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
                      <polygon points="6,6 30,24 6,42" fill="#00df6f" />
                      <polygon points="30,24 40,16 40,32" fill="#8aff32" />
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[#bababa] text-[10px]">Get it on</span>
                      <span className="text-white text-[14px] sm:text-[15px] font-semibold">Google Play</span>
                    </div>
                  </a>

                  {/* App Store */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-4 py-3 rounded border border-[#2f322c] bg-[#171a15] hover:border-[#adff00] transition-colors w-[180px] h-[60px] sm:w-[200px] sm:h-[64px]"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                      <path d="M16.365 1.43c.01 1.01-.37 1.97-1.05 2.74-.77.86-1.99 1.53-3.12 1.44-.14-1.02.35-2.08 1.06-2.82.79-.83 2.1-1.45 3.11-1.36zM20.8 17.2c-.56 1.31-1.22 2.61-2.18 3.72-.82.96-1.86 2.03-3.12 2.05-1.18.02-1.56-.66-2.9-.66-1.34 0-1.75.64-2.93.68-1.29.05-2.28-1.04-3.1-1.99-1.68-1.93-2.96-4.88-2.98-7.69-.02-1.5.33-2.98 1.16-4.23.83-1.26 2.06-2.14 3.5-2.16 1.36-.03 2.63.75 3.46.75.83 0 2.31-.93 3.9-.8.66.03 2.52.27 3.72 2.05-.09.06-2.22 1.3-2.19 3.88.03 3.08 2.72 4.11 2.75 4.12z"/>
                    </svg>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[#bababa] text-[10px]">Get it on</span>
                      <span className="text-white text-[14px] sm:text-[15px] font-semibold">App Store</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Useful Links */}
              <div className="sm:col-span-6 lg:col-span-2">
                <div className="text-white font-['Chakra_Petch'] font-bold text-[18px] sm:text-[20px] tracking-wide uppercase border-b border-white/15 pb-3 lg:pb-3.5 mb-6 lg:mb-8 text-center sm:text-left">
                  Useful Links
                </div>
                <ul className="space-y-5 lg:space-y-7 text-[#bababa] text-[14px] sm:text-[16px] font-['Sora'] text-center sm:text-left mx-auto sm:mx-0">
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Home</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">About Us</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Appointment</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Services</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Utility Pages */}
              <div className="sm:col-span-6 lg:col-span-2">
                <div className="text-white font-['Chakra_Petch'] font-bold text-[18px] sm:text-[20px] tracking-wide uppercase border-b border-white/15 pb-3 lg:pb-3.5 mb-6 lg:mb-8 text-center sm:text-left">
                  Utility Pages
                </div>
                <ul className="space-y-5 lg:space-y-7 text-[#bababa] text-[14px] sm:text-[16px] font-['Sora'] text-center sm:text-left mx-auto sm:mx-0">
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">FAQ/Return</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Privacy/Terms</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Gift Cards</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Sizing Guide</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Accessibility</a></li>
                </ul>
              </div>

              {/* Miscellaneous */}
              <div className="sm:col-span-12 lg:col-span-3">
                <div className="text-white font-['Chakra_Petch'] font-bold text-[18px] sm:text-[20px] tracking-wide uppercase border-b border-white/15 pb-3 lg:pb-3.5 mb-6 lg:mb-8 text-center sm:text-left">
                  Miscellaneous
                </div>
                <ul className="space-y-5 lg:space-y-7 text-[#bababa] text-[14px] sm:text-[16px] font-['Sora'] text-center sm:text-left mx-auto sm:mx-0">
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Community</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">FAQs</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">License</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Privacy</a></li>
                  <li><a href="#" className="py-1 text-[#bababa] visited:text-[#bababa] no-underline hover:text-[#adff00] transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 lg:mt-16 pt-6 lg:pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Left: policies */}
                <div className="flex items-center justify-center gap-6">
                  <a href="#" className="text-[#bababa] text-[14px] sm:text-[16px] hover:text-[#adff00] transition-colors font-['Sora']">
                    Privacy policy
                  </a>
                  <span className="hidden sm:block h-5 w-px bg-[#333]" />
                  <a href="#" className="text-[#bababa] text-[14px] sm:text-[16px] hover:text-[#adff00] transition-colors font-['Sora']">
                    Terms &amp; Conditions
                  </a>
                </div>

                {/* Center: copyright */}
                <div className="text-[#bababa] text-[14px] sm:text-[16px] text-center font-['Sora']">
                  ©Designthemes all rights Reserved
                </div>

                {/* Right: social icons */}
                <div className="flex items-center justify-center gap-3">
                  {/* Instagram */}
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#2f322c] hover:border-[#adff00] rounded-[4px] text-[#adff00] transition-colors" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                  {/* Threads */}
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#2f322c] hover:border-[#adff00] rounded-[4px] text-[#adff00] transition-colors" aria-label="Threads">
                    <span className="text-[16px] font-semibold">@</span>
                  </a>
                  {/* Discord (gamepad) */}
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#2f322c] hover:border-[#adff00] rounded-[4px] text-[#adff00] transition-colors" aria-label="Discord">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="4" y="8" width="16" height="8" rx="3" />
                      <circle cx="10" cy="12" r="1.2" fill="currentColor" />
                      <circle cx="14" cy="12" r="1.2" fill="currentColor" />
                    </svg>
                  </a>
                  {/* Meta (infinity) */}
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#2f322c] hover:border-[#adff00] rounded-[4px] text-[#adff00] transition-colors" aria-label="Meta">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M3 14c2-6 6-6 9 0 3-6 7-6 9 0" />
                    </svg>
                  </a>
                  {/* X */}
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-[#2f322c] hover:border-[#adff00] rounded-[4px] text-[#adff00] transition-colors" aria-label="X">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4l16 16M20 4L4 20" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* top/bottom hairlines */}
          <div className="absolute inset-x-0 top-0 h-px bg-white/15 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/15 pointer-events-none" />
        </footer>
      </div>
    </div>
  );
};
