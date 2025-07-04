import React from "react";
import {Instagram, Facebook, Youtube} from 'lucide-react';

const Footer = () => {
    return(
         <footer className="bg-[#0099DC] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-0 py-12 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full" />
          <span className="text-xl font-bold">Logo</span>
        </div>

        {/* BINUS Anggrek info */}
        <div>
          <h3 className="font-semibold text-lg">BINUS Anggrek</h3>
          <p className="mt-2 text-sm leading-relaxed">
            Jalan Kebon Jeruk Raya No.27, RT.1/RW.9, <br />
            Kebon Jeruk, Jakarta Barat, 11530. <br />
            BINUS University Anggrek.
          </p>
        </div>

        {/* Social media */}
        <div>
          <h3 className="font-semibold text-lg">Our Social Media</h3>
          <p className="mt-2 text-sm">Get latest information by following our social media.</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="">
        <p className="max-w-4xl mx-auto px-5 py-6 text-center text-[18px]">
          © 2025 by School of Information Systems – Bina Nusantara University
        </p>
      </div>
    </footer>
    );
};

export default Footer;