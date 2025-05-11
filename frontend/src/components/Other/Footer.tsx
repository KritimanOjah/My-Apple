import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaApple } from "react-icons/fa";


const Footer : React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12"
    style={{ fontFamily: "'Raleway', sans-serif" }}>  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          
          <div className="space-y-4">
            <div className="flex items-center space-x-">
              <FaApple/>
              <span className="text-xl font-semibold text-gray-100 -ml-3.5">APPLE</span>
            </div>
            <p className="text-gray-400 text-sm">
              APPLE RED APPLE FRESH
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 text-3xl hover:text-white transition-colors">
                <FaTwitter/>
              </a>
              <a href="#" className="text-gray-400 text-3xl hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 text-3xl hover:text-white transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Apple</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Red</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Apple</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Fresh</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Stay Updated
            </h3>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
              />
              <button 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Apple Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;