import React from "react";

interface Props {
  className: any;
  frameClassName: any;
  frameClassNameOverride: any;
  crownPerspective: string;
  starPerspective: string;
  likePerspective: string;
  firePerspective: string;
  divClassName: any;
  text: string;
}

export const CardLarge = ({
  className,
  frameClassName,
  frameClassNameOverride,
  crownPerspective = "https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte-2@2x.png",
  starPerspective = "https://c.animaapp.com/K3FjWwF5/img/star-perspective-matte-1@2x.png",
  likePerspective = "https://c.animaapp.com/K3FjWwF5/img/like-perspective-matte-1@2x.png",
  firePerspective = "https://c.animaapp.com/K3FjWwF5/img/fire-perspective-matte-1@2x.png",
  divClassName,
  text = "나는 기획자 중에 기획자 멋쟁이 기획자다 =!",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex flex-col w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[470px] max-w-[470px] items-start relative ${className}`}
    >
      <div
        className={`flex flex-col h-[120px] sm:h-[150px] lg:h-[185px] items-center justify-end gap-2.5 px-4 sm:px-5 lg:px-[25px] py-4 sm:py-5 lg:py-5 relative self-stretch w-full rounded-[20px_20px_0px_0px] border border-solid border-[#ffffff26] bg-[url(https://c.animaapp.com/K3FjWwF5/img/frame-2121457846@2x.png)] bg-cover bg-[50%_50%] ${frameClassName}`}
      >
        <p className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-cpwhite text-[10px] sm:text-[12px] lg:text-[length:var(--CP-btn-text-font-size)] tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] text-center px-2 [font-style:var(--CP-btn-text-font-style)]">
          홍길동 / 남 / 23 / 율도국 / 스키학과 / 3 / 미디어 / 웹툰 / 일반 / 구글
        </p>
      </div>

      <div className="flex flex-col h-auto min-h-[180px] sm:min-h-[200px] lg:min-h-[233px] items-start gap-2.5 px-3 sm:px-4 lg:px-[17px] py-4 sm:py-5 lg:py-5 relative self-stretch w-full bg-cpbg-black rounded-[0px_0px_20px_20px] border border-solid border-[#ffffff26]">
        <div
          className={`flex flex-col w-full items-center gap-3 sm:gap-3.5 relative flex-[0_0_auto] ${frameClassNameOverride}`}
        >
          <div className="self-stretch w-full flex-[0_0_auto] bg-cpbg-black rounded-[20px] flex items-center justify-center relative">
            <div className="flex flex-col w-full max-w-[80px] sm:max-w-[90px] lg:max-w-[105px] items-center justify-center gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] relative">
              <img
                className="relative w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px] aspect-[1] object-cover"
                alt="Crown perspective"
                src={crownPerspective}
              />

              <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[18px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                  22
                </div>

                <div className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-cpbody-text text-[10px] sm:text-[12px] lg:text-[length:var(--CP-btn-text-font-size)] text-center tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] whitespace-nowrap [font-style:var(--CP-btn-text-font-style)]">
                  경의
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full max-w-[80px] sm:max-w-[90px] lg:max-w-[105px] items-center justify-center gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] relative">
              <img
                className="relative w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px] aspect-[1] object-cover"
                alt="Star perspective"
                src={starPerspective}
              />

              <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[18px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                  8
                </div>

                <div className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-cpbody-text text-[10px] sm:text-[12px] lg:text-[length:var(--CP-btn-text-font-size)] text-center tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] whitespace-nowrap [font-style:var(--CP-btn-text-font-style)]">
                  추천
                </div>
              </div>
            </div>

            <div className="flex-col w-full max-w-[80px] sm:max-w-[90px] lg:max-w-[105px] gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] flex items-center justify-center relative">
              <img
                className="relative w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px] aspect-[1] object-cover"
                alt="Like perspective"
                src={likePerspective}
              />

              <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[18px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                  10
                </div>

                <div className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-cpbody-text text-[10px] sm:text-[12px] lg:text-[length:var(--CP-btn-text-font-size)] text-center tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] whitespace-nowrap [font-style:var(--CP-btn-text-font-style)]">
                  존중
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full max-w-[80px] sm:max-w-[90px] lg:max-w-[105px] items-center justify-center gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] relative">
              <img
                className="relative w-[20px] sm:w-[25px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px] aspect-[1] object-cover"
                alt="Fire perspective"
                src={firePerspective}
              />

              <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[18px] sm:text-[24px] lg:text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                  2
                </div>

                <div className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-cpbody-text text-[10px] sm:text-[12px] lg:text-[length:var(--CP-btn-text-font-size)] text-center tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] whitespace-nowrap [font-style:var(--CP-btn-text-font-style)]">
                  응원
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex items-center justify-center gap-2.5 px-4 sm:px-5 lg:px-5 py-2 sm:py-2.5 lg:py-[11px] relative self-stretch w-full flex-[0_0_auto] bg-[url(https://c.animaapp.com/K3FjWwF5/img/frame-2121457849@2x.png)] bg-cover bg-[50%_50%] ${divClassName}`}
          >
            <p className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[391px] mt-[-1.00px] font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[14px] sm:text-[16px] lg:text-[length:var(--CP-body3-font-size)] text-center tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--CP-body3-font-style)]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
