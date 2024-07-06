import React from "react";
import SectionTitle from "../SectionTitle";
import MiniCard from "../MiniCard";

function Bugs() {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle title="Bugs" />
      <div className="flex gap-1">
        <MiniCard tipo="fix" />
        <p className=" font-openSans">Aug 10, 2024</p>
      </div>
      <p className="text-[14px] font-semibold">
        In our continuous effort to make Hirefy the most reliable recruiting
        platform, we eliminate bugs in the platform! 🚫 Here's a summary of some
        of the major fixes:
      </p>
      <ul className="flex text-[14px] flex-col gap-4 text-black list-disc">
        <li>Unable to attach PDF to tasks using the Adobe integration.</li>
        <li>
          The total contract time between talent and clients cannot be updated.
        </li>
        <li>Some files are not loading when uploaded to portfolio.</li>
        <li>You cannot update the company photo.</li>
        <li>You cannot update the job post list from the talent dashboard.</li>
        <li>
          The marketplace filters were not working correctly, they duplicated
          cards.
        </li>
        <li>
          Users could enter a talent's portfolio without having to log in.
        </li>
        <li>Homepage: new images with correct shadows.</li>
        <li>Email Hirefy signatures displayed incorrect padding.</li>
      </ul>
    </div>
  );
}

export default Bugs;
