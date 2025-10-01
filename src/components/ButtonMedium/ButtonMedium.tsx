import React from "react";

interface Props {
  property1: "defalt";
  className: any;
}

export const ButtonMedium = ({ property1, className }: Props): JSX.Element => {
  return (
    <div
      className={`flex w-full max-w-[420px] h-[50px] sm:h-[60px] items-center justify-center gap-2.5 px-6 sm:px-8 lg:px-[37px] py-3 relative bg-[#1c1e1899] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#ffffff26] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] rounded-lg ${className}`}
    >
      <div className="relative w-fit mt-[-0.50px] font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[16px] sm:text-[18px] lg:text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
        자세히 보기
      </div>
    </div>
  );
};
