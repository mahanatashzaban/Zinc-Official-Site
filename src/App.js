import React, { useRef } from 'react';
import Particles from 'react-tsparticles';
import botImage from './assets/bot.png';
import blockchain from './assets/blockchain.png';
import referral from './assets/referral.png';
export default function App() {
  const androidRef = useRef(null);

  // Scroll smoothly to app boxes section
  const scrollToApps = () => {
    if (androidRef.current) {
      androidRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-black text-white overflow-x-hidden">

      {/* Particle Background */}
      <Particles
        className="fixed top-0 left-0 w-full h-full -z-10"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: '#F87316' },
            shape: { type: 'star' },
            opacity: { value: 0.6, random: false },
            size: { value: 2, random: true },
            move: { enable: true, speed: 0.6, direction: 'none', outMode: 'bounce' },
            links: { enable: true, distance: 120, color: '#F87316', opacity: 0.3, width: 1 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Title & Button */}
      <header className="py-10 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F87316] mb-6">
          Blockchain,Coin and Trader Bot of ZINC
        </h1>
        <button
          onClick={scrollToApps}
          className="bg-[#F87316] text-black font-bold px-8 py-3 rounded-full hover:bg-[#d16212] transition"
        >
          Buy / Sell Zinc
        </button>
      </header>

      {/* Scattered Info Cards */}
      <main className="max-w-7xl mx-auto px-6 md:px-0 flex flex-wrap justify-center gap-10 my-16">

<InfoCard
  title="ZRC-20 Network"
  text="Zinc is built on the innovative ZRC-20 network, providing a novel blockchain solution for traders."
  imageUrl={blockchain}
/>

        <InfoCard
          title="Zinc Coin"
          text="Zinc Coin is a fast, fee-less cryptocurrency designed to empower peer-to-peer transactions with ease."
        />

<InfoCard
  title="Zinc Trader Bot"
  text="Our smart Zinc Trader Bot helps traders overcome challenges and win more trades effortlessly."
  imageUrl={referral}
/>

        <InfoCard
          title="Stake Zinc and Earn More"
          text="Stake your Zinc Coins and receive more Zinc as rewards in our decentralized ecosystem."
        />

<InfoCard
  title="Referral System"
  text="Refer your friends and earn a steady income with our transparent referral program."
  imageUrl={botImage}
/>

        <InfoCard
          title="We Solve Traders' Challenges"
          text="Zinc’s ecosystem is designed to help traders win consistently in the fast-moving crypto market."
        />

      </main>

      {/* Android and iPhone Boxes */}
      <section
        ref={androidRef}
        id="apps"
        className="max-w-5xl mx-auto my-20 px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <AppBox
          title="Android App"
          description="Download the Zinc Android wallet and trader bot to trade seamlessly on the go."
          platform="Google Play"
          link="https://play.google.com/store/apps/details?id=your.android.app"
          icon="android"
        />

        <AppBox
          title="iPhone App"
          description="Get the Zinc iPhone app for secure wallet and smart trading bot in your pocket."
          platform="App Store"
          link="https://apps.apple.com/app/your-ios-app"
          icon="apple"
        />
      </section>

      {/* Explorer note */}
      <div className="text-center mb-12 text-gray-400">
        We have our own explorer: <a href="https://zincscan.com" className="underline hover:text-[#F87316]">ZincScan</a>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-300 py-8">
        <nav className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 px-6 md:px-0 text-sm">
          {[
            { label: 'Contact', href: '#contact' },
            { label: 'About Us', href: '#about' },
            { label: 'About ZRC-20 Network', href: '#zrc20' },
            { label: 'Zinc Coin', href: '#zinccoin' },
            { label: 'Zinc Trader Bot', href: '#traderbot' },
            { label: 'How to Buy', href: '#howtobuy' },
            { label: 'Stake of Zinc', href: '#stake' },
            { label: 'Fees of Zinc', href: '#fees' },
            { label: 'Referral System', href: '#referral' },
            { label: 'Zinc in Peer-to-Peer', href: '#p2p' },
            { label: 'ZincScan', href: 'https://zincscan.com' },
            { label: 'How Zinc Works?', href: '#howzincworks' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#F87316] transition cursor-pointer"
              onClick={e => {
                if (href.startsWith('#')) {
                  e.preventDefault();
                  const el = document.querySelector(href);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
}

function InfoCard({ title, text, imageUrl }) {
  return (
    <div
      className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6 max-w-sm flex flex-col md:flex-row items-center md:items-start gap-4
                 hover:shadow-[#F87316]/60 transition cursor-default"
      style={{ minWidth: '280px' }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-28 h-28 rounded-xl object-cover flex-shrink-0"
          draggable={false}
        />
      )}

      <div className="text-left">
        <h3 className="text-xl font-semibold text-[#F87316] mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function AppBox({ title, description, platform, link, icon }) {
  const icons = {
    android: (
      <svg
        className="w-12 h-12 text-[#A4C639]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.5 13.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM16.5 13.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
        <path d="M19.31 8.87a8.003 8.003 0 0 0-14.61 0L3 7.44a.5.5 0 1 0-.87.49L5.46 13H3a.5.5 0 0 0 0 1h6.13a.5.5 0 0 0 0-1H6.54l1.58-2.73 2.65 4.58a.5.5 0 0 0 .87-.5L9.4 12.7l1.62-2.8 3.07 5.31a.5.5 0 1 0 .86-.5l-1.53-2.65 3.47-6.02a.5.5 0 1 0-.87-.49l-1.61 2.02z" />
      </svg>
    ),
    apple: (
      <svg
        className="w-12 h-12 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19.66 15.17c-.02-3.3 2.69-4.87 2.81-4.95-1.54-2.24-3.93-2.55-4.78-2.59-2.03-.2-3.96 1.2-4.99 1.2-1.03 0-2.62-1.17-4.3-1.14-2.2.03-4.23 1.28-5.37 3.24-2.3 3.97-.59 9.81 1.65 13.02 1.09 1.57 2.38 3.33 4.08 3.27 1.65-.06 2.27-1.05 4.27-1.05 2 0 2.57 1.05 4.32 1.01 1.81-.04 2.95-1.6 4.02-3.18 1.26-1.93 1.78-3.81 1.8-3.9-.04-.02-3.43-1.31-3.46-5.2zM15.66 5.36c.87-1.05 1.47-2.5 1.31-3.96-1.27.05-2.8.86-3.7 1.91-.81.92-1.52 2.4-1.33 3.81 1.41.11 2.86-.72 3.72-1.76z" />
      </svg>
    ),
  };

  return (
    <div
      className="bg-[#222] rounded-lg p-8 flex flex-col items-center text-center shadow-lg hover:shadow-[#F87316]/60 transition cursor-pointer"
      onClick={() => window.open(link, '_blank')}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter') window.open(link, '_blank'); }}
    >
      {icons[icon]}
      <h3 className="mt-6 text-xl font-semibold text-[#F87316]">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
      <span className="mt-4 inline-block bg-[#F87316] text-black font-semibold px-4 py-2 rounded-full">
        {platform}
      </span>
    </div>
  );
}
