import logo from '../assets/images/logo/logoErlas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {


  return (
    <footer className="bg-sky-700 text-white px-6 py-4">
      {/* Baris 1: 3 Kolom rapat */}
      <div className="flex flex-col md:flex-row justify-center md:gap-x-32 text-sm mb-4">
        {/* Kolom 1: Navigasi */}

        <div className="flex justify-center items-center h-48">
          <img src={logo} alt="Logo" className="w-36 h-auto" />
          <div className="flex space-x-4 mb-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-400 text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-400 text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-blue-300 text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-500 text-2xl" />
            </a>
          </div>
        </div>

        <div className="mb-3 md:mb-0">
          <h4 className="font-semibold mb-1 py-5 text-xl">Navigasi</h4>
          <ul className="grid grid-cols-2 gap-x-8 space-y-0">
            <li><a href="/beranda" className="hover:text-blue-400">Beranda</a></li>
            <li><a href="/tentang" className="hover:text-blue-400">Tentang</a></li>
            <li><a href="/layanan" className="hover:text-blue-400">Layanan</a></li>
            <li><a href="/kontak" className="hover:text-blue-400">Kontak</a></li>
          </ul>
        </div>


        {/* Kolom 2: Alamat */}
        <div className="mb-3 md:mb-0">
          <h4 className="font-semibold mb-1 py-5 text-xl">Alamat</h4>
          <p className="leading-snug">Jl. Contoh Alamat No.123<br />Kota, Negara 12345</p>
        </div>

        {/* Kolom 3: Kontak */}
        <div className="mb-3 md:mb-0">
          <h4 className="font-semibold mb-1 py-5 text-xl">Kontak</h4>
          <p className="leading-snug">Email: <a href="mailto:info@example.com" className="hover:text-blue-400">info@example.com</a></p>
          <p className="leading-snug">Telp: <a href="tel:+62123456789" className="hover:text-blue-400">+62 123-4567-89</a></p>
        </div>
      </div>

      {/* Baris 2: Copyright */}
      <div className="text-center text-xs text-gray-400 border-t border-gray-700 pt-2">
        PT Donini Indonesia © 2024. All Rights Reserved.
      </div>
    </footer>
  )
}