"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolutionInteractive from "@/components/ProblemSolutionInteractive";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import TrackRecord from "@/components/TrackRecord";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingHero from "@/components/FloatingHero";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Auto-open modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header onOpenModal={openModal} />
      
      {/* Main Content Wrap with Z-Index for Footer Reveal */}
      <div className="relative z-20 bg-[#0B0B0B] shadow-[0_50px_100px_rgba(0,0,0,1)]">
        <main>
          <Hero onOpenModal={openModal} />
          <ProblemSolutionInteractive />
          <Services />
          <CaseStudies />
          <Testimonials />
          <TrackRecord />
          <ContactForm />
        </main>
      </div>

      {/* Sticky Reveal Footer */}
      <div className="sticky bottom-0 z-10">
        <Footer onOpenModal={openModal} />
      </div>
      
      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
