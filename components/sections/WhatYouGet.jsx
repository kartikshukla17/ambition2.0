// ananya
// import the cardtitle component for adding the title!
// add the styleElement component!

// import CardTitle from "@/components/global/CardTitle";
import StyleElement from "@/components/global/StyleElement";
import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";

const WhatYouGet = () => {
  const reasons = [
    {
      title: "RECOGNITION",
      emoji: "📡",
      description: "Get recognized by industry experts",
    },
    {
      title: "CERTIFICATES",
      emoji: "📜",
      description: "Get recognized by industry experts",
    },
    {
      title: "NETWORKING",
      emoji: "🌐",
      description: "Get recognized by industry experts",
    },
  ];


  return (
    <section className="px-4 py-16  bg-white text-black">
      <div className=" inline-block transform -skew-x-6 mb-8">
        <div className="relative">
  {/* Shadow box - only right and bottom */}
  <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black rounded-sm -z-10" />
  
  {/* Actual green label */}
  <div className="bg-green-400 px-6 py-2 rounded-sm">
    <h2 className="text-black text-xl font-extrabold uppercase tracking-widest italic">
      WHAT YOU WILL GET ?
    </h2>
  </div>
  </div>
</div>

      <StyleElement />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-10">
        {reasons.map((reason, idx) => (
          <Card key={idx} className="bg-white rounded-xl shadow-md p-6 pt-4 text-center max-w-xs mx-auto">
            {/* <p className="text-center font-medium">{reason}</p> */}
            <div className="w-full bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-md py-2 px-4 flex items-center justify-center gap-2 mb-4 mt-0"><span  className="font-extrabold uppercase text-lg tracking-wide" >{reason.title} </span><span>{reason.emoji}</span></div>
            <p className="text-sm text-black leading-relaxed">{reason.description.repeat(3)}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGet;