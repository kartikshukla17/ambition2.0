// anu
// just add the content as in the ui for now! 
//import card title component to use in card!
//add style component!

import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";

const Perks = () => {
  const perks = ["Swag Kits", "Goodies & Stickers", "Food & Fun", "Internship Opportunities"];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <SectionTitle title="Perks & Rewards" subtitle="It’s not just about the code" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {perks.map((perk, idx) => (
          <Card key={idx}>
            <p className="text-center font-medium">{perk}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Perks;

