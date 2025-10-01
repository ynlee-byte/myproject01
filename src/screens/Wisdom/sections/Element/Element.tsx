import React from "react";
import { Component } from "../../../../components/Component";

export const Element = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2.5 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[540px] py-8 sm:py-12 lg:py-[86px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative w-full max-w-[837px] mx-auto">
        <div className="flex flex-col w-full items-center gap-5 relative">
          <div className="relative w-full">
            <div className="text-center font-CP-h2 font-[number:var(--CP-h2-font-weight)] text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[length:var(--CP-h2-font-size)] tracking-[var(--CP-h2-letter-spacing)] leading-[var(--CP-h2-line-height)] whitespace-nowrap [font-style:var(--CP-h2-font-style)] mb-8 sm:mb-12 lg:mb-[92px]">
              나의 진행 상태
            </div>

            <Component
              className="!relative !left-0 !w-full !top-0"
              element="https://c.animaapp.com/K3FjWwF5/img/----------1-1.svg"
              elementClassName="!left-0"
              property1="component-1"
              propertyDefaultWrapperFrameClassName="!left-0 !w-full"
              propertyDefaultWrapperPolygon="https://c.animaapp.com/K3FjWwF5/img/polygon-2-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
