"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface Testimonial {
  name: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  { name: "Alice Johnson", quote: "BookLib completely changed how I find new tech books. The collection is amazing, and the interface is incredibly smooth!" },
  { name: "David Williams", quote: "The best place to discover science fiction. The recommendations are always spot on and reading feels like a breeze." },
  { name: "Sophia Martinez", quote: "I love the user-friendly design and the fast borrowing system. Highly recommended to all book lovers!" },
  { name: "Michael Chen", quote: "A beautifully crafted library application. Reading has never been this accessible and enjoyable." },
  { name: "Emma Watson", quote: "The digital catalog is phenomenal. Found books I thought were long gone! The UI is just stunning." },
];

export default function TestimonialSlider() {
  return (
    <div className="py-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="pb-16"
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i} className="h-auto">
            <div className="card bg-base-100 shadow-xl border border-base-200/50 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0"></div>
              <div className="card-body p-8 relative z-10 flex flex-col h-full">
                
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-primary/20 mb-4 absolute top-6 right-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="italic text-base-content/80 text-lg leading-relaxed flex-grow mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Image 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(testimonial.name)}`} 
                        alt={testimonial.name} 
                        width={56} 
                        height={56} 
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">Reader</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
