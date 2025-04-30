// narshima
//have to figure out how will each component be showed in an animated way!
//import the timeline card
//take the arrow from assets folder

import SectionTitle from "../global/SectionTitle";
import TimelineItem from "../elements/Timelineitem";

const TimeLine = () => {
  const events = [
    {
      date: "{ 28 MAY , 10:PM }",
      title: "REGISTRATION ENDS",
      description: "We'll review your application and will let you know.",
      icon: (
        <span role="img" aria-label="megaphone">
          📢
        </span>
      ),
    },
    {
      date: "{ 29 MAY , 10:PM }",
      title: "WORKSHOPS STARTS",
      description: "Starting off with guidance sessions.",
    },
    {
      date: "{ 30 MAY , 10:PM }",
      title: "CHECK-IN STARTS",
      description: "Check-in and get ready for the event.",
      icon: (
        <span role="img" aria-label="rocket">
          🚀
        </span>
      ),
    },
    {
      date: "{ 30 MAY , 10:PM }",
      title: "OPENING CEREMONY",
      description: "Let's kickoff PESINNOV with us!",
      icon: (
        <span role="img" aria-label="rocket">
          🚀
        </span>
      ),
    },
    {
      date: "{ 30 MAY , 10:PM }",
      title: "HACKTHON STARTS",
      description: "Join with over 1000+ innovative minds and start building.",
      icon: (
        <span role="img" aria-label="rocket">
          🚀
        </span>
      ),
    },
    {
      date: "{ 31 MAY , 10:PM }",
      title: "HACKTHON ENDS",
      description: "We'll review your project and will let you know.",
      icon: (
        <span role="img" aria-label="wifi">
          📶
        </span>
      ),
    },
  ];

  return (
    <div className="timeline">
      <div className="timeline-title">
        <h2>Time Line</h2>
      </div>
      <div className="timeline-track">
        {events.map((event, index) => {
          const isLast = index === events.length - 1; // Determine if it's the last item
          return (
            <div
              key={index}
              className={`timeline-card ${index % 2 === 0 ? "right" : "left"}`}
            >
              <TimelineItem event={event} index={index} isLast={isLast} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
