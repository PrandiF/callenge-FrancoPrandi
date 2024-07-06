import { LuInbox } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiMonitorLight, PiDeviceMobileSpeakerThin } from "react-icons/pi";
import Cards from "./Cards";
import { IoSettingsOutline } from "react-icons/io5";
import MiniCard from "../MiniCard";

function RedesingCard() {
  return (
    <div className="rounded-lg bg-gradient-to-bl from-[#2ca5fe] to-[#1f7dff] pt-12 pr-12">
      <div className="bg-white rounded-tr-lg flex flex-col w-full h-full p-5 gap-3">
        <h3 className="text-black">Notifications Settings</h3>
       
        <div className="flex flex-col gap-3">
          <Cards
            title="Inbox"
            icon={LuInbox}
            icon2={IoSettingsOutline}
            content="Default - ClickUp's recommended settings"
          />
          <Cards
            title="Email"
            icon={MdOutlineEmail}
            content="Default - ClickUp's recommended settings"
          />
          <Cards
            title="Browser"
            icon={PiMonitorLight}
            content="Default - ClickUp's recommended settings"
          />
          <Cards
            title="Mobile"
            icon={PiDeviceMobileSpeakerThin}
            content="Default - ClickUp's recommended settings"
          />
        </div>
      </div>
    </div>
  );
}

export default RedesingCard;
