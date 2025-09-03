import SectionTitle from "../global/SectionTitle";
import TimelineItem from "../elements/TimelineItem";

const TimeLine = () => {
  const events = [
    {
      date: "28 MAY, 10:00 PM",
      title: "REGISTRATION ENDS",
      description: "Final deadline for team registration. Make sure all your team members are registered!",
      icon: "📝",
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      date: "29 MAY, 10:00 AM",
      title: "WORKSHOPS START",
      description: "Technical workshops and mentorship sessions begin. Learn from industry experts.",
      icon: "🎓",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      date: "30 MAY, 9:00 AM",
      title: "CHECK-IN STARTS",
      description: "Arrive at the venue, collect your swag kit, and get ready for an amazing experience.",
      icon: "🎒",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      date: "30 MAY, 11:00 AM",
      title: "OPENING CEREMONY",
      description: "Official kickoff of amBITion 2.0! Meet fellow participants and get inspired.",
      icon: "🎉",
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20"
    },
    {
      date: "30 MAY, 12:00 PM",
      title: "HACKATHON STARTS",
      description: "Time to code! 24 hours of non-stop innovation, building, and problem-solving begins.",
      icon: "💻",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      highlight: true
    },
    {
      date: "31 MAY, 12:00 PM",
      title: "SUBMISSION & JUDGING",
      description: "Submit your projects and present to our expert panel of judges. Winners announced!",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden" id="timeline">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-pink-300 to-red-400 rounded-2xl transform rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-25"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-full font-bold text-lg sm:text-xl shadow-lg transform rotate-1 border-3 border-black mb-6 sm:mb-8">
            📅 EVENT TIMELINE 📅
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Mark your calendars and get ready for an incredible journey!
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Enhanced Vertical Line with gradient and decorative elements - hidden on mobile */}
          <div className="absolute left-1/2 w-1 h-full transform -translate-x-1/2 hidden md:block">
            <div className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
          </div>
          
          {/* Timeline Items Container */}
          <div className="space-y-8 sm:space-y-12">
            {events.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                index={index}
              />
            ))}
          </div>
          
          {/* Call to Action at the bottom */}
          <div className="text-center mt-12 sm:mt-16 px-4">
            <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg sm:shadow-2xl border-2 sm:border-4 border-black transform -rotate-1 hover:rotate-0 transition-transform duration-300 min-h-[48px] flex items-center justify-center">
              🚀 Don't Miss Out - Register Today!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;