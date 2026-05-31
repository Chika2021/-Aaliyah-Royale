'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Calendar, Users, Mail, Phone, MapPin } from 'lucide-react';

interface BookingFormProps {
  roomId?: string;
}

export function BookingForm({ roomId }: BookingFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramRoomId = searchParams.get('roomId');
  const selectedRoomId = roomId || paramRoomId || '1';

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking submission
    setTimeout(() => {
      // Store booking data and redirect to confirmation
      sessionStorage.setItem('bookingData', JSON.stringify({
        ...formData,
        roomId: selectedRoomId,
      }));
      router.push('/confirmation');
    }, 500);
  };

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const roomPrices: Record<string, number> = {
    '1': 225000, '2': 225000, '3': 375000, '4': 525000, '5': 750000, '6': 1200000
  };
  const totalPrice = nights * (roomPrices[selectedRoomId] || 225000);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Check-in/Check-out Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">When are you visiting?</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="checkIn" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Calendar size={18} className="text-primary" />
              Check-in Date
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="checkOut" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Calendar size={18} className="text-primary" />
              Check-out Date
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Guests Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <label htmlFor="guests" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
          <Users size={18} className="text-primary" />
          Number of Guests
        </label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      {/* Guest Information Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Guest Information</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
        <div className="grid gap-4">
          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Mail size={18} className="text-primary" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <Phone size={18} className="text-primary" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (234) 567-8900"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Address</h3>
        <div className="grid gap-4">
          <div>
            <label htmlFor="address" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <MapPin size={18} className="text-primary" />
              Street Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main Street"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your City"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-foreground mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="12345"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div className="rounded-xl border border-border bg-card p-6">
        <label htmlFor="specialRequests" className="block text-sm font-medium text-foreground mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Let us know if you have any special requests..."
          rows={4}
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Price Summary */}
      {nights > 0 && (
        <div className="rounded-xl border border-primary bg-primary/5 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Price Summary</h3>
          <div className="space-y-2 border-b border-border pb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{nights} night{nights > 1 ? 's' : ''} × ₦{(roomPrices[selectedRoomId] || 225000).toLocaleString()}</span>
              <span className="font-semibold text-foreground">₦{(nights * (roomPrices[selectedRoomId] || 225000)).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Taxes & Fees</span>
              <span className="font-semibold text-foreground">₦{Math.round(totalPrice * 0.1).toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <span className="text-lg font-semibold text-foreground">Total</span>
            <span className="text-2xl font-bold text-primary">₦{Math.round(totalPrice * 1.1).toLocaleString()}</span>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || nights <= 0}
        className="w-full rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Processing...' : 'Complete Booking'}
      </button>
    </form>
  );
}
