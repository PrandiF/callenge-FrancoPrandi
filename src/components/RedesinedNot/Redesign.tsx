import React from "react";
import SectionTitle from "../SectionTitle";
import RedesingCard from "./RedesingCard";
import MiniCard from "../MiniCard";

function Redesign() {
  return (
    <div>
      <SectionTitle title="Redesigned notifications" />
      <div className="flex gap-1">
        <MiniCard tipo="feat" />
        <p className=" font-openSans">Aug 10, 2024</p>
      </div>
      <p className=" text-[14px] font-semibold">
        Customizing your notification settings is now easier than ever. Quickly
        change your settings using presets like Focused or Mentions only, or
        tailor them to fit your needs.
      </p>
      <RedesingCard />
    </div>
  );
}

export default Redesign;
