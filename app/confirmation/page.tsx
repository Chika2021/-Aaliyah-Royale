'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckCircle2, Calendar, Users, Mail, Phone, Home, Download } from 'lucide-react';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  specialRequests?: string;
  roomId: string;
}

const roomNames: Record<string, string> = {
  '1': 'Standard Room',
  '2': 'Standard Room - Twin',
  '3': 'Deluxe Room',
  '4': 'Deluxe Suite',
  '5': 'Executive Suite',
  '6': 'Presidential Suite',
};

const roomPrices: Record<string, number> = {
  '1': 225000,
  '2': 225000,
  '3': 375000,
  '4': 525000,
  '5': 750000,
  '6': 1200000,
};

export default function ConfirmationPage() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve booking data from session storage
    const data = sessionStorage.getItem('bookingData');
    if (data) {
      setBookingData(JSON.parse(data));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-muted-foreground">Loading your booking...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!bookingData) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <h1 className="text-2xl font-bold text-foreground">No Booking Found</h1>
              <p className="mt-4 text-muted-foreground">
                It looks like you haven&apos;t completed a booking yet.
              </p>
              <Link
                href="/rooms"
                className="mt-6 inline-block rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Browse Rooms
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const checkIn = new Date(bookingData.checkIn);
  const checkOut = new Date(bookingData.checkOut);
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  const roomPrice = roomPrices[bookingData.roomId] || 150;
  const subtotal = nights * roomPrice;
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;
  const confirmationNumber = `AR-${Date.now().toString().slice(-8).toUpperCase()}`;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
              Booking Confirmed!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Thank you for choosing Aaliyah Royale. Your reservation is confirmed.
            </p>
          </div>

          {/* Confirmation Number */}
          <div className="mb-8 rounded-xl border-2 border-accent bg-accent/5 p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">Confirmation Number</p>
            <p className="mt-2 text-2xl font-bold text-foreground">{confirmationNumber}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Save this number for your records
            </p>
          </div>

          {/* Booking Details */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Room Information */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Room Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Room Type</p>
                  <p className="text-lg font-semibold text-foreground">{roomNames[bookingData.roomId]}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    Check-in
                  </p>
                  <p className="text-lg font-semibold text-foreground">{formatDate(checkIn)}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    Check-out
                  </p>
                  <p className="text-lg font-semibold text-foreground">{formatDate(checkOut)}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    Number of Guests
                  </p>
                  <p className="text-lg font-semibold text-foreground">{bookingData.guests} Guest{bookingData.guests > 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Guest Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="text-lg font-semibold text-foreground">{bookingData.firstName} {bookingData.lastName}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail size={16} className="text-primary" />
                    Email
                  </p>
                  <p className="text-lg font-semibold text-foreground">{bookingData.email}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone size={16} className="text-primary" />
                    Phone
                  </p>
                  <p className="text-lg font-semibold text-foreground">{bookingData.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-8 rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Home size={20} className="text-primary" />
              Address
            </h2>
            <div className="space-y-2 text-foreground">
              <p>{bookingData.address}</p>
              <p>{bookingData.city}, {bookingData.zipCode}</p>
            </div>
          </div>

          {/* Special Requests */}
          {bookingData.specialRequests && (
            <div className="mb-8 rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Special Requests</h2>
              <p className="text-foreground">{bookingData.specialRequests}</p>
            </div>
          )}

          {/* Price Summary */}
          <div className="mb-8 rounded-xl border-2 border-primary bg-primary/5 p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Price Summary</h2>
            <div className="space-y-2 border-b border-border pb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{nights} night{nights > 1 ? 's' : ''} × ₦{roomPrice.toLocaleString()}</span>
                <span className="font-semibold text-foreground">₦{Math.round(subtotal).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes & Fees (10%)</span>
                <span className="font-semibold text-foreground">₦{Math.round(taxes).toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <span className="text-lg font-bold text-foreground">Total Amount</span>
              <span className="text-2xl font-bold text-primary">₦{Math.round(total).toLocaleString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download size={20} />
              Print Confirmation
            </button>
            <Link
              href="/"
              className="rounded-lg bg-primary px-6 py-3 text-center font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Need to Modify Your Booking?</h3>
            <p className="text-muted-foreground mb-4">
              Contact our customer service team for any changes to your reservation
            </p>
            <div className="space-y-2">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Phone:</span> +1 (234) 567-890
              </p>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Email:</span> reservations@aaliyahroyale.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
