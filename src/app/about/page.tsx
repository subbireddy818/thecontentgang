"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import About from "@/components/About";
import TrackRecord from "@/components/TrackRecord";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      
      {/* Main Content Wrap with Z-Index for Footer Reveal */}
      <div className="relative z-20 bg-[#0B0B0B] min-h-[80vh] pt-32 shadow-[0_50px_100px_rgba(0,0,0,1)] flex flex-col justify-center">
        <main>
          <About />
          <div className="py-20">
            <TrackRecord />
          </div>
        </main>
      </div>

      {/* Sticky Reveal Footer (Relative on mobile to prevent clipping) */}
      <div className="relative md:sticky bottom-0 z-10">
        <Footer onOpenModal={openModal} />
      </div>
      
      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
