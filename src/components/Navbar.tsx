"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Desktop Menu (No Changes) */}
        <div className="hidden mt-6 md:flex justify-center w-full space-x-[110px]">
          <Link href="/" className="font-sec text-gray-600 hover:scale-110 transition-all px-4 py-[1px] rounded-md">
            Projects
          </Link>
          <Link href="/about" className="font-sec text-gray-600 hover:scale-110 transition-all px-4 py-[1px] rounded-md">
            Technologies
          </Link>
          <Link href="/contact" className="font-sec text-gray-600 hover:scale-110 transition-all px-4 py-[1px] rounded-md">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden w-full px-4 flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden border z-50 mt-8 rounded-md">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(20px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden text-center absolute top-2 w-full flex flex-col font-bold p-4 z-10"
          >
            <Link href="/" className="text-white opacity-85 font-first underline">
              Projects
            </Link>
            <Link href="/about" className="text-white opacity-85 font-first underline">
              Technologies
            </Link>
            <Link href="/contact" className="text-white opacity-85 font-first underline">
              About
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
