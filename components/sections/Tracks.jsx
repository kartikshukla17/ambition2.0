// sana
//will need sectiontitle component and cards component 
// can use the section title component for the card title also!
// add the styleElemnt component

import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";
import CardTitle from "@/components/global/CardTitle"; 

const Tracks = () => {
  const tracks = ["Web3", "AI/ML", "Fintech", "Social Good"];

  return (
    <section className="px-4 py-16 bg-gray-50" id="tracks">
      <SectionTitle title="Tracks" subtitle="Choose your theme and go wild" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {tracks.map((track, idx) => (
          <Card key={idx}>
            <CardTitle title="GAME DEV." />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Tracks;

