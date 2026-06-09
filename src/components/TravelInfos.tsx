function TravelInfos() {
  const infoCards = [
    { title: "TIME", detail: "Gabon is GMT +1." },
    { title: "LANGUAGE", detail: "French (official)" },
    { title: "CURRENCY", detail: "Central African Franc (XAF)" },
    { title: "POPULATION", detail: "2.3+ Million" },
    { title: "TELECOMMS", detail: "Airtel and Gabon Télécom" },
  ];

  const DecorativePattern = ({ side }: { side: "left" | "right" }) => (
    <div
      className={`absolute ${side}-0 top-0 h-full w-12 pointer-events-none z-0 overflow-hidden opacity-10 ${
        side === "left" ? "ml-4" : "mr-4"
      }`}
    >
      <svg
        width="48"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "100%" }}
      >
        <defs>
          <pattern
            id={`diamond-${side}`}
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            {/* Outer diamond border */}
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              fill="none"
              stroke="#000"
              strokeWidth="1.5"
              transform="rotate(45 12 12)"
            />
            {/* Inner diamond */}
            <rect
              x="6"
              y="6"
              width="12"
              height="12"
              fill="none"
              stroke="#000"
              strokeWidth="1"
              transform="rotate(45 12 12)"
            />
            {/* Center dot */}
            <circle cx="12" cy="12" r="1.5" fill="#000" />
          </pattern>
        </defs>
        <rect width="48" height="100%" fill={`url(#diamond-${side})`} />
      </svg>
    </div>
  );

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <DecorativePattern side="left" />
      <DecorativePattern side="right" />

      <h1 className="text-5xl font-black text-slate-900 mb-12">
        Informations touristiques
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="bg-[#4664B2] text-white rounded-md p-6 flex flex-col items-center justify-center text-center gap-4 min-h-[160px]"
          >
            <h2 className="text-lg font-bold tracking-widest">{card.title}</h2>
            <p className="text-sm font-semibold">{card.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#4664B2] text-white rounded-md p-10 text-center">
        <h2 className="text-lg font-bold tracking-widest mb-3">MORE INFO</h2>
        <p className="text-sm font-semibold tracking-wider">
          GABON AT A GLANCE, VISIT{" "}
          <a
            href="https://www.tourisme-gabon.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:opacity-80"
          >
            WWW.TOURISME-GABON.COM
          </a>
        </p>
      </div>
    </section>
  );
}

export default TravelInfos;
