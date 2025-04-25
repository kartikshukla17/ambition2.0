const SectionTitle = ({
  title = "HACKATHON TRACKS !!",
  subtitle = "",
  align = "left",
  color = "default",
  size = "large",
  highlight = false
}) => {
  const titleSizes = {
    large: "text-3xl",
    medium: "text-2xl",
    small: "text-xl"
  };

  return (
    <div className={`relative text-left ${subtitle ? 'mb-8' : 'mb-4'}`}>
      <div className="relative inline-block">
        {highlight && (
          <>
            <div className="absolute left-3 top-3 rotate-[5deg] bg-gray-300 h-full w-full px-6 py-2 rounded-sm blur-sm z-0" />
            <div className="absolute left-2 top-2 rotate-[5deg] bg-zinc-800 h-full w-full px-6 py-2 rounded-sm z-0" />
          </>
        )}

        <div
          className={`relative z-10 ${
            highlight
              ? 'rotate-[5deg] bg-orange-500 text-black shadow-lg'
              : ''
          } px-6 py-2 font-extrabold tracking-wider ${
            titleSizes[size]
          } rounded-sm w-fit transform transition-all duration-300`}
        >
          {title}
        </div>
      </div>

      {highlight && (
        <div className="ml-6 mt-2">
          <img 
            src="/arrow.png" 
            alt="arrow"
            className="w-16 h-auto rotate-45"
          />
        </div>
      )}

      {subtitle && (
        <p className="text-gray-500 text-base font-medium mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
