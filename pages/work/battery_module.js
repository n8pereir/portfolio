
import Head from "next/head";

import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function battery_moduleProject() {
  const router = useRouter();
  // Slideshow images for "What is it?"
  const whatImages = [
    {
      src: "/images/batterymodule/assembly.png",
      alt: "Assembly",
    },

    // Add more images if needed
  ];
  const [whatSlide, setWhatSlide] = useState(0);

  // Slideshow images for "How was the design journey?"
  const journeyImages = [
    {
      src: "/images/batterymodule/cellholder.png",
      alt: "cell holder",
    },
    {
      src: "/images/batterymodule/fea.png",
      alt: "fea",
    },

    // Add more images if needed
  ];
  const [slide, setSlide] = useState(0);


  const prevSlide = () => setSlide((slide - 1 + journeyImages.length) % journeyImages.length);
  const nextSlide = () => setSlide((slide + 1) % journeyImages.length);

  const prevWhatSlide = () =>
    setWhatSlide((whatSlide - 1 + whatImages.length) % whatImages.length);
  const nextWhatSlide = () =>
    setWhatSlide((whatSlide + 1) % whatImages.length);

  // Handlers to navigate to home and scroll to section
  const handleWorkScroll = () => {
    router.push('/?scrollTo=work');
  };
  const handleContactScroll = () => {
    router.push('/?scrollTo=contact');
  };

  return (
    <>
      <Head>
        <title>Battery Workforce Team - Module Design</title>
      </Head>
      <Header handleWorkScroll={handleWorkScroll} handleContactScroll={handleContactScroll} />

      {/* Parallax Banner Section */}
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/batterymodule/fea.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            Battery Workforce Team - Module Design
          </h1>
        </div>
      </div>

      {/* Main content with skills as bubbles in their own section */}
      <div className="max-w-6xl mx-auto flex flex-col mt-10 px-4">
        {/* Skills Section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Skills I utilized</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Solidworks</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Ansys</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Fluid Dynamics</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">MODS</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">GD&amp;T</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Project Management</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Design of Experiments</span>
          </div>
        </section>
        {/* What is it? */}
        <section className="mb-8">
          <div className="flex flex-col gap-2 mb-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-bold">What is it?</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="mb-0 text-gray-800">
                As a mechanical design member for the University of Waterloo's battery workforce challenge team, I worked on the conceptual and design stage of developing the battery module.The challenge is across multiple universities, with the goal of developing an efficient battery pack capable of powering a Stellantis vehicle. Ultimately I was in charge of designing the module, cell holder, serpentine tubing and material selection based on competition guidelines.
              </p>
            </div>
            {/* Slideshow for What is it? */}
            <div className="relative w-full md:w-56 mt-6 md:mt-0 flex items-center justify-center" style={{ minHeight: '200px' }}>
              <img
                src={whatImages[whatSlide].src}
                alt={whatImages[whatSlide].alt}
                className="rounded-lg shadow-md w-full h-auto max-h-[400px] object-contain"
                style={{ background: '#fff' }}
              />
              {/* Arrows */}
              {whatImages.length > 1 && (
                <>
                  <button
                    onClick={prevWhatSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow transition"
                    aria-label="Previous image"
                    style={{ zIndex: 2 }}
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M13 17l-5-5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    onClick={nextWhatSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow transition"
                    aria-label="Next image"
                    style={{ zIndex: 2 }}
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M7 7l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </>
              )}
              {/* Dots */}
              {whatImages.length > 1 && (
                <div className="flex justify-center gap-1 absolute left-1/2 -translate-x-1/2" style={{ bottom: 8, width: '100%' }}>
                  {whatImages.map((img, idx) => (
                    <button
                      key={img.src}
                      onClick={() => setWhatSlide(idx)}
                      className={`w-2 h-2 rounded-full ${whatSlide === idx ? "bg-blue-600" : "bg-gray-300"} transition`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How was the design journey? */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-2">How was the design journey?</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li>
              Used Solidworks to design the module assembly, using parametrics for accessibility. In addition learning correct geometry to fit max amount of cells per module tray constraints.
            </li>
            <li>
              Determined PC filament election for cell holder ensuring flamablility and structural load criteria are met.
            </li>

          </ul>
          {/* Slideshow */}
          <div className="relative w-full md:w-2/3 mx-auto mb-8 flex items-center justify-center" style={{ minHeight: '250px' }}>
            <img
              src={journeyImages[slide].src}
              alt={journeyImages[slide].alt}
              className="rounded-lg shadow-md w-full h-auto max-h-[500px] object-contain"
              style={{ background: '#fff' }}
            />
            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
              aria-label="Previous image"
              style={{ zIndex: 2 }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
              aria-label="Next image"
              style={{ zIndex: 2 }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Dots */}
            <div className="flex justify-center gap-2 absolute left-1/2 -translate-x-1/2" style={{ bottom: 12, width: '100%' }}>
              {journeyImages.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => setSlide(idx)}
                  className={`w-3 h-3 rounded-full ${slide === idx ? "bg-blue-600" : "bg-gray-300"} transition`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solution / Accomplishments */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-2">Solution & Accomplishments</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li>
              Successfully designed a battery module that meets competition requirements, including cooling, manufacturability and assembly.
            </li>
            <li>
              Learned the importance of working between cross functional teams, understanding how to design with aspects of incorporating electrical design and other safety considerations.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}