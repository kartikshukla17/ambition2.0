//chinmayi + ananya 
//import button which redirects to registration form (leave blank for now)
//add time clock! make component for it if needed in global!
//no need to make the navbar! 
import Button from "@/components/global/Button";
import Countdown from "@/components/elements/Countdown";


const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden bg-white">

      {/* "PRESENTING" */}
      <h2 className="text-xl md:text-2xl font-medium tracking-widest mb-4 z-10">PRESENTING</h2>

      {/* amBITion Title */}
      <div className="transform -rotate-3 bg-lime-300 px-6 py-2 shadow-md relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-black">amBITion</h1>
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-4 h-4 bg-red-500 border-4 border-black"></div>
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-4 h-4 bg-red-500 border-4 border-black"></div>
      </div>

      {/* Register Button */}
      <div className="mt-6 transform rotate-2 inline-block z-10">
        <Button className="bg-sky-300 px-6 py-2 text-lg font-bold shadow-[3px_3px_0_#000]">REGISTER</Button>
      </div>

      {/* Countdown */}
      <div className="mt-10 bg-white px-6 py-4 rounded-2xl shadow-lg z-10">
        <h3 className="text-sm mb-2 text-gray-600">Time left to Register</h3>
        <Countdown />
      </div>

      {/* Subtext */}
      <p className="absolute bottom-12 left-6 text-left text-black font-medium z-10">
        The Ultimate <br /> Hackathon <br /> Experience
      </p>

      {/* Decorative placeholders */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-red-500 rotate-45 -z-0" />
      <div className="absolute top-4 right-8 bg-purple-400 text-white px-3 py-1 rounded-md font-semibold text-sm">What's new here? ⬇</div>
      <div className="absolute bottom-8 right-6 w-24 h-24 bg-purple-500 rotate-45 -z-0" />
    </section>
  );
};

export default HeroBanner;
