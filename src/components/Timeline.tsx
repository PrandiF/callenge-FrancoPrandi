import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Redesign from "./RedesinedNot/Redesign";
import Bugs from "./Bugs/Bugs";
import RedesignedTime from "./RedesignedTime/RedesignedTime";

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Redesign />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Bugs />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="success">
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <RedesignedTime />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator color="success"></TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
