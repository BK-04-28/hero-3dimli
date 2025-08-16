"use client";

import { motion } from "framer-motion";
import { Search, Upload, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
      {/* Left: Logo + Beta */}
      <div className="flex items-center gap-2 ml-6 mt-1">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={20}
          className="object-contain"
          style={{ width: "180px", height: "40px", objectFit: "contain" }}
          priority
        />

        {/* Divider */}
        <div className="h-4 w-px bg-gray-300" />

        {/* Beta Text */}
        <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
          <p>BETA</p>
          <p>1.0.1</p>
          <div className="h-9 w-px bg-gray-300 ml-3" />
        </div>
      </div>

      {/* Center: Navigation + Search */}
      <div className="hidden md:flex items-center gap-4 text-sm md:text-md font-medium text-gray-700 ml-0 md:ml-20">
        <a
          href="#home"
          className="hover:text-gray-800 transition-colors text-gray-600"
        >
          Home
        </a>
        <a
          href="#discover"
          className="hover:text-gray-800 transition-colors text-gray-600"
        >
          Discover
        </a>
        <a
          href="#features"
          className="hover:text-gray-800 transition-colors text-gray-600"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="hover:text-gray-800 transition-colors text-gray-600"
        >
          Pricing
        </a>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-64 px-2 py-2.5 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="text-sm w-full placeholder-gray-400 text-gray-600 outline-none bg-transparent"
          />
          <div className="h-5 w-px bg-gray-300 ml-3" />
          <Search className="h-4 w-4 text-gray-400 ml-2 mr-2" />
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-2 mr-8">
        {/* Discord Button */}
        <button className="flex items-center gap-2 px-8 py-3  text-sm text-white bg-[#5865F2] rounded-xl hover:opacity-90 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 127.14 96.36"
            className="w-6 h-6 fill-white"
          >
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83,97.68,97.68,0,0,0-29.1,0A72.37,72.37,0,0,0,45.65,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21A105.73,105.73,0,0,0,31.16,96.36,77.7,77.7,0,0,0,39.6,83.93a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.35,2.66-2.05a69.57,69.57,0,0,0,61.24,0c.87.71,1.76,1.39,2.66,2.05a68.68,68.68,0,0,1-10.87,5.19,77.28,77.28,0,0,0,8.45,12.41A105.73,105.73,0,0,0,126.6,80.21C129.24,52.84,121.53,28.9,107.7,8.07ZM42.45,65.69c-5.07,0-9.23-4.66-9.23-10.39s4.08-10.39,9.23-10.39S51.7,49.57,51.7,55.3,47.59,65.69,42.45,65.69Zm42.24,0c-5.07,0-9.23-4.66-9.23-10.39s4.08-10.39,9.23-10.39S93.94,49.57,93.94,55.3,89.76,65.69,84.69,65.69Z" />
          </svg>
          <span className="text-base font-semibold">Discord</span>
        </button>

        {/* Upload Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="flex items-center gap-2 px-6 py-3 text-sm text-white shadow-sm rounded-xl font-bold"
          style={{
            background: "linear-gradient(90deg, #0a1c4e 0%, #1a3a8d 100%)",
          }}
        >
          <Upload className="h-5 w-5" />
          Upload
        </motion.a>

        {/* User Icon */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center"
        >
          <User className="h-5 w-5 text-gray-600" />
        </motion.button>
      </div>
    </nav>
  );
}
