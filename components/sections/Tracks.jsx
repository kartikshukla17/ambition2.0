import SectionTitle from "@/components/global/SectionTitle";
import Card from "@/components/global/Card";

const trackDetails = [
  {
    name: "CYBER SECURITY",
    img: "/tracks/cyber.svg",
    desc: (
      <div className="text-black">
        <strong>Defend. Detect. Deter.</strong>
        <br />
        Build tools and systems that protect data, identify threats, and ensure digital safety. From secure authentication to real-time threat detection, this track is for the guardians of cyberspace.
      </div>
    )
  },
  {
    name: "AI / ML",
    img: "/tracks/ai.svg",
    desc: (
      <div className="text-black">
        <strong>Think Smart. Build Smarter.</strong>
        <br />
        Use the power of artificial intelligence and machine learning to solve real-world problems. Whether it's predictive analytics, intelligent automation, or NLP — make your code think.
      </div>
    )
  },
  {
    name: "BLOCKCHAIN",
    img: "/tracks/blockchain.svg",
    desc: (
      <div className="text-black">
        <strong>Trust the Chain. Code the Future.</strong>
        <br />
        Design decentralized apps, smart contracts, and transparent systems. If you're ready to disrupt industries with transparency and security, this is your zone.
      </div>
    )
  },
  {
    name: "GAME DEV.",
    img: "/tracks/game.svg",
    desc: (
      <div className="text-black">
        <strong>Create Worlds. Inspire Play.</strong>
        <br />
        Bring imagination to life with interactive and immersive game experiences. From 2D pixel art to 3D virtual environments, this track is all about storytelling through gameplay.
      </div>
    )
  },
];

const Tracks = () => {
  return (
    <section className="px-4 py-16 bg-white" id="tracks">
      <SectionTitle highlight />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto px-4">
        {trackDetails.map((track, idx) => (
          <Card
            key={idx}
            className="flex overflow-hidden p-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="w-40 h-full shrink-0">
              <img
                src={track.img}
                alt={track.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-orange-500">
                {track.name}
              </h2>
              <div className="text-black text-base leading-snug transition-colors duration-300 group-hover:text-gray-700">
                {track.desc}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
