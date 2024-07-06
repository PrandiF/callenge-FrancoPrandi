import React, { useState } from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

type CardsProps = {
  icon: IconType;
  title: string;
  content: string;
  icon2?: IconType;
};

function Cards({ icon: Icon, icon2: Icon2, title, content }: CardsProps) {
  const [selectOpen, setSelectOpen] = useState(false);

  const handleOpen = () => {
    setSelectOpen(!selectOpen);
  };
  return (
    <div className="px-4 py-2 w-full border rounded-lg flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Icon size={24} className="mr-2 text-black" />
        <div className="flex flex-col">
          <h3 className="text-black">{title}</h3>
          <p className="">{content}</p>
        </div>
      </div>
      <div className="flex gap-3">
        {Icon2 && (
          <button className="border rounded-lg p-[7px]">
            <Icon2 />
          </button>
        )}

        <select
          onClick={handleOpen}
          className=" border rounded-lg p-[7px] w-[110px]"
          defaultValue="default"
        >
          <option value="default" className="flex flex-col">
            <h2>Default</h2>
            {/* <p>ClickUp's recommended settings</p> */}
          </option>
          <option value="focused" className="flex flex-col">
            <h2>Focused</h2>
            {/* <p>Keep track at work without attention overload</p> */}
          </option>
          <option value="custom" className="flex flex-col">
            <h2>Custom</h2>
            {/* <p>Configure custon settings for this channel</p> */}
          </option>
        </select>
      </div>
    </div>
  );
}

export default Cards;
