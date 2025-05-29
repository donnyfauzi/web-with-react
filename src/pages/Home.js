import { useEffect, useState, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import video from '../assets/videos/video1.mp4';

import bgImage1 from '../assets/images/hero/bg1.jpeg';
import bgImage2 from '../assets/images/hero/bg2.png';
import bgImage4 from '../assets/images/hero/bg-batik2.png';
import bgImage5 from '../assets/images/hero/foto-content2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const slides = [
  { type: 'video', src: video },
  { type: 'image', src: bgImage1 },
  { type: 'image', src: bgImage2 },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Slide Fakta menarik
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % 3); //jumlah slide
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) %3)
  }

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
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40 z-0"></div>

        {/* Top Gradient */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/90 to-transparent z-10" />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Overlay */}
        <div className="absolute inset-0 z-0"></div>

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
                  <div className="w-full md:w-1/2 text-justify text-black">
                    <p className="mb-4">
                      Erlass Prokreatif Indonesia mengembangkan pembelajaran digital berbasis pemrograman, yaitu Coding Erlass. Coding Erlass merupakan pembelajaran pemrograman yang didukung oleh video pembelajaran.
                    </p>
                    <p className="mb-4">
                      Coding Erlass menyediakan berbagai video pembelajaran mengenai bahasa pemrograman Scratch. Mulai dari pengenalan fitur Scratch, memahami pergerakan Scratch, membuat animasi menarik, membuat game, hingga pembelajaran matematika sederhana.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 text-justify text-black">
                    <p className="mb-4">
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
                    </p>
                    <p className="mb-4">
                      Integer feugiat, arcu a egestas laoreet, turpis libero aliquet tortor, nec sollicitudin enim justo ac sem.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button className="px-6 py-3 rounded-full border border-black text-black bg-transparent hover:bg-slate-700 z-0 hover:text-white transition duration-300">
                    Pelajari Selengkapnya
                  </button>
                </div>
              </>
            )}

            {currentSlide === 1 && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">KENAPA HARUS CODING DI ERLAS?</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 text-justify  text-black">
                    Karena Erlass menghadirkan kurikulum menyenangkan dan terstruktur untuk anak-anak Indonesia.
                  </div>
                  <div className="w-full md:w-1/2 text-justify  text-black">
                    Video pembelajaran interaktif dan konten lokal menjadikan pengalaman belajar menyenangkan dan relevan.
                  </div>
                </div>
              </>
            )}

            {/* Default/fallback (opsional jika currentSlide lebih dari 1) */}
            {currentSlide === 2 && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Slide Tambahan</h2>
                <div className="text-center  text-black">
                  Konten tambahan bisa ditambahkan di sini jika slide ke-3 aktif.
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Konten 2 */}
      <div className="w-full relative py-16 px-10 text-gray-800 overflow-hidden min-h-[600px]">
        {/* Background kanan */}
        <div className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20 z-0"></div>
        {/* Top Gradient */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
      

        {/* Konten berdasarkan currentSlide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: 'linear' }}
          className="relative z-10"
        >
          <>
          <h2 className="text-2xl font-bold mt-6 mb-6 text-center text-gray-700">Jembatan udara Indonesia, pintu gerbang menuju dunia.
            InJourney Airports menghadirkan layanan standar dunia di<span className='text-4xl font-bold text-blue-600'> 20</span><span className='text-lg text-blue-600'> wilayah</span>
          </h2>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">InJourney Airports mengukuhkan posisinya sebagai perusahaan bandara
            terbesar ke<span className='text-4xl font-bold text-blue-600'> 20</span><span className='text-lg text-blue-600'> di indonesia</span>
          </h2>
          </>
        </motion.div>
      </div>

      {/* Hero Konten 3 */}
      <div className="bg-teal-900 text-white py-12 px-6 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-500">Fakta Menarik</h2>

        <div className="relative max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Kiri */}
          <button onClick={prevSlide} className="text-white text-2xl p-2 rounded-full hover:bg-white/20">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Konten Fakta (langsung di JSX) */}
          <div className="flex-1 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4">
                
                {/* Konten per index */}
                {currentIndex === 0 && (
                  <>
                    <div className="bg-transparent text-teal-500 font-bold flex items-center justify-center text-5xl">1</div>
                    <p className="text-lg text-justify">
                      Bandara Soekarno-Hatta termasuk ke dalam 30 besar bandara terbaik dunia versi Skytrax indonesia hebat dan maju banget.
                    </p>
                  </>
                )}
                {currentIndex === 1 && (
                  <>
                    <div className="bg-transparent text-teal-500 font-bold flex items-center justify-center text-5xl">2</div>
                    <p className="text-lg text-justify">
                      Indonesia memiliki lebih dari 17.000 pulau dan merupakan negara kepulauan terbesar di dunia yang semrawut seperti india.
                    </p>
                  </>
                )}
                {currentIndex === 2 && (
                  <>
                    <div className="bg-transparent text-teal-500 font-bold flex items-center justify-center text-5xl">3</div>
                    <p className="text-lg text-justify">
                      Candi Borobudur adalah candi Buddha terbesar di dunia dan warisan budaya UNESCO copi shop indonesia yang sangat maju.
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Kanan */}
          <button onClick={nextSlide} className="text-white text-2xl p-2 rounded-full hover:bg-white/20">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Indikator */}
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2].map((idx) => ( <div key={idx} className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white/40'}`}/>))}
        </div>
      </div>
      
      {/* Contact Us Floating Button */}
      <a href="#kontak" className="fixed bottom-0 right-2 bg-blue-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-all z-50 flex items-center gap-2">
        <FontAwesomeIcon icon={faComment} />
        Contact Us
      </a>
    </div>
  );
}
