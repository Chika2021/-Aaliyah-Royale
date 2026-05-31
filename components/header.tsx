'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent shadow-none">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">AR</span>
          </div>
          <span className="hidden font-bold text-white sm:block">Aaliyah Royale</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white drop-shadow-lg hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/rooms"
            className="text-sm font-medium text-white drop-shadow-lg hover:text-primary transition-colors"
          >
            Rooms
          </Link>
          <Link
            href="/rooms"
            className="text-sm font-medium text-white drop-shadow-lg hover:text-primary transition-colors"
          >
            Amenities
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white drop-shadow-lg hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/rooms"
            className="hidden rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors sm:inline-block"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="bg-background/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded px-3 py-2 text-base font-medium text-foreground hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="block rounded px-3 py-2 text-base font-medium text-foreground hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/rooms"
              className="block rounded px-3 py-2 text-base font-medium text-foreground hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="/contact"
              className="block rounded px-3 py-2 text-base font-medium text-foreground hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/rooms"
              className="block rounded px-3 py-2 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
