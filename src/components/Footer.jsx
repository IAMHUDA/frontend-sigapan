import React, { useEffect, useState } from "react";
import logo from "../assets/logoBantul.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const randomCount = Math.floor(Math.random() * 50000) + 10000;
    setVisitorCount(randomCount);
  }, []);

  return (
    <footer className="bg-green-800 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Column 1: Logo & Info */}
          <div>
            <div className="flex items-start gap-4 mb-5">
              <img
                src={logo}
                alt="Logo Bantul"
                className="w-30 h-20 object-contain"
              />
              <div>
                <p className="text-green-200 text-xs mb-1">
                  Pemerintah Kabupaten Bantul
                </p>
                <h2 className="font-semibold text-sm leading-snug text-white mb-1">
                  DINAS KOPERASI, UKM, PERINDUSTRIAN DAN PERDAGANGAN
                </h2>
                <p className="text-green-200 text-xs">Kabupaten Bantul</p>
              </div>
            </div>

            <p className="text-green-100 leading-relaxed mb-6">
              Melayani masyarakat dalam bidang koperasi, UMKM, perindustrian,
              dan perdagangan.
            </p>

            <div className="flex items-center gap-3 bg-green-700 px-4 py-3 rounded-lg">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <p className="text-white">
                Pengunjung:{" "}
                <span className="font-semibold">
                  {visitorCount.toLocaleString()}
                </span>
              </p>
            </div>
          </div>

          {/* Column 2: Kontak */}
          <div>
            <h3 className="font-semibold text-white text-base mb-4">Kontak</h3>
            <ul className="space-y-4 text-green-100">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Komplek Pemda II Manding, Jl. Lingkar Timur Manding Trirenggo,
                  Bantul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.928.688l2.059 5.027a1 1 0 01-.116 1.057l-1.605 1.605c1.47 2.31 3.333 4.173 5.643 5.643l1.605-1.605a1 1 0 011.057-.116l5.027 2.059a1 1 0 01.688.928V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>0274-2810422 / 0812 2568 5517</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:diskukmpp@bantulkab.go.id"
                  className="hover:underline"
                >
                  diskukmpp@bantulkab.go.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://diskumpp.bantulkab.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  diskumpp.bantulkab.go.id
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Links & Social */}
          <div>
            <h3 className="font-semibold text-white text-base mb-4">Tautan</h3>
            <ul className="space-y-2 text-green-100 mb-6">
              <li>
                <a href="#" className="hover:underline">
                  Pemda Kabupaten Bantul
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dinas Koperasi, UKM, Perindustrian dan Perdagangan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Harga Bahan Pokok
                </a>
              </li>
            </ul>

            <h4 className="font-medium text-white text-sm mb-3">
              Media Sosial
            </h4>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, label: "Facebook", href: "#" },
                { icon: <FaTwitter />, label: "Twitter", href: "#" },
                { icon: <FaInstagram />, label: "Instagram", href: "#" },
                { icon: <FaYoutube />, label: "YouTube", href: "#" },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <span className="text-white text-base">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-700 pt-6 text-center text-green-200 text-xs">
          &copy; {new Date().getFullYear()} Dinas Koperasi, UKM, Perindustrian
          dan Perdagangan Kabupaten Bantul
        </div>
      </div>
    </footer>
  );
};

export default Footer;
