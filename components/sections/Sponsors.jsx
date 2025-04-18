// harshita
//import sponsor card for displaying logo and all of sponsor and make changes in card component for the outer card 


import SectionTitle from "@/components/global/SectionTitle";
import StepItem from "@/components/elements/Countdown";

const HowToParticipate = () => {
  const steps = [
    { number: 1, title: "Form a Team", description: "You can go solo or form a group of up to 4." },
    { number: 2, title: "Choose a Track", description: "Pick the category that excites you most." },
    { number: 3, title: "Register Online", description: "Fill the form before the deadline." },
    { number: 4, title: "Build Something!", description: "Solve real problems and present your idea." },
  ];

  return (
    <section className="px-4 py-16" id="how">
      <SectionTitle title="How to Participate?" subtitle="Easy as pie 🥧" />
      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step) => (
          <StepItem key={step.number} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowToParticipate;

