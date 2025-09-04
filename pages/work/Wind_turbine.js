import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function WindTurbineProject() {
  const router = useRouter();
  const handleWorkScroll = () => {
    router.push('/?scrollTo=work');
  };
  const handleContactScroll = () => {
    router.push('/?scrollTo=contact');
  };
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

  const prevSolutionSlide = () =>
    setSolutionSlide((solutionSlide - 1 + solutionImages.length) % solutionImages.length);
  const nextSolutionSlide = () =>
    setSolutionSlide((solutionSlide + 1) % solutionImages.length);

  const prevWhatSlide = () =>
    setWhatSlide((whatSlide - 1 + whatImages.length) % whatImages.length);
  const nextWhatSlide = () =>
    setWhatSlide((whatSlide + 1) % whatImages.length);

  return (
    <>
      <Head>
        <title>Wind Turbine Design-Case Study</title>
      </Head>
  <Header handleWorkScroll={handleWorkScroll} handleContactScroll={handleContactScroll} />

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
            Coater Pump Design
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
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Q-Blade</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Fluid Dynamics</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Airfoil Analysis</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Ansys</span>

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
                <li>
                   Skateboarders have restricted access
 to possible electrical outlets,
 resulting in phone batteries being
 uncharged.
                </li>
                
                <li>
                   Skateboarding produces high wind
 velocities up to 30m/s that are
 unused and I believe can be
 converted to electrical energy for
 possible trickle charging for devices.
                </li>
                <li>
                  <b>Objective:</b>Create a wind turbine design,
 simulating the potential power
 (Watts) to see if this idea is feasible
                </li>
              </p>
            </div>
            {/* Slideshow for What is it? */}
            <div className="relative w-full md:w-56 h-40 mt-6 md:mt-0">
              <img
                src={whatImages[whatSlide].src}
                alt={whatImages[whatSlide].alt}
                className="rounded-lg shadow-md w-full h-40 object-cover"
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
              To see if the wind turbine is effective, I determined a set of design criteria to meet for it to charge my phone; tip speed ratio of 5-7, power output more than 1 Watt with wind velocities of 15 m/s and a 20cm rotor diameter.
            </li>
            <li>
              To correctly design the blades, I researched 2 applicable airfoil models (S07062 and SG6043) using QBlade. Ensuring the design can optimize wind speeds between 15-30m/s to allow max Clift/Cdrag, power(watts), RPM and tip speed ratio.
            </li>
            <li>
              To ensure the design met all requirements, a test setup was intialized to correctly set the steps per minute and height of elevation for correct volumetric flow.
            </li>
            <li>
              Designed assembly with Solidworks, utilizing airfoil reference SG6043 due to its superior lift coefficient.
            </li>
            <li>
              Created an assembly of the turbine hub composed of; gear assembly,
 housing, shaft and electrical generator
            </li>
            <li>
              Ensured DFM principles to allow possibility of additive manufacturing
            </li>
            <li>
             Total hub and rotor design followed within design criteria of 20cm for
 diameter and chord height of turbine blade 
            </li>

          </ul>
          {/* Slideshow */}
          <div className="relative w-full md:w-2/3 mx-auto mb-8">
            <img
              src={journeyImages[slide].src}
              alt={journeyImages[slide].alt}
              className="rounded-lg shadow-md w-full h-80 object-cover"
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
               Achieved simulation utilizing Qblade for power calculation of turbine,
 and <b>ANSYS</b> for RPM and CFD analysis </li>
            <li>
              Achieved a theoretical power output of <b>3.36 Watts/second</b> with a tip
 <b>speed ratio of 5.4 </b>
            </li>
            <li>
              This project exemplified the potential of further developing a device
 capable of utilizing wind velocities when I skateboard, providing an
 understanding of product design phases, aerodynamics and mechanical
 design.
            </li>
            <li>
               Next Steps are to prototype using additive manufacturing!
            </li>

          </ul>
          {/* Solution Slideshow */}
          <div className="relative w-full md:w-2/3 mx-auto mb-8">
            <img
              src={solutionImages[solutionSlide].src}
              alt={solutionImages[solutionSlide].alt}
              className="rounded-lg shadow-md w-full h-80 object-cover"
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