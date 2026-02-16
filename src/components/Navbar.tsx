import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    {
      name: 'Features',
      href: '#features'
    },
    {
      name: 'Admin',
      href: '#admin'
    },
    {
      name: 'How it Works',
      href: '#how-it-works'
    },
    {
      name: 'Community',
      href: '#community'
    }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/pulse_logo.png"
              alt="PULSE Logo"
              className="h-10 w-auto object-contain" />

            <span className="text-xl font-bold text-gray-900 tracking-tight">
              PULSE
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">

                {link.name}
              </a>
            )}
            <Button size="sm" onClick={() => window.open('https://app.appsonair.com/install/up9vbH3V', '_blank')}>
              Download App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden">

            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-gray-900 hover:text-teal-500"
                  onClick={() => setIsMobileMenuOpen(false)}>

                  {link.name}
                </a>
              )}
              <Button fullWidth onClick={() => window.open('https://app.appsonair.com/install/up9vbH3V', '_blank')}>
                Download App
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}