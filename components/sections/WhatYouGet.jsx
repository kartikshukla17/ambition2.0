// ananya
// import the cardtitle component for adding the title!
// add the styleElement component!

import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";

const WhyParticipate = () => {
  const reasons = [
    "Learn from mentors and peers",
    "Network with cool folks",
    "Win exciting prizes",
    "Build your dream project",
  ];

  return (
    <section className="px-4 py-16">
      <SectionTitle title="Why Participate?" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {reasons.map((reason, idx) => (
          <Card key={idx}>
            <p className="text-center font-medium">{reason}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyParticipate;

