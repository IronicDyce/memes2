import React from "react";

const siteConfig = {
  siteName: "Big Titty Coin",
  ctaText: "Buy $BTC",
  headline: "Big Titty Coin",
  description: "Big Titties: The Original Attention Economy. $BTC just formalized it.",
  features: [
    {
      title: "Community-Backed, Bra-Strapped",
      text: "100% driven by the people. No VC funding, just vibes and verified degenerates. Think of it as Web3 with milk-based governance."
    },
    {
      title: "Bridging the Gap Between DeFi and D-Cups",
      text: "BTC is pioneering a new standard: Web3.0DD — decentralized degeneracy with double-D validation."
    },
    {
      title: "A Boob-Based Economy",
      text: "Just Makes Sense. Satoshi would’ve loved this."
    },
    {
      title: "Roadmap? She Has Curves, Not Directions",
      text: "Who needs a utility roadmap when we have personality, plot, and a loyal army of internet coomers? The only thing we’re pumping is vibes (and maybe your bags)."
    },
    {
      title: "Proof of Bounce",
      text: "Bigger the tiddy, bigger the bounce."
    },
    {
      title: "Boobs > Banks",
      text: "Why trust old dudes in suits when you can invest in the one thing the internet truly loves? Big Titty Coin puts the fun in fundamentally unserious finance."
    }
  ],
  communityTitle: "Join the 🍝 Cult",
  communityDescription: "Hang with the finest big tiddy lovers in Web3.",
  twitterLink: "https://x.com/i/communities/1922646036138639400",
  telegramLink: "#",
  communityCardTitle: "$BTC X Community",
  communityCardText: "Get unfiltered updates, share memes, and interact with a community of degenerates.",
  communityCardButton: "Get yer tits in here 👊",
  footerText: "© 2025 Big Titty Coin. Built different. Not financial advice — just big."
};

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1f2235] via-[#0f0f23] to-[#1f2235] text-white min-h-screen font-sans relative overflow-hidden">
      <header className="flex justify-between items-center p-6 border-b border-gray-800 z-10 relative">
        <div className="text-2xl font-bold text-pink-400">{siteConfig.siteName}</div>
        <nav className="flex space-x-6">

          <a href="https://pump.fun/coin/C7Mn5Zh3wRPpdYQ2YxT9HijofoZaUkBJ83Ghm3v262FA" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition">{siteConfig.ctaText}</a>
        </nav>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/background.jpg"
            alt="$2FA Background"
            className="w-[1500px] h-[500px] object-cover mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f23]" />
        </div>
      </section>

      <section className="text-center py-10 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-blue-300">
          {siteConfig.headline}
        </h1>
        <p className="text-lg text-pink-200 max-w-2xl mx-auto whitespace-pre-line">
          {siteConfig.description}
        </p>
        <a
          href="https://pump.fun/coin/GWebayV1PvHjE6hM7tJAu2MqLtqPddxYWtBQDcc81XCm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition"
        >
          {siteConfig.ctaText}
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1500px] mx-auto px-6 py-12 z-10 relative">
        {siteConfig.features.map((feature, index) => (
          <div key={index} className="bg-[#1a1a3d] p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-pink-400">{feature.title}</h3>
            <p className="text-blue-100">{feature.text}</p>
          </div>
        ))}
      </section>

      <section className="text-center py-12 z-10 relative">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">{siteConfig.communityTitle}</h2>
        <p className="text-pink-200 mb-6">{siteConfig.communityDescription}</p>
        <div className="flex justify-center space-x-6">
          <a href={siteConfig.twitterLink} className="hover:text-pink-400 underline" target="_blank" rel="noopener noreferrer">Join our cult →</a>
        </div>

        <div className="mt-10 max-w-md mx-auto bg-[#1a1a3d] p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-pink-400">Visit the $BTC X Community</h3>
          <p className="text-sm text-blue-100 mb-4">{siteConfig.communityCardText}</p>
          <a
            href={siteConfig.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            {siteConfig.communityCardButton}
          </a>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-blue-300 border-t border-gray-800 z-10 relative">
        <p>{siteConfig.footerText}</p>
      </footer>
    </div>
  );
}
