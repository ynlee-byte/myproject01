import React from "react";
import { Element } from "./sections/Element";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Header } from "./sections/Header";

export const Wisdom = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-end relative bg-[#121511] overflow-x-hidden"
      data-model-id="68:10779"
    >
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <Header />
        <Element />
        <Frame />
        <FrameWrapper />
      </div>
    </div>
  );
};
