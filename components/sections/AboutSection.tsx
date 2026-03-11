'use client';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-20 max-w-5xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black/60 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-lg text-center w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500 tracking-widest">ABOUT ME</h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          AI prompt engineer and certified AI professional specializing in advanced prompt optimization and LLM interaction. Skilled at designing structured prompts, synthesizing data insights, and creating high-quality AI-generated content. Proven ability to develop evaluation criteria and meet deadlines in independent research settings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Education</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <div className="text-white">BSC in CSE</div>
                <div>North South University (2025 - Ongoing)</div>
              </li>
              <li>
                <div className="text-white">HSC in Science</div>
                <div>Sunarban Adarsha College (2022 - 2024)</div>
                <div>GPA 5.00/5.00</div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Skills</h3>
            <ul className="space-y-2 text-gray-400">
              <li><span className="text-white">AI:</span> Advanced Prompt Engineering, LLM Interaction, AI Data Analysis</li>
              <li><span className="text-white">Programming:</span> C, Python, Rapid Prototyping</li>
              <li><span className="text-white">IT & Security:</span> Linux (Debian, Kali, Arch), Network Reconnaissance</li>
              <li><span className="text-white">Multimedia:</span> DaVinci Resolve Studio, Adobe Premiere Pro</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
