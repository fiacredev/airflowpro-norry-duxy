import React from 'react';
import DryDuct from './DryerDuct';
import DryerVent from './DryerVent';
import AirConditional from './AirConditional';
import Chimney from './Chimney';

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-7" id="services">
      {/* Section Header */}
      <h2 className="font-semibold text-xl sm:text-4xl lg:text-2xl 
                     bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 
                     bg-clip-text text-transparent mb-0">
        Our Main Services
      </h2>

      {/* Service Components */}
      <div className="mt-0">
        {/* Add a wrapper to remove any top margin inside the component */}
        <div className="mt-0"><DryDuct /></div>
        <div><DryerVent /></div>
        <div><AirConditional /></div>
        <div><Chimney /></div>
      </div>
    </div>
  );
}