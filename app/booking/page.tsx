import { Suspense } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookingForm } from '@/components/booking-form';

function BookingFormFallback() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-12 bg-muted rounded-lg" />
      <div className="h-12 bg-muted rounded-lg" />
      <div className="h-12 bg-muted rounded-lg" />
    </div>
  );
}

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
              Complete Your Booking
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill in your details below to reserve your perfect room at Aaliyah Royale
            </p>
          </div>

          <Suspense fallback={<BookingFormFallback />}>
            <BookingForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}