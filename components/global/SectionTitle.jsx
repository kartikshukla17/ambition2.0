//sana
//this is just for the section title tag since all are same type only!
//for you: add the colors to in figma!
//add the shadow!
//for everyone: to change in each section just the section color same as done in button! instead of color change it to acc to design!

const SectionTitle = ({ title, align = "center", color = "default" }) => {
  const alignment = align === "left" ? "text-left" : "text-center";

  const titleColors = {
    default: "text-black",
    red: "text-red-500",
    blue: "text-blue-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
    // Add more as needed based on design
  };

  return (
    <div className={`mb-10 ${alignment}`}>
      <h2 className={`text-3xl font-bold mb-2 ${titleColors[color]}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
