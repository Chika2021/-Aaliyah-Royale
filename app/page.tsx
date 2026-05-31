import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { RoomCard } from '@/components/room-card';
import { Waves, Wind, Dumbbell, Users } from 'lucide-react';

const amenities = [
  {
    icon: Waves,
    title: 'Multiple Pools',
    description: 'Stunning illuminated pools with premium amenities and poolside service'
  },
  {
    icon: Wind,
    title: 'Premium Air Conditioning',
    description: 'Individual climate control in every room for maximum comfort'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with modern equipment and expert trainers'
  },
  {
    icon: Users,
    title: '24/7 Concierge',
    description: 'Dedicated staff available around the clock to assist you'
  },
];

const featuredRooms = [
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
    id: '6',
    name: 'Presidential Suite',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    price: 250000,
    rating: 5,
    reviews: 89,
    guests: 4,
    sqft: 1200,
    amenities: ['Multiple Bedrooms', 'Private Jacuzzi', 'Premium Service'],
    description: 'Ultimate luxury experience with exclusive amenities and personalized service.'
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=90"
            alt="Aaliyah Royale Hotel"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-balance text-5xl font-bold text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              Aaliyah Royale
            </h1>
            <p className="mt-4 text-balance text-xl text-white drop-shadow-md sm:text-2xl">
              Experience Luxury Redefined
            </p>
            <Link
              href="/rooms"
              className="mt-8 rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book Your Stay
            </Link>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 px-4 bg-background sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
                World-Class Amenities
              </h2>
              <p className="mt-4 text-balance text-lg text-muted-foreground">
                Indulge in our premium facilities designed for your ultimate comfort and relaxation
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div key={amenity.title} className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground">{amenity.title}</h3>
                    <p className="mt-2 text-muted-foreground">{amenity.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Rooms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
                Our Rooms
              </h2>
              <p className="mt-4 text-balance text-lg text-muted-foreground">
                Choose from our selection of luxurious accommodations
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} {...room} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/rooms"
                className="inline-block rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View All Rooms
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-4xl font-bold text-secondary-foreground sm:text-5xl">
              Ready to Experience Luxury?
            </h2>
            <p className="mt-4 text-balance text-lg text-secondary-foreground/90">
              Book your perfect getaway at Aaliyah Royale and create unforgettable memories
            </p>
            <Link
              href="/rooms"
              className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start Booking Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
