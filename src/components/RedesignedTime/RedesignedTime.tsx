import MiniCard from "../MiniCard";
import SectionTitle from "../SectionTitle";
import RedesignedTimeCard from "./RedesignedTimeCard";

function RedesignedTime() {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle title="Redesigned Time Settings" />
      <div className="flex gap-1">
        <MiniCard tipo="feat" />
        <p className="text-gris font-openSans">Jul 15, 2024</p>
      </div>
      <p className="text-gris text-[14px] font-semibold">
        With the revamped Time Tracking interface, you get a streamlined design
        for easier, efficient time tracking. Track time directly from the menu
        bar and have admins record time for other users, ensuring total
        time-tracking control.
      </p>
      <RedesignedTimeCard />
    </div>
  );
}

export default RedesignedTime;
