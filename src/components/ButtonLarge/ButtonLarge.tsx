import React from "react";

interface Props {
  property1: "default";
  className: any;
  divClassName: any;
}

export const ButtonLarge = ({
  property1,
  className,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`flex w-full max-w-[534px] h-[50px] sm:h-[60px] items-center justify-center gap-2.5 px-4 sm:px-8 lg:px-[201px] py-3 relative bg-variable-collection-CP-CPC backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] rounded-lg ${className}`}
    >
      <div
        className={`relative w-fit mt-[-0.50px] font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-black text-[16px] sm:text-[18px] lg:text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap [font-style:var(--CP-body3-font-style)] ${divClassName}`}
      >
        위즈덤 작성하기
      </div>
    </div>
  );
};
