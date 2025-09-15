'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Tarar Saheb Road Contracting L.L.C</h3>
            <p className="text-sm text-muted-foreground">
              Building the foundations of tomorrow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <address className="not-italic space-y-1 text-sm text-muted-foreground">
              <p>
                <a href="mailto:info@tararsaheb.ae" className="hover:text-foreground">
                  info@tararsaheb.ae
                </a>
              </p>
              <p>+971 4 333 4316</p>
              <p>+971 55 944 8111</p>
              <p>+971 50 674 6111</p>
              <p>+971 52 753 0607</p>
            </address>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Tarar Saheb. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
