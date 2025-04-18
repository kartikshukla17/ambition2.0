//chinmayi + ananya 
//import button which redirects to registration form (leave blank for now)
//add time clock! make component for it if needed in global!
//no need to make the navbar! 
import Button from "@/components/global/Button";
import Tracks from "./Tracks";

const HeroBanner = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ambition 🚀</h1>
      <p className="text-lg text-gray-600 mb-6">Unleash your creativity. Join the hackathon. Make something epic.</p>
      <Button>Register Now</Button>
    </section>
  );
};

export default HeroBanner;


