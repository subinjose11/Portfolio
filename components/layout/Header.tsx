"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section on home page
      if (isHomePage) {
        const sections = navItems.map((item) => item.href.replace("#", ""));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Reset active section when not on home page
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
    }
  }, [isHomePage]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      if (isHomePage) {
        // On home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to home page with hash
        router.push(`/${href}`);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-dark-800/50 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-dark-800/50 rounded-full p-1 border border-dark-700/50">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeSection === item.href.replace("#", "")
                      ? "text-white"
                      : "text-dark-400 hover:text-white"
                  )}
                >
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
              <Link
                href="/blog"
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-dark-400 hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/resume"
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-dark-400 hover:text-white"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-4 p-2.5 rounded-xl bg-dark-800/50 border border-dark-700/50 text-dark-400 hover:text-primary-400 transition-all duration-300 z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 bg-dark-800/95 backdrop-blur-xl rounded-2xl mt-2 border border-dark-700/50">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "block w-full text-left px-6 py-3 text-sm font-medium transition-colors duration-200",
                      activeSection === item.href.replace("#", "")
                        ? "text-primary-400 bg-primary-500/10"
                        : "text-dark-300 hover:text-white hover:bg-dark-700/50"
                    )}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="border-t border-dark-700 mt-2 pt-2">
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-sm text-dark-300 hover:text-white hover:bg-dark-700/50 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resume"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-3 text-sm text-dark-300 hover:text-white hover:bg-dark-700/50 transition-colors"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
