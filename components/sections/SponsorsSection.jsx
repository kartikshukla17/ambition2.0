import SectionTitle from "@/components/global/SectionTitle";
import { ExternalLink } from "lucide-react";

const SponsorsSection = () => {
  const SponsorCard = ({ name, logo, description, website }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-200 dark:border-gray-700 group hover:scale-105">
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-gray-50 dark:group-hover:bg-gray-600 transition-colors">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
          />
        </div>
        <div>
          <h4 className="font-bold text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-1 sm:mb-2">{name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
        </div>
        {website && (
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs sm:text-sm transition-colors min-h-[44px] px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            Visit Website
            <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
          </a>
        )}
      </div>
    </div>
  );

  const sponsors = {
    platinum: [
      {
        name: "Tech Corp",
        logo: "/sponsors/tech-corp.svg",
        tier: "platinum"
      }
    ],
    gold: [
      {
        name: "Innovation Labs",
        logo: "/sponsors/innovation-labs.svg",
        tier: "gold"
      },
      {
        name: "Future Systems",
        logo: "/sponsors/future-systems.svg",
        tier: "gold"
      }
    ],
    silver: [
      {
        name: "StartupHub",
        logo: "/sponsors/startup-hub.svg",
        tier: "silver"
      },
      {
        name: "DevTools Inc",
        logo: "/sponsors/startup-hub.svg",
        tier: "silver"
      },
      {
        name: "CloudTech",
        logo: "/sponsors/startup-hub.svg",
        tier: "silver"
      }
    ],
    partners: [
      {
        name: "Community Partner 1",
        logo: "/sponsors/community-partner.svg",
        tier: "default"
      },
      {
        name: "Community Partner 2",
        logo: "/sponsors/community-partner.svg",
        tier: "default"
      },
      {
        name: "Community Partner 3",
        logo: "/sponsors/community-partner.svg",
        tier: "default"
      },
      {
        name: "Community Partner 4",
        logo: "/sponsors/community-partner.svg",
        tier: "default"
      }
    ]
  };

  return (
    <section className="px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900 dark:via-gray-900 dark:to-purple-900 relative overflow-hidden" id="sponsors">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-300 to-red-400 rounded-2xl transform rotate-45 opacity-25"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg transform -rotate-2 border-3 border-black mb-8">
            🤝 OUR AMAZING SPONSORS 🤝
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation and the next generation of developers!
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Platinum Sponsors */}
          {sponsors.platinum.length > 0 && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 flex items-center justify-center gap-3">
                <span className="text-3xl">💎</span>
                Platinum Sponsors
                <span className="text-3xl">💎</span>
              </h3>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  {sponsors.platinum.map((sponsor, idx) => (
                    <SponsorCard key={idx} {...sponsor} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Gold Sponsors */}
          {sponsors.gold.length > 0 && (
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 px-4">
                <span className="text-xl sm:text-2xl">🥇</span>
                <span className="text-center">Gold Sponsors</span>
                <span className="text-xl sm:text-2xl">🥇</span>
              </h3>
              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto px-4">
                {sponsors.gold.map((sponsor, idx) => (
                  <SponsorCard key={idx} {...sponsor} />
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {sponsors.silver.length > 0 && (
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 px-4">
                <span className="text-xl sm:text-2xl">🥈</span>
                <span className="text-center">Silver Sponsors</span>
                <span className="text-xl sm:text-2xl">🥈</span>
              </h3>
              <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto px-4">
                {sponsors.silver.map((sponsor, idx) => (
                  <SponsorCard key={idx} {...sponsor} />
                ))}
              </div>
            </div>
          )}

          {/* Community Partners */}
          {sponsors.partners.length > 0 && (
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 px-4">
                <span className="text-xl sm:text-2xl">🤝</span>
                <span className="text-center">Community Partners</span>
                <span className="text-xl sm:text-2xl">🤝</span>
              </h3>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-4xl mx-auto px-4">
                {sponsors.partners.map((sponsor, idx) => (
                  <SponsorCard key={idx} {...sponsor} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800 mx-4 mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
            Interested in Sponsoring?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            Join our amazing sponsors and help us create an unforgettable hackathon experience. 
            Partner with us to reach talented developers and innovators.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] flex items-center justify-center mx-auto text-sm sm:text-base">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;