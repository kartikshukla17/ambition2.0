// We no longer need the complex logic for isEven, isLast, etc. from the original file.
const TimeLineItem = ({ event, isLeft }) => {
  const { title, date, description } = event;

  // Define alignment classes based on the isLeft prop
  const alignment = isLeft ? "md:text-right" : "md:text-left";
  const cardPosition = isLeft ? "md:mr-auto" : "md:ml-auto";
  const pointerPosition = isLeft ? "md:right-0 md:-mr-3" : "md:left-0 md:-ml-3";

  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      {/* The Timeline Card */}
      <div className={`w-full md:w-5/12 ${cardPosition}`}>
        <div className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg ${alignment}`}>
          <p className="text-purple-500 dark:text-purple-400 font-semibold text-sm mb-1">{date}</p>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>

      {/* The Pointer and Dot */}
      <div className="relative w-full md:w-2/12 flex justify-center">
        <div className={`absolute top-1/2 h-6 w-6 transform -translate-y-1/2 ${pointerPosition} hidden md:block`}>
          <div className="w-6 h-6 rounded-full bg-pink-500 border-4 border-white dark:border-gray-800"></div>
        </div>
      </div>

      {/* Empty spacer for the other side on desktop */}
      <div className="w-5/12 hidden md:block"></div>
    </div>
  );
};

export default TimeLineItem;