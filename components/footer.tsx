import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary">Aaliyah Royale</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Experience luxury and elegance at its finest. Your perfect getaway awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@aaliyahroyale.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@aaliyahroyale.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Luxury Street, Paradise City, PC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground">Hours</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Reception:</span> 24/7
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Check-in:</span> 3:00 PM
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Check-out:</span> 11:00 AM
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Aaliyah Royale. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
