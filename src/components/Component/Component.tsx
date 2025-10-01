import React from "react";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";

interface Props {
  property1: "component-1";
  className: any;
  elementClassName: any;
  element: string;
  propertyDefaultWrapperPolygon: string;
  propertyDefaultWrapperFrameClassName: any;
}

export const Component = ({
  property1,
  className,
  elementClassName,
  element = "https://c.animaapp.com/K3FjWwF5/img/----------1.svg",
  propertyDefaultWrapperPolygon = "https://c.animaapp.com/K3FjWwF5/img/polygon-2-1.svg",
  propertyDefaultWrapperFrameClassName,
}: Props): JSX.Element => {
  return (
    <div className={`relative w-full max-w-[837px] mx-auto ${className}`}>
      <img
        className={`relative w-full h-[50px] sm:h-[60px] md:h-[65px] lg:h-[70px] xl:h-[70px] object-contain ${elementClassName}`}
        alt="Element"
        src={element}
      />

      <PropertyDefaultWrapper
        className="!absolute !left-0 !w-auto !top-full !mt-2 sm:!mt-4"
        frameClassName={propertyDefaultWrapperFrameClassName}
        polygon={propertyDefaultWrapperPolygon}
        property1="default"
      />
    </div>
  );
};
