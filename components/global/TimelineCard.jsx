//narshima
import TimeLineItem from "../elements/TimelineItem";
const TimeLineCard = ({ event }) => {
  const { date, title, description, icon } = event;

  return (
    <div className="timeline-card">
      <TimeLineItem
        date={date}
        title={title}
        description={description}
        icon={icon}
      />
    </div>
  );
};

export default TimeLineCard;
