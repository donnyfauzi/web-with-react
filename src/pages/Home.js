import { useEffect, useState, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import video from '../assets/videos/video1.mp4';
import bgImage1 from '../assets/images/hero/bg1.jpeg';
import bgImage2 from '../assets/images/hero/bg2.png';
import bgImage4 from '../assets/images/hero/bg-batik2.png';
import bgImage5 from '../assets/images/hero/bg-map.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const slides = [
  { type: 'video', src: video },
  { type: 'image', src: bgImage1 },
  { type: 'image', src: bgImage2 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let timer;

    if (slides[currentSlide].type === 'image') {
      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleVideoEnd = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative">
      {/* Hero Gambar/Video */}
      <div className="relative w-full h-screen pt-16 overflow-hidden rounded-br-[300px] rounded-tl-[300px]">
        {slides[currentSlide].type === 'video' ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            src={slides[currentSlide].src}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
          />
        )}

        {/* Judul Tengah */}
        {/* <div className="w-full h-full flex items-center justify-center z-10 relative">
          <h1 className="text-white text-4xl font-bold text-center px-4 drop-shadow-lg"></h1>
        </div> */}
      </div>

      {/* Hero Konten 1 */}
      <div className="w-full relative py-16 px-10 rounded-xl text-gray-800 overflow-hidden min-h-[500px]">
        {/* Background kanan */}
        <div
          className="absolute top-0 right-0 h-full w-1/3 rounded-xl"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) 85%, rgba(255,255,255,1)), 
                            linear-gradient(to bottom, rgba(255,255,255,0) 85%, rgba(252,252,252,2)), 
                            url(${bgImage4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-50/70 z-0"></div>

        {/* Konten berdasarkan currentSlide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {currentSlide === 0 && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">APA ITU CODING ERLAS?</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 text-justify font-bold text-gray-700">
                    <p className="mb-4">
                      Erlass Prokreatif Indonesia mengembangkan pembelajaran digital berbasis pemrograman, yaitu Coding Erlass. Coding Erlass merupakan pembelajaran pemrograman yang didukung oleh video pembelajaran.
                    </p>
                    <p className="mb-4">
                      Coding Erlass menyediakan berbagai video pembelajaran mengenai bahasa pemrograman Scratch. Mulai dari pengenalan fitur Scratch, memahami pergerakan Scratch, membuat animasi menarik, membuat game, hingga pembelajaran matematika sederhana.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 text-justify font-bold text-gray-700">
                    <p className="mb-4">
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
                    </p>
                    <p className="mb-4">
                      Integer feugiat, arcu a egestas laoreet, turpis libero aliquet tortor, nec sollicitudin enim justo ac sem.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button className="px-6 py-3 rounded-full border border-black text-black bg-transparent hover:bg-slate-700 hover:text-white transition duration-300">
                    Pelajari Selengkapnya
                  </button>
                </div>
              </>
            )}

            {currentSlide === 1 && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">KENAPA HARUS CODING DI ERLAS?</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 text-justify font-bold text-gray-700">
                    Karena Erlass menghadirkan kurikulum menyenangkan dan terstruktur untuk anak-anak Indonesia.
                  </div>
                  <div className="w-full md:w-1/2 text-justify font-bold text-gray-700">
                    Video pembelajaran interaktif dan konten lokal menjadikan pengalaman belajar menyenangkan dan relevan.
                  </div>
                </div>
              </>
            )}

            {/* Default/fallback (opsional jika currentSlide lebih dari 1) */}
            {currentSlide === 2 && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Slide Tambahan</h2>
                <div className="text-center font-semibold text-gray-600">
                  Konten tambahan bisa ditambahkan di sini jika slide ke-3 aktif.
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Konten 2 */}
        <div className="w-full relative py-16 px-10 text-gray-800 overflow-hidden min-h-[500px]">
          {/* Background kanan */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) 85%, rgba(255,255,255,1)), 
                              linear-gradient(to bottom, rgba(255,255,255,0) 85%, rgba(252,252,252,2)), 
                              url(${bgImage5})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-50/70 z-0"></div>

          {/* Konten berdasarkan currentSlide */}
          <AnimatePresence mode="wait">
            <motion.div
              
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">APA ITU CODING ERLAS?</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 text-justify font-bold text-gray-700">
                    <p className="mb-4">
                      Erlass Prokreatif Indonesia mengembangkan pembelajaran digital berbasis pemrograman, yaitu Coding Erlass. Coding Erlass merupakan pembelajaran pemrograman yang didukung oleh video pembelajaran.
                    </p>
                    <p className="mb-4">
                      Coding Erlass menyediakan berbagai video pembelajaran mengenai bahasa pemrograman Scratch. Mulai dari pengenalan fitur Scratch, memahami pergerakan Scratch, membuat animasi menarik, membuat game, hingga pembelajaran matematika sederhana.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 text-justify font-bold text-gray-700">
                    <p className="mb-4">
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
                    </p>
                    <p className="mb-4">
                      Integer feugiat, arcu a egestas laoreet, turpis libero aliquet tortor, nec sollicitudin enim justo ac sem.
                    </p>
                  </div>
                </div>
              </>
            </motion.div>
          </AnimatePresence>
        </div>

      {/* Contact Us Floating Button */}
      <a
        href="#kontak"
        className="fixed bottom-0 right-2 bg-blue-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-all z-50 flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faComment} />
        Contact Us
      </a>
    </div>
  );
}
