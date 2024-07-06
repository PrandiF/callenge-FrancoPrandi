import React from "react";

function Title() {
  return (
    <div className=" w-[50%] items-center m-auto ">
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <p className="text-black text-4xl items-center">Release 6.5</p>
          <label className="flex gap-2 text-[12px] text-black items-center">
            Sort by:
            <select
              className=" border rounded-xl w-[175px] text-black text-[12px] py-1 px-2  "
              defaultValue="all"
            >
              <option value="all" className="text-[12px] py-1 px-2">
                All
              </option>
            </select>
          </label>
        </div>

        <hr className="bg-gris h-1 w-full" />
      </div>
    </div>
  );
}

export default Title;
