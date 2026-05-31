import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, Square, Wifi } from 'lucide-react';

interface RoomCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  sqft: number;
  amenities: string[];
  description: string;
}

export function RoomCard({
  id,
  name,
  image,
  price,
  rating,
  reviews,
  guests,
  sqft,
  amenities,
  description,
}: RoomCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(rating) ? 'fill-primary text-primary' : 'text-muted'}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {rating.toFixed(1)} ({reviews} reviews)
              </span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-lg font-bold text-primary sm:text-xl">₦{price.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">per night</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>

        {/* Room Details */}
        <div className="mt-4 grid grid-cols-3 gap-3 border-y border-border py-4">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-primary" />
            <span className="text-sm text-foreground">{guests} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={18} className="text-primary" />
            <span className="text-sm text-foreground">{sqft} sqft</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi size={18} className="text-primary" />
            <span className="text-sm text-foreground">WiFi</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-foreground">Amenities:</p>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => (
              <span key={amenity} className="rounded-full bg-muted px-3 py-1 text-xs text-foreground">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/booking?roomId=${id}`}
          className="mt-6 block w-full rounded-lg bg-primary px-4 py-3 text-center font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}