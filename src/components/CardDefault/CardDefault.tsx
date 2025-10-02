import React from "react";

interface Props {
  className: any;
  crownPerspectiveClassName: any;
  crownPerspective: string;
  frameClassName: any;
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

export const CardDefault = ({
  className,
  crownPerspectiveClassName,
  crownPerspective = "https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-1@2x.png",
  frameClassName,
  text = "경의",
  text1 = "Honor",
  text2 = "1장",
  text3 = "최고' 의 지혜를 뽐내는 1명에게 부여하는 나의 '감탄' 입니다. :)",
  text4 = "1명 밖에 선택할 수 없으니, 신중하게 나의 경의를 표현해보세요!",
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-6 sm:gap-8 lg:gap-[34px] px-4 sm:px-6 lg:px-[30px] py-6 sm:py-8 lg:py-[50px] relative bg-cpbg-black rounded-[20px] border border-solid border-cpstroke w-full max-w-[285px] transition-transform duration-300 ease-in-out hover:rotate-0 cursor-pointer ${className}`}
    >
      <div
        className={`flex flex-col w-full items-start gap-6 sm:gap-8 lg:gap-[34px] relative flex-[0_0_auto] ${frameClassName}`}
      >
        <div className="relative w-[80px] sm:w-[90px] lg:w-[100px] h-[80px] sm:h-[90px] lg:h-[100px] bg-[#3b4236] rounded-full overflow-hidden shadow-shadow-1 flex items-center justify-center">
          <img
            className={`w-[60px] sm:w-[70px] lg:w-[75px] h-[60px] sm:h-[70px] lg:h-[75px] object-contain ${crownPerspectiveClassName}`}
            alt="Crown perspective"
            src={crownPerspective}
          />
        </div>

        <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-start gap-2 relative flex-[0_0_auto]">
              <div className="mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[20px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] relative w-fit whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                {text}
              </div>

              <div className="font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpbody-text text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] relative w-fit whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
                {text1}
              </div>
            </div>

            <div className="font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] relative w-fit whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
              {text2}
            </div>
          </div>

          <p className="relative self-stretch font-CP-body2 font-[number:var(--CP-body2-font-weight)] text-body-text-color text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body2-font-size)] tracking-[var(--CP-body2-letter-spacing)] leading-[var(--CP-body2-line-height)] [font-style:var(--CP-body2-font-style)] text-left">
            <span className="tracking-[var(--CP-body2-letter-spacing)] font-CP-body2 [font-style:var(--CP-body2-font-style)] font-[number:var(--CP-body2-font-weight)] leading-[var(--CP-body2-line-height)] text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body2-font-size)]">
              {text3}
            </span>

            <span className="font-CP-body2 font-[number:var(--CP-body2-font-weight)] tracking-[var(--CP-body2-letter-spacing)] [font-style:var(--CP-body2-font-style)] leading-[var(--CP-body2-line-height)] text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body2-font-size)]">
              {text4}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
