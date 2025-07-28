// src/components/Header.jsx
import React from 'react';
import { ReactComponent as BotIcon } from '../assets/logo.svg'; // We'll convert logo22.png to SVG

const Header = () => (
  <header className="flex items-center justify-between p-4 shadow-md bg-black bg-opacity-90 fixed w-full z-50">
    <div className="flex items-center gap-2">
      <BotIcon className="w-10 h-10" />
      <span className="text-xl font-bold text-[#F87316]">ZINCTOKEN</span>
    </div>
    <nav className="hidden md:flex space-x-6">
      {['Home', 'Blockchain', 'ZincScan', 'Wallet', 'About'].map(item => (
        <a key={item} href="#" className="text-white hover:text-[#F87316] transition">{item}</a>
      ))}
    </nav>
    <button className="bg-[#F87316] text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition">
      Buy Zinc
    </button>
  </header>
);

export default Header;
