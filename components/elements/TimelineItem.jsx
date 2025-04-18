// narshima

const TimelineItem = ({ time, title, description }) => {
    return (
      <div className="relative pl-6 border-l-2 border-gray-300 pb-6">
        <div className="absolute left-[-0.6rem] top-1 w-3 h-3 bg-black rounded-full"></div>
        <div className="mb-1 text-sm text-gray-500">{time}</div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };
  
  export default TimelineItem;
  
