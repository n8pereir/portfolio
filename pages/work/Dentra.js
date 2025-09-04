import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function DentraProject() {
  const router = useRouter();
  // Slideshow images for "What is it?"
  const whatImages = [
    {
      src: "/images/dentra_prod.jpg",
      alt: "Dentra Prototype",
    },
        {
      src: "/images/orange_render.png",
      alt: "Dentra Prototype",
    },
    // Add more images if needed
  ];
  const [whatSlide, setWhatSlide] = useState(0);

  // Slideshow images for "How was the design journey?"
  const journeyImages = [
    {
      src: "/images/assembly.png",
      alt: "Dentra Assembly",
    },
    {
      src: "/images/circuit.png",
      alt: "Dentra PCB",
    },   
     {
      src: "/images/mold_cad.png",
      alt: "Dentra Mould CAD",
    },
        {
      src: "/images/mould.jpg",
      alt: "Dentra Mould",
    },
        {
      src: "/images/padding.jpg",
      alt: "Dentra Padding",
    },
        {
      src: "/images/lens_compare.png",
      alt: "Dentra Lens Comparison",
    },
        {
      src: "/images/teeth.jpg",
      alt: "Dentra Teeth",
    },
    // Add more images if needed
  ];
  const [slide, setSlide] = useState(0);

  // Slideshow images for "Solution & Accomplishments"
  const solutionImages = [
    {
      src: "/images/cornerstone win.jpg",
      alt: "Dentra Business",
    },
    {
      src: "/images/Dentra_blue.png",
      alt: "Dentra Award",
    },
    // Add more images if needed
  ];
  const [solutionSlide, setSolutionSlide] = useState(0);

  const prevSlide = () => setSlide((slide - 1 + journeyImages.length) % journeyImages.length);
  const nextSlide = () => setSlide((slide + 1) % journeyImages.length);

  const prevSolutionSlide = () => setSolutionSlide((solutionSlide - 1 + solutionImages.length) % solutionImages.length);
  const nextSolutionSlide = () => setSolutionSlide((solutionSlide + 1) % solutionImages.length);

  const prevWhatSlide = () => setWhatSlide((whatSlide - 1 + whatImages.length) % whatImages.length);
  const nextWhatSlide = () => setWhatSlide((whatSlide + 1) % whatImages.length);

  return (
    <>
      <Head>
        <title>Dentra - AI Oral Diagnostic Tool</title>
      </Head>
      <Header
        handleWorkScroll={() => router.push('/?scrollTo=work')}
        handleAboutScroll={() => router.push('/?scrollTo=about')}
        handleContactScroll={() => router.push('/?scrollTo=contact')}
      />

      {/* Parallax Banner Section */}
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/teeth.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            DENTRA – AI ORAL HEALTH PLATFORM
          </h1>
        </div>
      </div>

      {/* Main content with skills as bubbles in their own section */}
      <div className="max-w-6xl mx-auto flex flex-col mt-10 px-4">
        {/* Skills Section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Skills I utilized</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Optical Design</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Altium Deisgn</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">SolidWorks</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Deep Learning</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Business Strategy</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Product Management</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Product Design</span>
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
                Dentra began with a shared frustration: doing
                everything right yet still being blindsided by cavities
                or gum problems. Millions face the same uncertainty.
                Other areas of health have real time feedback, but
                oral health remains guesswork between cleanings.
                Our product is an AI powered oral health platform,
                giving people clarity to act early, confidence in their
                routines, and the power to prevent problems before
                they start. Dentra is making proactive oral care
                accessible for everyone. I took this problem as a challenge to learn how to develop a product from scratch and understand how a startup functions.
              </p>
            </div>
            {/* Slideshow for What is it? */}
            <div className="relative w-full md:w-56 h-100 mt-6 md:mt-0">
              <img
                src={whatImages[whatSlide].src}
                alt={whatImages[whatSlide].alt}
                className="rounded-lg shadow-md w-full h-100 object-cover"
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
                <div className="flex justify-center mt-2 gap-1 absolute bottom-2 left-1/2 -translate-x-1/2">
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
              As the main founder, I was in charge of managing the hardware and software side of the development ensuring everyone stayed on target and achieved ideal deliverables for our planned out phases of prototyping
            </li>
            <li>
              Successfully able to complete <b>90% of hardware</b> POP by July 2025
            </li>
            <li>
              Successfully utilized <b>Quantitative light fluorescence</b> and optical filtration to detect levels of plaque build up, being the first of its kind to be adaptable to everyday phones
            </li>
            <li>
              Finalized circuit design with hardware members and prepped <b>PCB design allowing for full charging</b> capabilities with low power consumption
            </li>
            <li>
              Managed software team to ensure basic app integration and deep learning model has been setup
            </li>
            <li>
              Led validation of dataset to ensure <b>CNN segmentation correctly identifies plaque</b>
            </li>
          </ul>
          {/* Slideshow */}
          <div className="relative w-full md:w-2/3 mx-auto mb-8">
            <img
              src={journeyImages[slide].src}
              alt={journeyImages[slide].alt}
              className="rounded-lg shadow-md w-full h-100 object-cover"
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
            <div className="flex justify-center mt-4 gap-2">
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
              Achieved grant by Conrad business school, receiving <b>two paid interns</b> for the spring term, <b>total of $10,000 investment</b> from them
            </li>
            <li>
              Achieved <b>cornerstone award</b> for having well planned problem space and product idea, <b>receiving $500 in funding</b>
            </li>
            <li>
              Learned how to manage a team effectively, ensuring both interns and team leads were on task and had the correct guidance for the idea
            </li>
            <li>
              Learned many skills around <b>optical designing, casting, pcb design and crucial manufacturing processes</b> to ensure low cost and simplicity for the product
            </li>
            <li>
              Developed <b>product design</b> skills to ensure aesthetic and form factor was attracting to our demographic
            </li>
            <li>
              Created a business model, ran design sprints, and created a value go-to-market plan to gain understanding of what it takes to create a successful startup
            </li>
          </ul>
          {/* Solution Slideshow */}
          <div className="relative w-full md:w-2/3 mx-auto mb-8">
            <img
              src={solutionImages[solutionSlide].src}
              alt={solutionImages[solutionSlide].alt}
              className="rounded-lg shadow-md w-full h-100 object-cover"
            />
            {/* Arrows */}
            <button
              onClick={prevSolutionSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
              aria-label="Previous image"
              style={{ zIndex: 2 }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextSolutionSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
              aria-label="Next image"
              style={{ zIndex: 2 }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {solutionImages.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => setSolutionSlide(idx)}
                  className={`w-3 h-3 rounded-full ${solutionSlide === idx ? "bg-blue-600" : "bg-gray-300"} transition`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}