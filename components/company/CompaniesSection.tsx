export const companies = [
  {
    id: 1,
    name: "Stacks Blockchain",
    logo: "/company/Stacks_Logo.png",
    type: "blockchain",
    darkMode: true, 
  },
  
  {
    id: 2,
    name: "Hedera Blockchain",
    logo: "/company/hedera.png",
    type: "blockchain", 
    darkMode: true, 
  },
  {
    id: 3,
    name: "Metamask",
    logo: "/company/metamask.jpeg",
    type: "blockchain",
    darkMode: true,
  },
  {
    id: 4,
    name: "Stellar Blockchain",
    logo: "/company/stellar.png",
    type: "blockchain",
    darkMode: true, 
  },

  {
    id: 5,
    name: "Near Protocol",
    logo: "/company/near.png",
    type: "blockchain",
    darkMode: true,
  },
 
  {
    id: 6,
    name: "Hitoai",
    logo: "/company/hitoai.jpeg",
    type: "developer",
    darkMode: true,
  },

  {
    id: 7,
    name: "Biasadra",
    logo: "/company/biasadra.jpeg",
    type: "developer",
    darkMode: true,
  },
  
  {
    id: 8,
    name: "ALX_Africa",
    logo: "/company/alx.jpeg",
    type: "developer",
    darkMode: true,
  },
  {
    id: 9,
    name: "Docker",
    logo: "/company/docker.svg",
    type: "devops",
    darkMode: true,
  },
];

// Elegant Companies Section Component
const CompaniesSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50/50 via-white/80 to-gray-50/30 dark:from-slate-900/20 dark:via-slate-800/30 dark:to-slate-900/10 rounded-xl p-4 lg:p-6 border border-border/20 shadow-sm">
      <div className="text-center mb-5">
        <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2 tracking-tight">
          Trusted by Industry Leaders
        </h3>
        <p className="text-muted-foreground text-xs lg:text-sm max-w-md mx-auto leading-relaxed">
          Collaborating with innovative companies worldwide to deliver exceptional digital experiences
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
        {companies.slice(0, 10).map((company) => (
          <div 
            key={company.id}
            className="group relative flex items-center justify-center p-3 lg:p-4 rounded-lg bg-white/70 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/40 hover:border-slate-300/80 dark:hover:border-slate-600/60 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
          >
            {/* Professional Logo Container - Same as carousel */}
            <div className="min-w-12 h-12 lg:h-16 flex items-center justify-center w-full">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 opacity-75 group-hover:opacity-100 drop-shadow-sm"
              />
            </div>
            
            {/* Company Name Tooltip */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                {company.name}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                  <div className="border-4 border-transparent border-b-slate-900 dark:border-b-slate-100"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Show More Partners Button */}
        {companies.length > 10 && (
          <div className="group relative flex items-center justify-center p-3 lg:p-4 rounded-lg bg-gradient-to-r from-[#FE705A]/10 to-purple/10 hover:from-[#FE705A]/20 hover:to-purple/20 border border-[#FE705A]/30 hover:border-[#FE705A]/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="min-w-12 h-12 lg:h-16 flex items-center justify-center w-full">
              <span className="text-sm lg:text-base font-semibold text-[#FE705A] group-hover:text-[#fe5635]">
                +{companies.length - 10} More
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Compact indicator */}
      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground font-medium">
          + Many more amazing partnerships
        </p>
      </div>
    </div>
  );
};

// Alternative: Compact Marquee Style
const CompaniesMarquee = () => {
  return (
    <div className="bg-white/60 dark:bg-slate-900/40 rounded-xl p-4 lg:p-6 border border-border/20 backdrop-blur-sm">
      <div className="text-center mb-4">
        <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">
          Trusted Partnership Network
        </h3>
        <p className="text-muted-foreground text-xs lg:text-sm">
          Working with industry leaders worldwide
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center gap-6 lg:gap-8 py-2">
          {companies.map((company) => (
            <div 
              key={company.id}
              className="flex-shrink-0 group relative"
            >
              <div className="w-20 h-10 lg:w-24 lg:h-12 flex items-center justify-center p-2 lg:p-3 rounded-lg bg-slate-50/80 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-md">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-90 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Export Component
const ElegantCompaniesSection = () => {
  return <CompaniesSection />;
};

export default ElegantCompaniesSection;