'use client';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Market Alert Bot",
    tech: "Python",
    desc: "AI-prototyped real-time price tracker."
  },
  {
    title: "Data Scraper Utility",
    tech: "Python",
    desc: "AI-prototyped tool for automated Telegram data extraction."
  },
  {
    title: "Tic-Tac-Toe Game",
    tech: "C",
    desc: "Classic console-based game implementation."
  }
];

export default function ProjectsSection() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-20 max-w-6xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-500 tracking-widest text-center">PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:border-red-500/50 hover:bg-black/80 transition-all group"
          >
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{p.title}</h3>
            <div className="text-xs tracking-widest text-red-500 mb-4 uppercase">{p.tech}</div>
            <p className="text-gray-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
