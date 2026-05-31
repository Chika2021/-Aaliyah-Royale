'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { RoomCard } from '@/components/room-card';
import { useState } from 'react';

const allRooms = [
  {
    id: '1',
    name: 'Standard Room',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    price: 30000,
    rating: 4.5,
    reviews: 128,
    guests: 2,
    sqft: 320,
    amenities: ['Queen Bed', 'City View', 'Work Desk'],
    description: 'Comfortable room with modern amenities and convenient access to all hotel facilities.'
  },
  {
    id: '2',
    name: 'Standard Room - Twin',
    image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&q=80',
    price: 30000,
    rating: 4.4,
    reviews: 95,
    guests: 2,
    sqft: 300,
    amenities: ['Twin Beds', 'Garden View', 'Work Desk'],
    description: 'Perfect for colleagues or friends traveling together, with twin beds and garden views.'
  },
  {
    id: '3',
    name: 'Deluxe Room',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    price: 50000,
    rating: 4.8,
    reviews: 234,
    guests: 2,
    sqft: 450,
    amenities: ['King Bed', 'Pool View', 'Mini Bar'],
    description: 'Spacious room with premium furnishings and stunning pool views.'
  },
  {
    id: '4',
    name: 'Deluxe Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    price: 100000,
    rating: 4.9,
    reviews: 167,
    guests: 3,
    sqft: 600,
    amenities: ['Separate Living Area', 'Luxury Bath', 'Balcony'],
    description: 'Experience ultimate comfort in our spacious deluxe suite with a private balcony.'
  },
  {
    id: '5',
    name: 'Executive Suite',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    price: 100000,
    rating: 4.9,
    reviews: 112,
    guests: 3,
    sqft: 800,
    amenities: ['Master Suite', 'Dining Area', 'Business Lounge'],
    description: 'Designed for the discerning traveler with exclusive privileges and business amenities.'
  },
  {
    id: '6',
    name: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    price: 250000,
    rating: 5,
    reviews: 89,
    guests: 4,
    sqft: 1200,
    amenities: ['Multiple Bedrooms', 'Private Jacuzzi', 'Premium Service'],
    description: 'Ultimate luxury experience with exclusive amenities and personalized butler service.'
  },
];

export default function RoomsPage() {
  const [selectedPrice, setSelectedPrice] = useState(260000);
  const [selectedGuests, setSelectedGuests] = useState(5);

  const filteredRooms = allRooms.filter(room => 
    room.price <= selectedPrice && room.guests <= selectedGuests
  );

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Header Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
              Our Rooms & Suites
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our collection of luxurious accommodations tailored to your needs
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2">
              {/* Price Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground">
                  Max Price per Night: ₦{selectedPrice.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="30000"
                  max="260000"
                  step="10000"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(Number(e.target.value))}
                  className="mt-3 w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                  <span>₦30,000</span>
                  <span>₦250,000</span>
                </div>
              </div>

              {/* Guests Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground">
                  Max Guests: {selectedGuests}
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(Number(e.target.value))}
                  className="mt-3 w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                  <span>1</span>
                  <span>5+</span>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-6 rounded-lg bg-card p-4 border border-border">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredRooms.length}</span> of <span className="font-semibold text-foreground">{allRooms.length}</span> rooms
              </p>
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {filteredRooms.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRooms.map((room) => (
                  <RoomCard key={room.id} {...room} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-12 text-center">
                <h3 className="text-xl font-semibold text-foreground">No rooms found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your filters to see more rooms
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
