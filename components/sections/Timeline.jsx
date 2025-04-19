// narshima
//have to figure out how will each component be showed in an animated way! 
//import the timeline card 
//take the arrow from assets folder

import SectionTitle from "@/components/global/SectionTitle";
import TimelineItem from "@/components/elements/TimelineItem";

const Timeline = () => {
  const events = [
    { time: "May 1", title: "Registrations Open", description: "Submit your team and theme." },
    { time: "May 10", title: "Hackathon Starts", description: "Time to build and hustle." },
    { time: "May 15", title: "Judging & Demos", description: "Final presentations." },
  ];

  return (
    <section className="px-4 py-16" id="timeline">
      <SectionTitle title="Timeline" subtitle="Mark your calendars" />
      <div className="max-w-2xl mx-auto space-y-6">
        {events.map((event, idx) => (
          <TimelineItem key={idx} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;

