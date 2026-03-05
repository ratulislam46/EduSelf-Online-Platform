"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Branding */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-wider">EduSelf</h1>
          <p className="text-gray-300 text-sm">
            Empowering students to access every book digitally and learn from anywhere.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-200 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Departments</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              123 Kushtia, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              +880 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              support@eduself.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Get the latest updates about new books and resources.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 transition px-5 py-2 rounded-md font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} EduSelf. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
