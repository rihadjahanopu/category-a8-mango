import TestimonialSlider from "./TestimonialSlider";

export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 w-full">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="badge badge-secondary badge-outline px-4 py-2 mb-4 font-medium">
          Community
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Loved by Readers
        </h2>
        <p className="text-lg opacity-70">
          Join thousands of book enthusiasts who trust BookLib for their daily
          reading journey.
        </p>
      </div>
      <TestimonialSlider />
    </section>
  );
}
