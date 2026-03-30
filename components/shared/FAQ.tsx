'use client';

import AnimatedSection from "../ui/AnimatedSection";
import ExpandableList from "../ui/ExpandableList";
import { faqItems } from "@/constants";

export default function FAQ() {
  return (
    <AnimatedSection className="mt-16 sm:mt-20 lg:mt-24">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12" id="fqas">
        <p className="font-medium text-sm sm:text-base text-blue-400 uppercase tracking-widest mb-1">
          F.A.Q. SECTION
        </p>
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-snug">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ List */}
      <ExpandableList
        items={faqItems}
        allowMultiple={false}
        className="max-w-3xl mx-auto space-y-3 sm:space-y-4"
      />

    </AnimatedSection>
  );
}