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
              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-variable-collection-CP-CPC text-[32px] sm:text-[48px] lg:text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] [font-style:var(--CP-h3-font-style)]">
                  2단계
                </div>

                <div className="relative self-stretch font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-cpwhite text-[32px] sm:text-[48px] lg:text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] [font-style:var(--CP-h3-font-style)]">
                  다른 크루들의 위즈덤 카드
                </div>
              </div>

              <p className="relative self-stretch font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpbody-seconary-text text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body3-font-size)] text-center tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] [font-style:var(--CP-body3-font-style)] px-4">
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
            <CardDefault
              className="!relative !w-full !max-w-[285px] !rotate-0 sm:!rotate-[-15deg] lg:!rotate-[-15deg] !h-auto"
              crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-14@2x.png"
              crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !rotate-0 sm:!rotate-[15deg] lg:!rotate-[15deg] !left-1 sm:!left-2 lg:!left-[3px] !w-[60px] sm:!w-[80px] lg:!w-[92px] !top-2 sm:!top-2.5 lg:!top-2.5"
            />
            <CardDefault
              className="!relative !w-full !max-w-[285px] !rotate-0 sm:!rotate-[15deg] lg:!rotate-[15deg] !h-auto"
              crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-15@2x.png"
              crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !rotate-0 sm:!rotate-[-15deg] lg:!rotate-[-15deg] !left-1 !w-[60px] sm:!w-[80px] lg:!w-[91px] !top-2 sm:!top-2.5 lg:!top-2.5"
              frameClassName="!mb-0"
              text="추천"
              text1="Recommend"
              text2="3장"
              text3="다른 사람들에게도 보여주고 싶은 3명의 지혜를 뽑는 나의 '추천' 입니다."
              text4=" 3명을 선택할 수 있으니, 동료 크루의 지혜에 감탄을 보내주세요!"
            />
            <CardDefault
              className="!relative !w-full !max-w-[285px] !rotate-0 sm:!rotate-[-15deg] lg:!rotate-[-15deg] !h-auto"
              crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-16@2x.png"
              crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !rotate-0 sm:!rotate-[15deg] lg:!rotate-[15deg] !left-1 sm:!left-2 lg:!left-[3px] !w-[60px] sm:!w-[80px] lg:!w-[93px] !top-2 sm:!top-2.5 lg:!top-2.5"
              frameClassName="!mb-0"
              text="존중"
              text1="Respect"
              text2="5장"
              text3="나의 지혜와 완전히 같지는 않지만 새로운 관점과 재미를 준 지혜를 뽑는 나의 '존중' 입니다. "
              text4="5명을 골라, 소소한 존중을 표현해보자구요!"
            />
            <CardDefault
              className="!relative !w-full !max-w-[285px] !rotate-0 sm:!rotate-[15deg] lg:!rotate-[15deg] !h-auto"
              crownPerspective="https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-17@2x.png"
              crownPerspectiveClassName="!h-[60px] sm:!h-[80px] lg:!h-[92px] !rotate-0 sm:!rotate-[-15deg] lg:!rotate-[-15deg] !left-1 !w-[60px] sm:!w-[80px] lg:!w-[91px] !top-2 sm:!top-2.5 lg:!top-2.5"
              text="응원"
              text1="Hug"
              text2="3장"
              text3="조금 더 분발한다면 더 좋은 지혜에 도전해볼 수 있을 지혜를 뽑는 나의 '응원' 입니다. "
              text4="3명을 골라, 힘차게 어깨를 주물러 주자구요!"
            />
          </div>
        </div>
      </div>

      {/* Cards grid section */}
      <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[15px] relative self-stretch w-full">
              {Array.from({ length: 3 }, (_, colIndex) => {
                const cardIndex = rowIndex * 3 + colIndex;
                const isLastRow = rowIndex === 4;
                const isSpecialCard = isLastRow && colIndex >= 1;
                
                return (
                  <Card
                    key={colIndex}
                    className="!relative !w-full !max-w-none"
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
        </div>

        {/* Footer section */}
        <div className="flex flex-col w-full items-center justify-center gap-2.5 px-4 py-6 sm:py-8 lg:py-[30px] relative flex-[0_0_auto] bg-[#121511]">
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12 lg:mb-16">
              {/* Logo and description */}
              <div className="lg:col-span-2 flex flex-col">
                <img
                  className="w-[120px] sm:w-[150px] lg:w-[179.2px] h-auto mb-4"
                  alt="Logo"
                  src="https://c.animaapp.com/K3FjWwF5/img/logo@2x.png"
                />

                <p className="w-full max-w-[531px] font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[14px] sm:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] mb-6">
                  Sed libero odio, sollicitudin a porttitor ac, tempor eu nisi.
                  Nulla sit amet suscipit dolormentum mauris in, rutrum augue.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-[180px] lg:w-[206px] h-[50px] sm:h-[60px] lg:h-[69px] relative">
                    <img
                      className="absolute top-0 left-0 w-full h-full"
                      alt="Rectangle"
                      src="https://c.animaapp.com/K3FjWwF5/img/rectangle-176.svg"
                    />

                    <img
                      className="absolute w-[40%] h-[30%] top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2"
                      alt="Group"
                      src="https://c.animaapp.com/K3FjWwF5/img/group-131463@2x.png"
                    />

                    <img
                      className="absolute w-[15%] h-[50%] top-[25%] left-[12%]"
                      alt="Group"
                      src="https://c.animaapp.com/K3FjWwF5/img/group-131462@2x.png"
                    />

                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[12px] sm:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                      Get it on
                    </div>
                  </div>

                  <div className="w-full sm:w-[160px] lg:w-[186px] h-[50px] sm:h-[60px] lg:h-[69px] relative">
                    <img
                      className="absolute top-0 left-0 w-full h-full"
                      alt="Rectangle"
                      src="https://c.animaapp.com/K3FjWwF5/img/rectangle-176-1.svg"
                    />

                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[12px] sm  :text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                      Get it on
                    </div>

                    <img
                      className="absolute w-[40%] h-[30%] top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2"
                      alt="Group"
                      src="https://c.animaapp.com/K3FjWwF5/img/group-131465@2x.png"
                    />

                    <img
                      className="absolute w-[15%] h-[50%] top-[25%] left-[12%]"
                      alt="Group"
                      src="https://c.animaapp.com/K3FjWwF5/img/group-131466@2x.png"
                    />
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="flex flex-col gap-3 sm:gap-[13px]">
                <div className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[18px] sm:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  USEFUL LINKS
                </div>

                <div className="font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[14px] sm:text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)]">
                  Home
                  <br />
                  About Us
                  <br />
                  Appointment
                  <br />
                  Services
                  <br />
                  Blog
                </div>
              </div>

              {/* Utility Pages */}
              <div className="flex flex-col gap-3 sm:gap-[13px]">
                <div className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[18px] sm:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  UTILITY PAGES
                </div>

                <p className="font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[14px] sm:text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)]">
                  FAQ/Return <br />
                  Privacy/Terms <br />
                  Gift Cards <br />
                  Sizing Guide <br />
                  Accessibility
                </p>
              </div>

              {/* Miscellaneous */}
              <div className="flex flex-col gap-3 sm:gap-[13px]">
                <div className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[18px] sm:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  MISCELLANEOUS
                </div>

                <div className="font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[14px] sm:text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)]">
                  Community
                  <br />
                  FAQs
                  <br />
                  License
                  <br />
                  Privacy
                  <br />
                  Contact Us
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="border-t border-[#333] pt-6 sm:pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]">
                  <div className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[14px] sm:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                    Privacy policy
                  </div>

                  <img
                    className="hidden sm:block w-px h-[17px] object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/K3FjWwF5/img/line-398.svg"
                  />

                  <div className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[14px] sm:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                    Terms &amp; Conditions
                  </div>
                </div>

                <div className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[14px] sm:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                  ©Designthemes all rights Reserved
                </div>

                <img
                  className="w-[200px] sm:w-[255px] h-[30px] sm:h-[39px] object-contain"
                  alt="Group"
                  src="https://c.animaapp.com/K3FjWwF5/img/group-131478@2x.png"
                />
              </div>
            </div>

            <img
              className="absolute left-0 -top-px w-full h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/K3FjWwF5/img/line-401.svg"
            />

            <img
              className="absolute left-0 -bottom-px w-full h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/K3FjWwF5/img/line-401.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
