import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div>
          <h2 className="text-2xl font-bold mb-4">Cookie Software Ltd.</h2>
          <p className="text-gray-400">
            Explore the world with confidence. Plan your next adventure with us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/#home" className="text-gray-400 hover:text-gray-500">
                Home
              </a>
            </li>
            <li>
              <a href="/#feature" className="text-gray-400 hover:text-gray-500">
                Features
              </a>
            </li>

            <li>
              <a
                href="/contact-us"
                className="text-gray-400 hover:text-gray-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Cookie Software Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
