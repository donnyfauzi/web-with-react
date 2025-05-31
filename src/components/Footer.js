import logo from '../assets/images/logo/logoErlas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-teal-700 to-teal-600 text-white px-6 py-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Kolom 1 */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Tentang Kami</h4>
          <ul className="space-y-1">
            <li><a href="/tentang" className="hover:text-gray-300">Profil Kami</a></li>
            <li><a href="/tentang" className="hover:text-gray-300">Kontak Kami</a></li>
          </ul>
        </div>

        {/* Kolom 2 */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Hubungan Investor</h4>
          <ul className="space-y-1">
            <li><a href="/tentang" className="hover:text-gray-300">Laporan Tahunan</a></li>
          </ul>
          <h4 className="font-bold mt-4 mb-2 text-lg">Publikasi</h4>
          <ul className="space-y-1">
            <li><a href="/tentang" className="hover:text-gray-300">Berita</a></li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Alamat Kami</h4>
          <p className="leading-relaxed text-sm">
            InJourney Airports Center<br />
            Bandar Udara Internasional Soekarno-Hatta<br />
            Jl. M2, Pajang, Kec. Benda,<br />
            Kota Tangerang, Banten 15126
          </p>
        </div>

        {/* Kolom 4: Logo & Sosial Media */}
        <div className="flex flex-col items-center md:items-end">
          <img src={logo} alt="Logo" className="w-32 mb-3" />
          <p className="text-sm mb-2">PT Angkasa Pura Indonesia</p>
          <p className="text-sm mb-4">www.injourneyairports.id</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-400 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-400 text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-blue-300 text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-500 text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-200 border-t border-teal-500 mt-8 pt-4">
        PT Donini Maju Jaya © 2024. All Rights Reserved.
      </div>
    </footer>
  )
}
