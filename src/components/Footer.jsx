import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto sm:px-18 px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* Left - Logo */}
          <div>
            <h1 className="text-3xl font-normal">Barelie</h1>
          </div>
          {/* Right - Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4 text-sm text-neutral-300">
            <a href="/about" className="hover:text-white transition">About us</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/products" className="hover:text-white transition">Products</a>
            <a href="/quiz" className="hover:text-white transition">Quiz</a>
            <a href="/terms-of-service" className="hover:text-white transition">Terms Of Service</a>
          </div>
        </div>

        {/* Bottom - Copyright + Socials */}
        <div className="mt-12 border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-400">
          <p>
            All right reserved –{" "}
            <a
              href="https://barelie.com"
              className="underline hover:text-white transition"
            >
              Barelie.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-white transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
