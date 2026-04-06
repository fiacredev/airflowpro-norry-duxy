import React from 'react'
import Image from 'next/image';
import Aduct from '../../public/airduct.jpeg';

export default function Hvac() {
  return (
    <><section className="w-full py-30 bg-white scroll-mt-23 mt-20 mb-25 rounded-xl border-t-8 border-blue-500" id="hvac">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* TEXT CONTENT */}
        <div className="flex-1">
          <h2 className="capitalize text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            air duct cleaning
          </h2>
          <p className="text-gray-500 mb-6">
            We provide reliable air duct cleaning services designed to improve airflow,
            enhance indoor air quality, and keep your space clean, safe, and comfortable all year round.
          </p>

          <ul className="space-y-2 text-gray-500">
            <li>✔ Improve Air Quality</li>
            <li>✔ Remove Dust Debris</li>
            <li>✔ Prevent Mold Growth</li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <a href="#ventilation">Request</a>
          </button>
        </div>

        {/* IMAGE PLACEHOLDER */}

            <div className="flex-1 w-full h-80">
            <Image 
                src={Aduct} 
                alt="HVAC Service"
                className="w-full h-full object-cover rounded-xl"
            />
            </div>
      </div>
    </section>
</>
  )
}