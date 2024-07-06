function RedesignedTimeCard() {
  return (
    <div className="rounded-lg bg-gradient-to-br from-[#7711fa] to-[#9813f4] pt-12 pl-12">
      <div className="bg-white rounded-tl-lg flex flex-col w-full h-full p-5 gap-3">
        <h3 className="text-black">Edit Sprint Folder</h3>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="text-[12px] text-black">
              Sprint Name
              <input type="text" className="border w-full rounded-lg text-[16px] py-1 px-2" />
            </label>
            <p className="text-[12px]">
              {
                "Must include {INDEX} - a sequential number for each Sprint starting with 1"
              }
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-[12px] text-black">
              Default Templates{" "}
              <input type="text" className="border w-full rounded-lg text-[16px] py-1 px-2" />
            </label>
            <p className="text-[12px]">
              Pick a List template to be used when are created in this Folder
            </p>
          </div>
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <label className="text-black flex flex-col text-[12px]"> 
                Sprint Duration
                <select
                  className=" border rounded-lg p-[7px] text-[16px] py-1 px-2  "
                  defaultValue="2-weeks"
                >
                  <option value="2-weeks" className="text-[16px] py-1 px-2">2 weeks</option>
                  <option value="3-weeks" className="text-[16px] py-1 px-2">3 weeks</option>
                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="text-black flex flex-col text-[12px]">
                Date Format
                <input
                  type="date"
                  placeholder="MM/DD"
                  className="border w-full rounded-lg text-[16px] py-1 px-2"
                />
              </label>
            </div>
          </div>
          <label className="text-black flex flex-col text-[12px]">
            Sprint Timezone
            <select
              className=" border rounded-lg p-[7px] text-[16px] py-1 px-2  "
              defaultValue="GMT1"
            >
              <option value="GMT1">{"(GMT +01:00) Africa/Lagos (WAT)"}</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default RedesignedTimeCard;
