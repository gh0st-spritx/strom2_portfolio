'use client';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const certs = [
  { name: "IELTS Band 7", link: "/ielts.pdf" },
  { name: "CompTIA ITF+", link: "https://www.credly.com/badges/68e47d7c-0fbc-4641-99ba-014990668bde/public_url" },
  { name: "Google AI Professional Certificate", link: "/ai.pdf" }
];

export default function CertificationsSection() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-20 max-w-4xl mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-500 tracking-widest text-center">CERTIFICATIONS</h2>
      <div className="flex flex-col space-y-6 w-full">
        {certs.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex items-center justify-between bg-black/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:border-red-500 hover:bg-red-950/30 transition-all group"
          >
            <span className="text-xl text-gray-200 group-hover:text-white">{c.name}</span>
            <ExternalLink className="text-gray-500 group-hover:text-red-500 transition-colors" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
