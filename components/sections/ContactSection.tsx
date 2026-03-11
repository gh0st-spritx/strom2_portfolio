'use client';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Globe, Linkedin, Github, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-20 max-w-4xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-500 tracking-widest text-center">CONTACT</h2>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/60 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-lg w-full flex flex-col md:flex-row gap-12"
      >
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
          <div className="flex items-center space-x-4 text-gray-300">
            <Phone className="text-red-500" />
            <span>+88 01553425102</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <Mail className="text-red-500" />
            <span>soumikhalder.edu@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <MapPin className="text-red-500" />
            <span>Bashundhara Residential Area</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <Globe className="text-red-500" />
            <a href="http://soumik.me" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">soumik.me</a>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
          <h3 className="text-2xl font-semibold text-white mb-2">Social Profiles</h3>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/soumik-halder-spritx/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-red-500 hover:text-white transition-all text-gray-400">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/gh0st-spritx" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-red-500 hover:text-white transition-all text-gray-400">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-red-500 hover:text-white transition-all text-gray-400">
              <Twitter size={24} />
            </a>
          </div>
          <a href="/Resume_f.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-widest rounded transition-colors">
            DOWNLOAD RESUME
          </a>
        </div>
      </motion.div>
    </div>
  );
}
