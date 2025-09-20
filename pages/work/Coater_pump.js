import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CoaterPumpProject() {
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
      src: "/images/pump/problem.jpg",
      alt: "Coater Pump Problem",
    },

    // Add more images if needed
  ];
  const [whatSlide, setWhatSlide] = useState(0);

  // Slideshow images for "How was the design journey?"
  const journeyImages = [
    {
      src: "/images/pump/assembly.png",
      alt: "Coater Pump Assembly",
    },

    // Add more images if needed
  ];
  const [slide, setSlide] = useState(0);

  // Slideshow images for "Solution & Accomplishments"
  const solutionImages = [
    {
      src: "/images/pump/prototype.jpg",
      alt: "Coater Pump Prototype",
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
        <title>Coater Pump Design</title>
      </Head>
  <Header handleWorkScroll={handleWorkScroll} handleContactScroll={handleContactScroll} />

      {/* Parallax Banner Section */}
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/pump/prototype.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
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
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">3D printing</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Fluid Dynamics</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Material Research</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Design Of Experiments</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Project Management</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Root Cause Analysis</span>
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
                  When developing batteries, I determined through the use of root cause analysis the need for improvement of dispensing NMC coating, to increase Takt time and prevent human error.
                </li>
                <li>
                  User has to pour 10ml chemical mixture into
 roller assembly manually for 3 minutes,
 causing quality concerns and slower
 production time
                </li>
                <li>
                  Develop a method that automates pouring the
 mixture into assembly to reduce production
 time and improve quality
                </li>
              </p>
            </div>
            {/* Slideshow for What is it? */}
            <div className="relative w-full h-screen mt-6 md:mt-0">
              <img
                src={whatImages[whatSlide].src}
                alt={whatImages[whatSlide].alt}
                className="rounded-lg shadow-md w-full h-full object-cover"
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
              I researched different ways to dispense, looking into various pumps from postive displacement pumps to pnuematic and hydraulic based. Taking into account the factors of cost, liquid viscosity and volumetric flow requirements of 0.08ml/s.
            </li>
            <li>
              Once area was measured and design constraints were determined, prototype was made in house using 3d printing and Arduino with the use of a stepper motor.
                          </li>
            <li>
              To ensure the design met all requirements, a test setup was intialized to correctly set the steps per minute and height of elevation for correct volumetric flow.
            </li>
            <li>
              Teflon tubing was selected and expermented with to ensure the chemical elemnts of NMC does not corrode it overtime.
            </li>
          </ul>
          {/* Slideshow */}
          <div className="relative w-full h-screen mx-auto mb-8">
            <img
              src={journeyImages[slide].src}
              alt={journeyImages[slide].alt}
              className="rounded-lg shadow-md w-full h-full object-cover"
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
               Developed a peristaltic pump using a
 stepper motor and 3D printed assembly,
 producing a dispense of 0.1 ml/s
 consistently in 1 min 30 </li>
            <li>
              Improved production time by <b>50%</b>
            </li>
            <li>
              quality issues have reduced by <b>15%</b>
            </li>
          </ul>
          {/* Solution Slideshow */}
          <div className="relative w-full flex justify-center items-center h-screen mx-auto mb-8">
            <img
              src={solutionImages[solutionSlide].src}
              alt={solutionImages[solutionSlide].alt}
              className="rounded-lg shadow-md max-h-full max-w-full object-contain transform rotate-90 bg-white"
              style={{ backgroundColor: "white" }}
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
            <div className="flex justify-center mt-4 gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
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