"use client";

import { FaHeart, FaSearch, FaDownload, FaThLarge, FaTag } from "react-icons/fa";
import HoverIcon from "../components/HoverIcon";
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #fde2e4, transparent 40%), radial-gradient(circle at 80% 30%, #e0f7fa, transparent 40%), radial-gradient(circle at 50% 80%, #f3e8ff, transparent 40%)",
      }}
    >
      {/* Heading with Typewriter */}
     <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-snug text-center">
  <Typewriter
    options={{
      delay: 50,
      deleteSpeed: 9999999, // ensures it doesn’t auto-delete
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString("Buy Once, Download")
        .pauseFor(700)
        .typeString("<br/>Anytime, Keep Forever")
        .start();
    }}
  />
</h2>


      {/* Subheading */}
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Your one-stop digital platform for 3D models and digital creations.
        <br />
        Join our community of creators and collectors today.
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 sm:px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm sm:text-base">
  Explore all products
</button>


      {/* Floating Icons */}
      <HoverIcon
        icon={<FaHeart className="text-pink-500 text-xl" />}
        title="Favorites"
        description="Save models you love for quick access later."
        className="bottom-4 left-4 sm:left-12"
      />

      <HoverIcon
        icon={<FaDownload className="text-blue-500 text-xl" />}
        title="Downloads"
        description="Access your purchased models anytime."
        className="bottom-4 left-4 sm:left-12"
      />

      <HoverIcon
        icon={<FaSearch className="text-blue-500 text-xl" />}
        title="Search"
        description="Find the perfect model with smart search."
        className="bottom-4 left-4 sm:left-12"
      />

      <HoverIcon
        icon={<FaThLarge className="text-orange-500 text-xl" />}
        title="Categories"
        description="Browse assets by category."
        className="bottom-4 left-4 sm:left-12"
      />

      <HoverIcon
        icon={<FaTag className="text-yellow-500 text-xl" />}
        title="Pricing"
        description="Affordable pricing for high-quality assets."
       className="bottom-4 left-4 sm:left-12"
      />
    </section>
  );
}
