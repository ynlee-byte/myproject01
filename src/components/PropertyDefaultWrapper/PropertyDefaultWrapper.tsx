import React from "react";

interface Props {
  property1: "default";
  className: any;
  frameClassName: any;
  polygon: string;
}

export const PropertyDefaultWrapper = ({
  property1,
  className,
  frameClassName,
  polygon = "https://c.animaapp.com/K3FjWwF5/img/polygon-2-1.svg",
}: Props): JSX.Element => {
  return (
    <div className={`relative w-auto max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] ${className}`}>
      <div
        className={`inline-flex items-center justify-center gap-2.5 px-3 sm:px-4 lg:px-5 py-2 relative w-full bg-variable-collection-CP-CPC border border-solid border-cpstroke shadow-[inset_-3px_-5px_10px_#00000066,inset_2px_3px_4px_#adff0033] rounded-lg ${frameClassName}`}
      >
        <div className="relative w-fit mt-[-0.50px] font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpblack text-[12px] sm:text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] whitespace-nowrap [font-style:var(--CP-body1-font-style)]">
          1단계를 완수하세요!
        </div>
      </div>

      <img
        className="absolute w-3 sm:w-4 h-3 sm:h-4 -top-2 sm:-top-3 left-[25px] sm:left-[30px] md:left-[32.5px] lg:left-[35px]"
        alt="Polygon"
        src={polygon}
      />
    </div>
  );
};
