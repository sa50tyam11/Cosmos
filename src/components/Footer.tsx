import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-10">
      <div className="container mx-auto px-4 lg:px-8 border-t border-white/10 pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <h2 className="text-5xl font-serif italic mb-6 tracking-tight text-white">Let&apos;s work together.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We collaborate with ambitious brands to create digital experiences that inspire and convert.
            </p>
            <a 
              href="mailto:hello@softcampus.design" 
              className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
            >
              Get in touch
            </a>
          </div>

          <div className="flex flex-wrap gap-16 md:gap-24">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">Socials</h4>
              <ul className="space-y-4">
                {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors group">
                      {item} 
                      <ArrowUpRight className="w-3 h-3 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">Company</h4>
              <ul className="space-y-4">
                {["Work", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 font-medium pt-8 border-t border-white/5">
          <p>© {new Date().getFullYear()} Soft Campus. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
