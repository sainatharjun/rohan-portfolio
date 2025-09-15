"use client";
import { Parallax } from "react-parallax";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ViewportAnimation } from "@/components/viewport-animation";
import { useState } from "react";
import Contact from "@/components/contact-us";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            ROHAN MANGHAT
          </div>

          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Work
            </Link>
            <button
              onClick={scrollToContact}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

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

        <div
          className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-gray-600 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/work"
              className="hover:text-gray-600 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            <button
              onClick={() => {
                scrollToContact();
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-gray-600 transition-colors duration-200 py-2 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ViewportAnimation>
              <div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent opacity-20 blur-sm">
                    <h1 className="text-6xl md:text-8xl font-bold leading-none">
                      Rohan Manghat
                    </h1>
                  </div>
                  <h1 className="relative text-6xl md:text-8xl font-bold mb-8 text-balance leading-none bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent animate-gradient">
                    Rohan Manghat
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
                  Made in English Lit. Copywriting wasn't in the curriculum. But
                  turns out, metaphors and market research go surprisingly well
                  together. Need words that don't sleep on the job? Ping me.
                </p>
              </div>
            </ViewportAnimation>
            <ViewportAnimation className="stagger-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Image
                  src="/rohan-portfolio-image.jpg"
                  alt="Rohan Manghat"
                  width={500}
                  height={600}
                  className="relative rounded-2xl w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </ViewportAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <ViewportAnimation>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              My Approach
            </h2>
          </ViewportAnimation>

          <ViewportAnimation className="stagger-1">
            <div className="flex justify-center mb-16">
              <Image
                src="/contemplative-approach.gif"
                alt="Contemplative approach"
                width={600}
                height={400}
                className="rounded-2xl w-full max-w-2xl h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ViewportAnimation>

          <div className="space-y-16">
            <ViewportAnimation className="stagger-2">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">01</h3>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">
                  How I strategise?
                </h4>
                <div className="text-gray-600 text-lg leading-relaxed space-y-2">
                  <p>
                    Let's just say, if I spill tea on my shirt, I won't just
                    grab a napkin.
                  </p>
                  <p>I'll spiral.</p>
                  <p>
                    Was it the cup size? My sleep schedule? My unresolved fear
                    of deadlines?
                  </p>
                  <p>
                    I'll track the chaos, trace the dots, and somewhere along
                    the way, boom... Root cause.
                  </p>
                  <p>
                    And once I've yanked that root out, you best believe I'll
                    plant a bigger, smarter, caffeine-proof tree in its place.
                  </p>
                  <p>One that knows where the cup holder is.</p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-3">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">02</h3>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">Copy?</h4>
                <div className="text-gray-600 text-lg leading-relaxed space-y-2">
                  <p>Writing copy is cooking without a recipe.</p>
                  <p>I know what flavours hit.</p>
                  <p>I know when to simmer and when to sizzle.</p>
                  <p>
                    Sometimes I go too spicy. Sometimes I invent a new dish.
                  </p>
                  <p>But every time?</p>
                  <p>It gets eaten up.</p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-4">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">03</h3>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">
                  Writing content
                </h4>
                <div className="text-gray-600 text-lg leading-relaxed space-y-2">
                  <p>This is like making Maggi.</p>
                  <p>You think it'll take two minutes.</p>
                  <p>
                    But then you tweak the tone, fix the flow, salt the CTA,
                  </p>
                  <p>And suddenly, it's Michelin-starred.</p>
                  <p>Still noodles. Just gourmet now.</p>
                </div>
              </div>
            </ViewportAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <ViewportAnimation>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              My Bipolar Side. Not Literally...
            </h2>
          </ViewportAnimation>

          <div className="space-y-20">
            <ViewportAnimation className="stagger-1">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-10%20222116-DM347wfhVWIdAj2xSyuHJBqa3QYhXQ.png"
                    alt="Think only about your art"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    Think only about your art
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Being born is art if you love music, cause someone who loves
                    music finds a baby crying as an art and not an annoyance.
                    See the number of perspectives in this? That is art.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-2">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-10%20221642-MBagAkjnnn2vmaRtb5iCWsZJ4hWQ8u.png"
                    alt="When you understand the game, you don't panic"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    When you understand the game, you don't panic
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    If you panic, you lack creativity. But if you don't panic,
                    it means you don't care about being creative. The only
                    option is to be arrogant when that happens.
                  </p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-3">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-10%20221402-PWBlOm1NSmaeUI7KCmmFZyJHOftf0H.png"
                    alt="There is no tomorrow"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">
                    There is no tomorrow
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    There is no tomorrow, so don't just spend your time sitting
                    inside the office. Instead, walk over to a cafe or your bed
                    and start working again. Sarcastic, I'd say.
                  </p>
                </div>
              </div>
            </ViewportAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <ViewportAnimation>
            <div className="flex justify-center">
              <div className="relative group overflow-hidden rounded-2xl">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio%20gif-mKn7YZuzYh82H8sFvi7EqpDiTKpvqC.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-w-2xl w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </ViewportAnimation>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <ViewportAnimation>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
              Featured Works
            </h2>
          </ViewportAnimation>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <ViewportAnimation className="stagger-1">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">
                  THE BRIEF
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-3 text-lg">
                  <p>
                    When I see a brief, I zoom into the audience like it's a
                    high-stakes heist.
                  </p>
                  <p>
                    What do they want? What do they scroll past? What makes them
                    pause?
                  </p>
                  <p>
                    Once I get their vibe, I let the ideas walk in dressed just
                    right.
                  </p>
                  <p>Brief understood. Mood unlocked.</p>
                  <p>Audience? Officially seen.</p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-2">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">
                  PROBLEMS
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-3 text-lg">
                  <p>I treat problems like breadcrumbs.</p>
                  <p>Each one leads me to a truth society whispers.</p>
                  <p>
                    Sometimes it's awkward. Sometimes it's genius. Always juicy.
                  </p>
                  <p>
                    I chase the real stuff. The bold stuff. The stuff behind the
                    curtain.
                  </p>
                  <p>Because truth always starts the best stories.</p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-3">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">
                  CONCEPTS
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-3 text-lg">
                  <p>Concepts start with feelings.</p>
                  <p>
                    If it doesn't stir, spark, or spike, it's just pretty noise.
                  </p>
                  <p>
                    I look for that one emotion that taps their soul (or at
                    least their screen).
                  </p>
                  <p>Then I build the idea around it.</p>
                  <p>Feel something? That's the concept talking.</p>
                </div>
              </div>
            </ViewportAnimation>

            <ViewportAnimation className="stagger-4">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-gray-900">
                  SOLUTIONS
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-3 text-lg">
                  <p>Solutions come with the spine.</p>
                  <p>I keep it straight, sharp, and unfiltered.</p>
                  <p>Style? Sure. But first, honesty.</p>
                  <p>If it works, it sticks. If it sticks, it wins.</p>
                </div>
              </div>
            </ViewportAnimation>
          </div>

          <ViewportAnimation className="stagger-5">
            <div className="text-center mt-16">
              <Link href="/work">
                <Button className="text-lg px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors duration-200">
                  View My Goods →
                </Button>
              </Link>
            </div>
          </ViewportAnimation>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-6xl font-bold mb-4">1+</h3>
              <p className="text-gray-600 text-lg">Years of experience</p>
              <p className="text-gray-500 text-sm">
                Judging by age is like targeting Gen Z with fax ads. Off-mark,
                outdated, and just plain weird. I deal in relevance, not
                wrinkles.
              </p>
            </div>
            <div>
              <h3 className="text-6xl font-bold mb-4">60+</h3>
              <p className="text-gray-600 text-lg">Projects Done</p>
              <p className="text-gray-500 text-sm">
                If you’ve got money, my words will multiply it. If you don’t,
                they’ll make sure you do.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4">
                Smoke’s on me, ideas on you.
              </h3>
              <p className="text-gray-600 text-lg">
                Ready to light up your brand?
              </p>
              <p className="text-gray-600 text-lg">Drop a line now.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href="https://www.linkedin.com/in/rohan-3492b9186"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/rohan_roan_/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849.149 3.225 1.664 4.771 4.919 4.919 1.266.059 1.645.069-4.849-.069-3.252-.148-4.771-1.691-4.919-4.919-.058-1.281-.073-1.689-.073-4.948 0-3.259.014-3.668.072-4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.069-4.949-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79 4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      <Parallax
        bgImage="/slash -rose.jpeg"
        strength={500}
        bgImageStyle={{ objectFit: "contain", width: "100%", height: "100%" }}
      >
        <div style={{ height: "800px" }} />
      </Parallax>

      <Contact />

      <section
        id="stay-connected"
        className="bg-gray-50 py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-12"
      >
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/last-img.jpeg"
            alt="Do you see how infinite you are?"
            className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold">Stay connected</h2>
          <p className="text-xl font-semibold text-gray-800">
            manghatrohan@gmail.com
          </p>
          <p className="text-gray-600">
            Slide into my inbox. It’s cooler than DMs.
          </p>
        </div>
      </section>

      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Rohan Manghat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
