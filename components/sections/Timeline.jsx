import SectionTitle from "../global/SectionTitle";
import TimelineItem from "../elements/TimelineItem"; // We will update this file next

const TimeLine = () => {
  const events = [
    {
      date: "{ 28 MAY , 10:PM }",
      title: "REGISTRATION ENDS",
      description: "We'll review your application and will let you know.",
    },
    {
      date: "{ 29 MAY , 10:PM }",
      title: "WORKSHOPS START",
      description: "Starting off with guidance sessions.",
    },
    {
      date: "{ 30 MAY , 10:PM }",
      title: "CHECK-IN STARTS",
      description: "Check-in and get ready for the event.",
    },
    {
      date: "{ 30 MAY , 10:PM }",
      title: "OPENING CEREMONY",
      description: "Let's kickoff PESINNOV with us!",
    },
    {
      date: "{ 30 MAY , 10:PM }",
      title: "HACKATHON STARTS",
      description: "Join with over 1000+ innovative minds and start building.",
    },
    {
      date: "{ 31 MAY , 10:PM }",
      title: "HACKATHON ENDS",
      description: "We'll review your project and will let you know.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <SectionTitle title="Timeline" />
      <div className="relative container mx-auto">
        {/* The Vertical Line */}
        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-500 transform -translate-x-1/2"></div>
        
        {/* Timeline Items Container */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              isLeft={index % 2 === 0} // Alternate left and right
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;