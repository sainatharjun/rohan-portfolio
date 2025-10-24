"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ViewportAnimation } from "@/components/viewport-animation";
import { useState } from "react";

export default function WorkPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900 tracking-tight hover:text-gray-600 transition-all duration-300"
          >
            Rohan Manghat
          </Link>

          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium"
            >
              Home
            </Link>
            <Link href="/work" className="text-gray-900 font-semibold">
              Work
            </Link>
            <button
              onClick={scrollToContact}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-gray-600 transition-all duration-300 py-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-gray-900 py-2 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            <button
              onClick={() => {
                scrollToContact();
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-gray-600 transition-all duration-300 py-2 text-left font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <ViewportAnimation>
            <h1 className="text-6xl md:text-8xl font-bold mb-12 text-balance leading-tight text-center">
              Brands I’ve lent my words to
            </h1>
          </ViewportAnimation>
        </div>
      </section>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-ticker">
          {/* First set of images */}
          <div className="flex space-x-6" style={{ width: "max-content" }}>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (22).jpeg"
                alt="Creative Workspace"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (23).jpeg"
                alt="Writing Desk"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (24).jpeg"
                alt="Modern Office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (25).jpeg"
                alt="Marketing Campaign"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (26).jpeg"
                alt="Contemplative"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (27).jpeg"
                alt="Creative Workspace"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-6" style={{ width: "max-content" }}>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (22).jpeg"
                alt="Creative Workspace"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (23).jpeg"
                alt="Writing Desk"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (24).jpeg"
                alt="Modern Office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (25).jpeg"
                alt="Marketing Campaign"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (26).jpeg"
                alt="Contemplative"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-64 h-40 relative flex-shrink-0">
              <Image
                src="/images (27).jpeg"
                alt="Creative Workspace"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <ViewportAnimation>
            <h1 className="text-6xl md:text-8xl font-bold mb-12 text-balance leading-tight text-center">
              Featured Works
            </h1>
          </ViewportAnimation>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <ViewportAnimation>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed text-center italic">
              "So yeah, I'm a big fan of Tom McElligott and his fearless take on
              ads, the man could turn selling socks into a spiritual experience
              and still make you laugh while buying two pairs."
            </blockquote>
          </ViewportAnimation>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <ViewportAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Projects With Aftertaste
            </h2>
          </ViewportAnimation>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <ViewportAnimation className="stagger-1">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%281%29.png-En5Zrc9TIkmwJ5Ga6v31Dzxq2sAJ2C.jpeg"
                  )
                }
              >
                <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%281%29.png-En5Zrc9TIkmwJ5Ga6v31Dzxq2sAJ2C.jpeg"
                    alt="Tulive Real Estate Campaign"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    Toys vs. Investments - Tulive
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 uppercase tracking-wide">
                    Real Estate | Emotional Investment
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Turned playground nostalgia into property gold. Because kids
                    outgrow swings, but never outgrow the need for a solid
                    foundation.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-2">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%287%29.png-Z5NoBrUbTmlIhiKMw2iP4MMfSvmcjo.jpeg"
                  )
                }
              >
                <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%287%29.png-Z5NoBrUbTmlIhiKMw2iP4MMfSvmcjo.jpeg"
                    alt="Lancor Harmonia Campaign"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    Second Innings Younger - Lancor
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 uppercase tracking-wide">
                    Senior Living | Age Redefinition
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Made retirement feel like a victory lap instead of a
                    timeout. Cricket metaphors hit different when you're selling
                    dreams, not just homes.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-3">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20portfolio.jpg-vcgGCDCwpmoevHdFDs9IUnLgLQxwjO.jpeg"
                  )
                }
              >
                <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20portfolio.jpg-vcgGCDCwpmoevHdFDs9IUnLgLQxwjO.jpeg"
                    alt="Renaatus Women's Day Campaign"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    Million Battles, One Woman - Renaatus
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 uppercase tracking-wide">
                    Beauty & Wellness | Women's Empowerment
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Celebrated every role a woman plays without making it sound
                    like a burden. Strength looks different on everyone.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-4">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%285%29-nPnvY9xtrFLhCQd6m5CXYFpMYGtL0y.png"
                  )
                }
              >
                <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%285%29-nPnvY9xtrFLhCQd6m5CXYFpMYGtL0y.png"
                    alt="Tulive Friends Campaign"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    Friends Can Own Together - Tulive
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 uppercase tracking-wide">
                    Real Estate | Pop Culture Marketing
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Borrowed from the most iconic friend group on TV to sell
                    real estate. Sometimes the best ideas are hiding in plain
                    sight.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-1">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%2823%29.jpg-ZcTODWdx7sBCOopx3ShPX2BsoPUGXe.jpeg"
                  )
                }
              >
                <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%2823%29.jpg-ZcTODWdx7sBCOopx3ShPX2BsoPUGXe.jpeg"
                    alt="NKlusive Property Campaign"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    This is Not a Skin Ad - NKlusive
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 uppercase tracking-wide">
                    Real Estate | Happiness Marketing
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sold homes by selling joy. Because the best property ads
                    aren't about square footage—they're about life satisfaction.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-2">
              <div
                className="group cursor-pointer"
                onClick={() => setSelectedImage("/weight-of-world-new.jpg")}
              >
                <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <Image
                    src="/weight-of-world-new.jpg"
                    alt="NKlusive Earth Day Campaign"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    Weight of the World - NKlusive
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 uppercase tracking-wide">
                    Environmental | Earth Day Campaign
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Made environmental responsibility visceral. Sometimes the
                    most powerful messages come wrapped in plastic.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-3">
              <div
                className="group cursor-pointer"
                onClick={() =>
                  setSelectedImage(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%2816%29.png-DJftPepMEjJ0DP5sK48AFwRkNlS25l.jpeg"
                  )
                }
              >
                <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Work%20%2816%29.png-DJftPepMEjJ0DP5sK48AFwRkNlS25l.jpeg"
                    alt="Lancor Summit Campaign"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    Some Summits Are Claimed - Lancor
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 uppercase tracking-wide">
                    Real Estate | Achievement Metaphor
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Turned property ownership into a conquest story. Because
                    some peaks are climbed, others are simply claimed with the
                    right key.
                  </p>
                </div>
              </div>
            </ViewportAnimation>
          </div>
        </div>
      </section>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Project image"
              width={800}
              height={600}
              className="object-contain max-w-full max-h-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 text-white rounded-full p-2 hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <ViewportAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Complete Portfolio
            </h2>
          </ViewportAnimation>

          <ViewportAnimation className="stagger-1">
            <div
              className="relative group cursor-pointer mb-8"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1jSpEldpDutkcsHHYZhJ_iXMqCQ0OQJnG?usp=drive_link",
                  "_blank"
                )
              }
            >
              <div className="relative w-full max-w-2xl mx-auto h-96 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-11%20at%2020.08.50_28bdb4fd.jpg-NixZkP0ZaFZRFht9SIPPWw2L0bhqqs.jpeg"
                  alt="View Complete Portfolio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">
                      View Complete Portfolio
                    </div>
                    <div className="font-medium">
                      Click to access Google Drive →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ViewportAnimation>

          <ViewportAnimation className="stagger-2">
            <div className="mb-8">
              <p className="text-2xl font-bold mb-4">
                Click for a different perspective
              </p>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Because sometimes the best work doesn't fit in a neat little
                portfolio box. It lives, breathes, and occasionally causes minor
                revolutions in conference rooms.
              </p>
            </div>
          </ViewportAnimation>

          <ViewportAnimation className="stagger-3">
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1jSpEldpDutkcsHHYZhJ_iXMqCQ0OQJnG?usp=drive_link",
                  "_blank"
                )
              }
            >
              Access Full Portfolio
            </Button>
          </ViewportAnimation>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ViewportAnimation>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to create something amazing?
            </h2>
          </ViewportAnimation>

          <ViewportAnimation className="stagger-1">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's turn your ideas into words that work.
            </p>
          </ViewportAnimation>

          <ViewportAnimation className="stagger-2">
            <Button
              onClick={scrollToContact}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
          </ViewportAnimation>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Rohan Manghat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
