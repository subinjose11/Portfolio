"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/subinjose11",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/subin-jose-y/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:subinjose911@gmail.com",
    icon: Mail,
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-dark-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Subin Jose Y
              </span>
            </Link>
            <p className="text-dark-400 max-w-md leading-relaxed">
              Flutter Developer passionate about building beautiful, performant
              cross-platform mobile applications. Let&apos;s create something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-dark-800 border border-dark-700 text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-dark-600 group-hover:bg-primary-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 text-sm">
              <p className="text-dark-400 flex items-start gap-2">
                <span className="text-dark-500">Location:</span>
                <span className="text-dark-300">Bangalore, India</span>
              </p>
              <p className="text-dark-400">
                <span className="text-dark-500">Email:</span>
                <a
                  href="mailto:subinjose911@gmail.com"
                  className="block text-dark-300 hover:text-primary-400 transition-colors mt-1"
                >
                  subinjose911@gmail.com
                </a>
              </p>
              <p className="text-dark-400">
                <span className="text-dark-500">Phone:</span>
                <a
                  href="tel:+917548817911"
                  className="block text-dark-300 hover:text-primary-400 transition-colors mt-1"
                >
                  +91 7548817911
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              &copy; {currentYear} Subin Jose Y. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/resume"
                className="text-dark-500 hover:text-primary-400 transition-colors text-sm"
              >
                Resume
              </Link>
              <a
                href="/resume.pdf"
                download
                className="text-dark-500 hover:text-primary-400 transition-colors text-sm"
              >
                Download CV
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-dark-800 border border-dark-700 text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
