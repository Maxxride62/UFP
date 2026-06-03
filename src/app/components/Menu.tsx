import { useEffect, useState } from 'react';
import { Logo } from './Logo';

export function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: 'The programmes', href: '#programmes' },
    { label: 'Why Nick', href: '#why-nick' },
    { label: 'Work Together', href: '#apply' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav
        style={{
          backgroundColor: isScrolled ? 'rgba(232, 229, 167, 0.95)' : 'rgba(232, 229, 167, 1)',
        }}
        className="max-w-6xl mx-auto rounded-full px-8 py-4 flex items-center justify-between shadow-lg backdrop-blur-sm transition-colors duration-300"
      >
        <a href="#home" className="flex-shrink-0">
          <Logo variant="earth" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-900 hover:text-zinc-600 transition-all text-base hover:underline underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#apply"
          className="bg-zinc-900 text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-colors text-base"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
