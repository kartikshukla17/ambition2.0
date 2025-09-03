const TimeLineItem = ({ event, index }) => {
  const { title, date, description, icon, color, bgColor, highlight } = event;
  const isLeft = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row items-center w-full relative">
      {/* Mobile-first single column layout, desktop alternating layout */}
      {/* Content - always visible on mobile, alternating on desktop */}
      <div className={`w-full ${isLeft ? 'md:w-5/12 md:pr-8' : 'md:w-5/12 md:pl-8 md:order-3'} z-10`}>
        <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transition-all duration-500 border-2 sm:border-4 border-black bg-gradient-to-br ${bgColor} ${isLeft ? 'md:text-right' : 'md:text-left'} ${highlight ? 'transform scale-105 ring-2 sm:ring-4 ring-yellow-400' : 'hover:scale-105'}`}>
          {/* Highlight badge for important events */}
          {highlight && (
            <div className={`absolute -top-2 sm:-top-3 ${isLeft ? '-right-2 sm:-right-3' : '-left-2 sm:-left-3'} bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-black border-2 border-black transform ${isLeft ? 'rotate-12' : '-rotate-12'} shadow-lg`}>
              🔥 MAIN EVENT!
            </div>
          )}
          
            {/* Arrow pointer for desktop - pointing right */}
            {isLeft && (
              <div className="absolute top-8 right-0 translate-x-full w-0 h-0 hidden md:block border-l-[16px] border-l-white dark:border-l-gray-800 border-y-[16px] border-y-transparent"></div>
            )}
          
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 m-1 sm:m-2 rounded-lg sm:rounded-xl shadow-inner">
              {/* Icon and Date Header */}
              <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <div className="text-2xl sm:text-3xl md:text-4xl">{icon}</div>
              <div className={`bg-gradient-to-r ${color} text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border-2 border-black shadow-lg`}>
                {date}
              </div>
            </div>
            
            <h3 className={`text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-800 dark:text-gray-100 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{description}</p>
            
            {/* Decorative bottom accent */}
              <div className={`mt-3 sm:mt-4 h-1 sm:h-2 bg-gradient-to-r ${color} rounded-full`}></div>
            </div>
          </div>
        </div>

      {/* Spacer for desktop alternating layout */}
      {!isLeft && (
        <div className="hidden md:block md:w-5/12"></div>
      )}

      {/* The Enhanced Center Dot */}
      <div className={`relative w-full md:w-2/12 flex justify-center my-4 sm:my-6 md:my-0 ${isLeft ? 'md:order-2' : 'md:order-2'}`}>
        <div className={`relative w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 rounded-full bg-gradient-to-br ${color} border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg sm:shadow-2xl z-20 ${highlight ? 'animate-bounce' : ''}`}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} animate-pulse opacity-75`}></div>
          <div className="absolute inset-1 sm:inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <span className="text-sm sm:text-lg md:text-xl">{icon}</span>
          </div>
          
          {/* Ripple effect for highlighted events */}
          {highlight && (
            <>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} animate-ping opacity-30`}></div>
              <div className={`absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-br ${color} animate-pulse opacity-20`}></div>
            </>
          )}
        </div>
      </div>

      {/* Arrow pointer for desktop - pointing left (for right side items) */}
      {!isLeft && (
        <div className="absolute top-8 left-0 -translate-x-full w-0 h-0 hidden md:block border-r-[16px] border-r-white dark:border-r-gray-800 border-y-[16px] border-y-transparent"></div>
      )}
    </div>
  );
};

export default TimeLineItem;