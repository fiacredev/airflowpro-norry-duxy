import React from 'react'
import Image from 'next/image'
import Dvent from '../../public/dryervent.jpg'

export default function DryerVent() {
  return (
     <><section className="w-full py-30 bg-white scroll-mt-23 mt-20 mb-25 rounded-xl border-t-8 border-blue-500" id="hvac">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* TEXT CONTENT */}
        <div className="flex-1">
          <h2 className="capitalize text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Dryer Vent cleaning
          </h2>
          <p className="text-gray-500 mb-6">
            We provide reliable dryer vent cleaning services designed to remove lint buildup,
             improve airflow, and keep your home safe, clean, and comfortable all year round.
          </p>

          <ul className="space-y-2 text-gray-500">
            <li>✔ Lint Removal</li>
            <li>✔ Vent Inspeaction</li>
            <li>✔ Odor Elimination</li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <a href="#ventilation">Learn More</a>
          </button>
        </div>

        {/* IMAGE PLACEHOLDER */}

            <div className="flex-1 w-full h-80">
            <Image 
                src={Dvent} 
                alt="HVAC Service"
                className="w-full h-full object-cover rounded-xl"
            />
            </div>
      </div>
    </section>
</>
  )
}
