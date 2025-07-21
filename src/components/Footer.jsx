import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3E5F44] text-[#E8FFD7] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold">Pemerintahan Kabupaten Bantul</h2>
          <h3 className="text-lg font-semibold">DINAS KOPERASI, UKM, PERINDUSTRIAN DAN PERDAGANGAN</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <p className="mb-2">Kabupaten Bantul</p>
            <p className="italic mb-4 text-[#93DA97]">Meningkatkan pertumbuhan ekspor komoditas perdagangan</p>
            
            <div className="space-y-2">
              <p>Komplek Pemda II Manding Bantul,</p>
              <p>Jl. Lingkar Timur Manding Tirrenggo Bantul</p>
            </div>
          </div>

          {/* Middle Column - Contact */}
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#93DA97]" />
              <div>
                <p>0274-2810422</p>
                <p>0812 2566 5517</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#93DA97]" />
              <p>diskukmpp@bantulkab.go.id</p>
            </div>
            
            <div className="flex items-start gap-2">
              <ExternalLink className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#93DA97]" />
              <a 
                href="https://dkukmpp.bantulkab.go.id/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:text-[#93DA97] transition-colors"
              >
                https://dkukmpp.bantulkab.go.id/
              </a>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-[#93DA97]">Link Website</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline hover:text-[#93DA97] transition-colors">Pemda Kab. Bantul</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-[#93DA97] transition-colors">Dinas Koperasi, UKM, Perindustrian dan Perdagangan</a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-[#93DA97] transition-colors">Harga Bahan Pokok</a>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold text-[#93DA97]">Pengunjung</p>
              <p className="text-2xl font-bold">1,245,678</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-[#5E936C] text-center text-sm">
          <p>© {new Date().getFullYear()} Dinas Koperasi, UKM, Perindustrian dan Perdagangan Kabupaten Bantul</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;