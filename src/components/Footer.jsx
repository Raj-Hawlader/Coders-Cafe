import React from 'react';
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-[#1A1F25] text-[#F1DABF] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.8
         }}
         className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold text-primary">Coders Cafe</h1>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, recusandae.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-primary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.9
         }}
         className="flex flex-col">
          <h2 className="text-lg font-semibold text-primary mb-4">Quick Links</h2>
          <a href="#" className="hover:text-white mb-2">Home</a>
          <a href="#" className="hover:text-white mb-2">About Us</a>
          <a href="#" className="hover:text-white mb-2">Services</a>
          <a href="#" className="hover:text-white mb-2">Contact</a>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
            type:"spring",
            stiffness:100,
            damping:10,
            delay:1
         }}
          className="flex flex-col">
          <h2 className="text-lg font-semibold text-primary mb-4">Contact Us</h2>
          <p className="mb-2">Email: info@yourcompany.com</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Your Street, Your City, Your State, 12345</p>
        </motion.div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
