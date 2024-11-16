import React from 'react';
import Image from '../assets/Illustration.svg';

function Hero() {
  return (
    <section className="relative will-change-scroll min-h-screen md:h-screen flex justify-center items-center   md:pt-28">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-8 md:mx-16 xl:mx-32">
        <div className="max-w-2xl px-4 flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-spacegrotesk">
            Navigating the Digital Landscape for Success
          </h1>
          <p className="text-gray-700 text-lg max-w-lg">
            Our digital marketing agency helps businesses grow and succeed online through a range of
            services including SEO, PPC, social media marketing, and content creation.
          </p>
          <div className="pt-4">
            <button className="bg-black text-white w-60 py-4 md:py-5 rounded-2xl">
              Book a Consultation
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={Image}
            alt="Cover image"
            className="pointer-events-none select-none object-cover object-center"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
