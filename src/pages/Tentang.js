import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import bgt1 from '../assets/images/hero/download.jpeg'

export default function Tentang() {
    return (
        <div className="relative w-full h-screen pt-16 overflow-hidden rounded-br-[300px] rounded-tl-[300px]">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${bgt1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 0,
                    }}
                    ></div>
        
                {/* Judul Tengah */}
                <div className="w-full h-full flex items-center justify-center z-10 relative">
                  <h1 className="text-white text-4xl font-bold text-center px-4 drop-shadow-lg">Tes</h1>
                </div>
              </div>
    )
}