import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-medium text-2xl pb-8 text-center">Testimonial</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          {/* Testimonial Card */}
          <div className="border border-gray-300 rounded-2xl p-6">
            <div className="text-center flex flex-col items-center gap-4">
              <Image
                className="rounded-full"
                src="/quotes.jpg"
                width={80}
                height={80}
                alt="Profile"
              />
              <h3 className="text-gray-800 font-bold text-lg">Elsa Deo</h3>
              <p className="text-sm text-gray-500">CEO & Founder, Invision</p>
              <Image
                className="py-2"
                src="/quotes.jpg"
                width={30}
                height={30}
                alt="Quotes"
              />
              <p className="max-w-[200px] text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                porro.
              </p>
            </div>
          </div>

          {/* Promo Section */}
          <div
            className="bg-red-600 bg-[url('/cta-banner.jpg')] bg-cover h-[300px] md:h-[500px] rounded-2xl flex items-center justify-center"
          >
            <div className="bg-white bg-opacity-80 p-6 md:py-8 md:px-12 rounded-xl text-center space-y-4">
              <button className="bg-black text-white py-2 px-4 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-gray-900">
                Summer Collection
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
