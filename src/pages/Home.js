import { useEffect, useState, useRef } from 'react';

import video from '../assets/videos/video1.mp4';
import bgImage1 from '../assets/images/hero/bg1.jpg';
import bgImage2 from '../assets/images/hero/bg2.jpeg';
import bgImage3 from '../assets/images/hero/bg-batik1.jpeg';
import bgImage4 from '../assets/images/hero/bg-batik2.jpeg';
import bgImage5 from '../assets/images/hero/bg3.jpg';
import bgImage6 from '../assets/images/hero/bg4.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const slides = [
  { type: 'video', src: video },
  { type: 'image', src: bgImage1 },
  { type: 'image', src: bgImage2 },
]


export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let timer;

    if (slides[currentSlide].type === 'image') {
      // Untuk slide gambar, pindah otomatis tiap 5 detik
      timer = setTimeout(() => {
        setCurrentSlide((prev) =>
          prev === slides.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Handler jika video selesai
  const handleVideoEnd = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative">
      {/* Layer background di belakang hero (bisa ubah warnanya sesuai tema) */}
      <div className="absolute top-0 left-0 w-full h-[100vh] bg-slate-100 z-[-1]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 85%, rgba(255,255,255,1)), url(${bgImage3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
        

      {/* Hero section */}
      <div className="relative w-full h-screen pt-16 overflow-hidden rounded-br-[300px] rounded-tl-[300px] shadow-xl">
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
            className="w-full h-full bg-cover bg-center absolute top-0 left-0 z-0"
            style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
          />
        )}

        {/* Judul tengah */}
        <div className="w-full h-full flex items-center justify-center z-10 relative">
          <h1 className="text-white text-4xl font-bold text-center px-4 drop-shadow-lg">
            
          </h1>
        </div>
      </div>

      {/* Hero 2 */}
      <div id='hero2' className="w-full relative py-16 px-10 rounded-xl shadow-lg text-gray-800"
        style={{
          backgroundImage:`linear-gradient(to top, rgba(255,255,255,0) 85%, rgba(255,255,255,1)), linear-gradient(to bottom, rgba(255,255,255,0) 85%, rgba(252,252,252,2)), url(${bgImage4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
        {/* Overlay agar teks tetap mudah dibaca */}
        <div className="absolute inset-0 bg-slate-50/30 rounded-xl backdrop-blur-sm"></div>

        {/* Konten di atas overlay */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold 800 mb-6 text-center text-blue-500">Tentang Kami</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Kolom kiri */}
            <div className="w-full md:w-1/2 text-justify font-bold 400 text-gray-700">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
              <p className="mb-4">
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                Mauris massa. Vestibulum lacinia arcu eget nulla. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
            </div>

            {/* Kolom kanan */}
            <div className="w-full md:w-1/2 text-justify font-bold 400 text-gray-700">
              <p className="mb-4">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. lirem ipsum Lorem InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
              <p className="mb-4">
                Integer feugiat, arcu a egestas laoreet, turpis libero aliquet tortor, nec sollicitudin enim justo ac sem. 
                Quisque euismod, urna eget tincidunt ultrices, nisl nunc. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero 3 */}
      <div className="w-full relative py-32 px-10 shadow-lg text-gray-800"
        style={{
          backgroundImage:` linear-gradient(to top, rgba(255,255,255,0) 85%, rgba(255,255,255,1)), url(${bgImage5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
        {/* Overlay agar teks tetap mudah dibaca */}
        {/* <div className="absolute inset-0 bg-white/50 rounded-xl backdrop-blur-sm"></div> */}

        {/* Konten di atas overlay */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold 800 mb-6 text-center text-blue-500">Tentang Kami</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Kolom kiri */}
            <div className="w-full md:w-1/2 text-justify font-bold 400 text-gray-700">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
              <p className="mb-4">
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                Mauris massa. Vestibulum lacinia arcu eget nulla. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
            </div>

            {/* Kolom kanan */}
            <div className="w-full md:w-1/2 text-justify font-bold 400 text-gray-700">
              <p className="mb-4">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. lirem ipsum Lorem InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
              <p className="mb-4">
                Integer feugiat, arcu a egestas laoreet, turpis libero aliquet tortor, nec sollicitudin enim justo ac sem. 
                Quisque euismod, urna eget tincidunt ultrices, nisl nunc. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero 4 */}
      <div className="w-full relative py-32 px-6 shadow-lg text-gray-800"
        style={{
          backgroundImage:`url(${bgImage6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
        {/* Overlay agar teks tetap mudah dibaca */}
        {/* <div className="absolute inset-0 bg-white/50 rounded-xl backdrop-blur-sm"></div> */}

        {/* Konten di atas overlay */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold 800 mb-6 text-center text-black">Konten Lain</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Kolom kiri */}
            {/* <div className="w-full md:w-1/2 text-justify font-bold 400 text-gray-700">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
              <p className="mb-4">
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
                Mauris massa. Vestibulum lacinia arcu eget nulla. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
            </div> */}

            {/* Kolom kanan */}
            {/* <div className="w-full md:w-1/2 text-justify font-bold 400 text-gray-700">
              <p className="mb-4">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. lirem ipsum Lorem InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
              <p className="mb-4">
                Integer feugiat, arcu a egestas laoreet, turpis libero aliquet tortor, nec sollicitudin enim justo ac sem. 
                Quisque euismod, urna eget tincidunt ultrices, nisl nunc. InJourney Airports mengelola dan mengoperasikan 37 bandara dengan keunggulan layanan berkelas dunia dan keramahtamahan khas Indonesia.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <a href="#kontak" className="fixed bottom-0 right-2 bg-blue-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-all z-50 flex items-center gap-2">
        <FontAwesomeIcon icon={faComment} />
        Contact Us
      </a>
    </div>
  );
}
