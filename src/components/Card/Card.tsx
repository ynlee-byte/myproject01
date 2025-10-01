import React from "react";
import { ButtonMedium } from "../ButtonMedium";

interface Props {
  className: any;
  ellipse: string;
  vector: string;
  crownPerspective: string;
  starPerspective: string;
  likePerspective: string;
  firePerspective: string;
}

export const Card = ({
  className,
  ellipse = "https://c.animaapp.com/K3FjWwF5/img/ellipse-77@2x.png",
  vector = "https://c.animaapp.com/K3FjWwF5/img/vector-21.svg",
  crownPerspective = "https://c.animaapp.com/K3FjWwF5/img/crown-perspective-matte@2x.png",
  starPerspective = "https://c.animaapp.com/K3FjWwF5/img/star-perspective-matte@2x.png",
  likePerspective = "https://c.animaapp.com/K3FjWwF5/img/like-perspective-matte@2x.png",
  firePerspective = "https://c.animaapp.com/K3FjWwF5/img/fire-perspective-matte@2x.png",
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex flex-col items-center gap-6 sm:gap-8 lg:gap-[35px] p-4 sm:p-5 lg:p-[25px] relative bg-[#3b4236] rounded-[20px] border border-solid border-cpbg-black w-full max-w-[500px] mx-auto ${className}`}
    >
      <div className="flex flex-col items-center gap-4 sm:gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[40px] sm:w-[45px] lg:w-[50px] h-[40px] sm:h-[45px] lg:h-[50px] aspect-[1] object-cover rounded-full"
              alt="Ellipse"
              src={ellipse}
            />

            <p className="relative flex-1 font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[12px] sm:text-[length:var(--CP-body1-font-size)] tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] overflow-hidden text-ellipsis whitespace-nowrap [font-style:var(--CP-body1-font-style)]">
              홍길동 / 남 / 23 / 한국대 / 표범학과 / 3 / 미디어 / 웹툰 / 일반 / 구글
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative items-start justify-start self-stretch mt-[-1.00px] font-CP-body-4 font-[number:var(--CP-body-4-font-weight)] text-cpwhite text-[16px] sm:text-[18px] lg:text-[length:var(--CP-body-4-font-size)] tracking-[var(--CP-body-4-letter-spacing)] leading-[var(--CP-body-4-line-height)] overflow-hidden text-ellipsis whitespace-nowrap text-left [font-style:var(--CP-body-4-font-style)]">
              - 미니 보험은 1만 원 이하의 적은 보험료로 1년 미만의 짧은 보험을 말한다. 해당
            </p>

            <p className="relative items-start justify-start self-stretch font-CP-body-4 font-[number:var(--CP-body-4-font-weight)] text-cpwhite text-[16px] sm:text-[18px] lg:text-[length:var(--CP-body-4-font-size)] tracking-[var(--CP-body-4-letter-spacing)] leading-[var(--CP-body-4-line-height)] overflow-hidden text-ellipsis whitespace-nowrap text-left [font-style:var(--CP-body-4-font-style)]">
              - 2030세대 라이프스타일을 반영한 미니보험에 '게임화(게이미피케이션) 요소'를 보험 가입 및
            </p>

            <p className="relative items-start justify-start self-stretch font-CP-body-4 font-[number:var(--CP-body-4-font-weight)] text-cpwhite text-[16px] sm:text-[18px] lg:text-[length:var(--CP-body-4-font-size)] tracking-[var(--CP-body-4-letter-spacing)] leading-[var(--CP-body-4-line-height)] overflow-hidden text-ellipsis whitespace-nowrap text-left [font-style:var(--CP-body-4-font-style)]">
              - 최근 미니보험은 생활 밀착형 콘셉트로 2030 세대의 눈길을 사로잡고 있다.
            </p>

            <div className="relative flex items-center justify-start self-stretch font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-body-text-color text-[12px] sm:text-[length:var(--CP-btn-text-font-size)] tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] text-left [font-style:var(--CP-btn-text-font-style)]">
              2025. 09. 09(화) 19:18
            </div>
          </div>
        </div>

        <img
          className="relative w-full h-px object-cover"
          alt="Vector"
          src={vector}
        />

        <div className="self-stretch w-full flex-[0_0_auto] bg-cpbg-black rounded-[20px] flex items-center justify-center relative">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] relative flex-1 bg-[#3b4236]">
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

          <div className="flex flex-col items-center justify-center gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] relative flex-1 bg-[#3b4236]">
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

          <div className="flex-col gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] flex-1 bg-[#3b4236] flex items-center justify-center relative">
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

          <div className="flex flex-col items-center justify-center gap-1 sm:gap-[5px] p-2 sm:p-3 lg:p-[15px] relative flex-1 bg-[#3b4236]">
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

        <ButtonMedium
          className="!self-stretch !left-[unset] !top-[unset] !w-full"
          property1="defalt"
        />
      </div>
    </div>
  );
};
