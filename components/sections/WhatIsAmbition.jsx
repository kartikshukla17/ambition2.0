// raksha
//import card component! 
//leave a space for adding that cartoon character! 
import SectionTitle from "@/components/global/SectionTitle";

const WhatIsAmbition = () => {
  return (
    <section className="px-4 py-16 bg-gray-50 dark:bg-gray-800">
      <SectionTitle title="What is ambition?" subtitle="More than a hackathon." />
      <div className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 ">
        <p>
          ambition is a student-driven hackathon built to help developers, designers, and visionaries turn their ideas into reality. We aim to create an inclusive, high-energy environment for all skill levels.
        </p>
      </div>
    </section>
  );
};

export default WhatIsAmbition;

