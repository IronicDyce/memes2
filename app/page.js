import React from "react";

export default function Home() {
  return (
    <div className="bg-[#0f0f23] text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-2xl font-bold">VEEPEEN</div>
        <nav className="flex space-x-6">
          <a href="#features" className="hover:text-pink-400">Features</a>
          <a href="#about" className="hover:text-pink-400">About</a>
          <a href="#community" className="hover:text-pink-400">Community</a>
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">Buy $VPN</button>
        </nav>
      </header>

      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Discover $VPN's Features<br />for Easy Transactions!</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
          Experience the future of cryptocurrency with $VPN. Our gasless transactions ensure you keep more of your investment while enjoying a secure and pleasurable process.
        </p>
      </section>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-12">
        <div className="bg-[#1a1a3d] p-6 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold mb-2">Inclusive Tokenomics</h3>
          <p className="text-gray-300">Support diverse participation and drive forward financial innovation with our meme-powered economy.</p>
        </div>
        <div className="bg-[#1a1a3d] p-6 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold mb-2">Pleasure-Filled Transactions</h3>
          <p className="text-gray-300">Feel confident knowing your transactions are safe, sexy, and smooth.</p>
        </div>
        <div className="bg-[#1a1a3d] p-6 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold mb-2">Effortless Connectivity</h3>
          <p className="text-gray-300">Our advanced meme tech makes connecting to VEEPEEN a breeze — wherever you are.</p>
        </div>
      </section>

      <section id="community" className="bg-[#14142b] text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Cult</h2>
        <p className="text-gray-400 mb-6">Find us in the degenerate corners of the internet</p>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://x.com/i/communities/1921887080747303298" className="hover:text-pink-400 underline" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          <a href="#" className="hover:text-pink-400 underline">Telegram</a>
        </div>
        <div className="max-w-md mx-auto bg-[#1f1f3f] p-6 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Visit the VEEPEEN X Community</h3>
          <p className="text-gray-400 mb-4">Get unfiltered updates, alpha leaks, and community degeneracy.</p>
          <a href="https://x.com/i/communities/1921887080747303298" target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-bold hover:bg-pink-600 transition">Enter the Cult</a>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500 border-t border-gray-800">
        <p>© 2025 VEEPEEN. Not responsible for any rug pulls. Definitely not a real VPN. Just vibes.</p>
      </footer>
    </div>
  );
}