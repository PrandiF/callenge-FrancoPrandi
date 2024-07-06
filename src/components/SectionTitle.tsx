import React from "react";

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="w-full">
      <h2 className="text-black text-[36px] font-normal">{title}</h2>
    </div>
  );
}

export default SectionTitle;
