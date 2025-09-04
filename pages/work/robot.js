import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function battery_moduleProject() {
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
      src: "/images/Robotrail/robotfullpic.png",
      alt: "Robot Rail",
    },
    {
      src: "/images/Robotrail/topview.png",
      alt: "Robot Rail Top View",
    },
    {
      src: "/images/Robotrail/railpic.png",
      alt: "Robot Rail Side View",
    }
    // Add more images if needed
  ];
  const [whatSlide, setWhatSlide] = useState(0);

  // Slideshow images for "How was the design journey?"
  const journeyImages = [
    {
      src: "/images/Robotrail/flowchart.jpg",
      alt: "flowchart",
    },
    {
      src: "/images/Robotrail/conceptsketch.png",
      alt: "Robot Rail Concept Sketch",
    },
    {
      src: "/images/Robotrail/gearpic.png",
      alt: "Robot Rail Gear",
    },
    {
      src: "/images/Robotrail/rfid.png",
      alt: "Robot Rail RFID",
    },
    {
      src: "/images/Robotrail/adaptgrippers.png",
      alt: "Robot Rail Padding",
    },
    {
      src: "/images/Robotrail/wiring.png",
      alt: "Robot Rail Wiring",
    },
    {
      src: "/images/Robotrail/gearmath.png",
      alt: "Robot Rail Gear Math",
    },
    // Add more images if needed
  ];
  const [slide, setSlide] = useState(0);

  // Slideshow images for "Solution & Accomplishments"
  const solutionImages = [
    {
      src: "/images/school_win.jpg",
      alt: "School win",
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
        <title>Battery Workforce Team - Module Design</title>
      </Head>
  <Header handleWorkScroll={handleWorkScroll} handleContactScroll={handleContactScroll} />

      {/* Parallax Banner Section */}
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/school_win.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center", // <-- changed from "top center" to "center center"
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            Robot Rail System
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
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Arduino</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Gear Design</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">MODS</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Manufacturing Design</span>
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
                In a manufacturing enviroment, a recurring challenge lies in creating a mechanism capable of gripping and handling objects of various shapes, sizes and orientations from different storage locations.
              </p>
            </div>
            {/* Slideshow for What is it? */}
            <div className="relative w-full md:w-1/2 h-100 md:h-96 mt-6 md:mt-0">
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
          <h2 className="text-xl font-bold mb-4">How was the design journey?</h2>

          {/* Design Objectives */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Design Objectives</h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>
                <b>Design Objective 1:</b> Design for range of motion to pick up objects from multiple storage areas.
              </li>
              <li>
                <b>Design Objective 2:</b> Design for compliance to pick up difficult to grasp objects.
              </li>
            </ul>
          </div>

          {/* Supplementary Criteria */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Supplementary Criteria</h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>Cost less than $300</li>
              <li>Project size greater than 2.5m</li>
              <li>Grip 3 different materials/geometries</li>
              <li>At least 4 different locations for range of motion</li>
            </ul>
          </div>

          {/* Rail System Development */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Rail System Development</h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>
                Mechanically designed the rail gear system, including gear stress analysis, CAD assemblies, and manufacturing the system through 3D printing and milling.
              </li>
              <li>
                Utilized first principles to develop
 methods to effectively move the gripper
 to designated storage locations
 effectively. 
              </li>
              <li>
                Used mechanical design textbooks to
 understand the correct gear system to
 use and evaluate gear mesh and stress
 analysis to ensure load capacity is met.
 Ensuring <b>9kg</b> of load is able to be held.      </li>
            <li>
               Created multiple variations of the design,
 effectively 3d printing final design for
 team within set timeline for integration.
            </li>
            </ul>
          </div>

          {/* Adaptive Gripper Design */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Adaptive Gripper Design</h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>
                Designed a gripper that is able to pick up any type of material and shape.
              </li>
              <li>
                Used resin elastic printing to develop CAD and prototype tips that can grip onto three test objects (smooth, rough, heavy load), including unique geometries such as a pyramid, sphere, and rod.
              </li>
              <li>
                  Designed the gripper component in a way for
 manufacturability and adjustability through interference
 tolerancing             </li>
                <li>
                 Redesigned for final product to allow wider widths for
 ensured surface contact and improved grip, allowing for additional sand filling to create
 cushion grip ability. 
                </li>
            </ul>
          </div>

          {/* RFID System and Code Integration */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">RFID System and Code Integration</h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>
                Completed research and development of RFID system, implementing a prototype board.
              </li>
              <li>
                Designed the electrical configuration and coded the logic sequence to effectively apply to the design.
              </li>
              <li>
                Integrated Arduino-based RFID for object identification and tracking.
              </li>
              <li>
                Researched and sourced RFID scanners, implementing
 a RC522 module into the Arduino microcontroller.
              </li>
              <li>
                Implemented a sequence code to ensure correct
 pickup and drop off based on coded tags that are
 placed around the rail system.
              </li>
              <li>
                Integrated sequence code into overall gripper and
 various assemblies code, to ensure smooth and
 efficient function
              </li>
            </ul>
          </div>

          {/* Cart Integration and Design */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Cart Integration and Design</h3>
            <ul className="list-disc pl-6 text-gray-800">
              <li>
                Designed the wheel alignment method and calculated correct dimensions for accurate cart to rail interfacing.
              </li>
              <li>
                Sourced and assembled the cart to interface to rail assembly.
              </li>
              <li>
                Designed shoulder bolt slots and servo
 mount for adjustability of cart to rail
 integration
              </li>
              <li>
                Sourced and assisted with
 manufacturing, ensuring dimensioning
 and tolerancing is correct for wheel to
 rail connection.
              </li>
            </ul>
          </div>

          {/* Slideshow */}
          <div className="relative w-full max-w-xl mx-auto aspect-video mb-8">
            <img
              src={journeyImages[slide].src}
              alt={journeyImages[slide].alt}
              className="rounded-lg shadow-md w-full h-full object-contain bg-white"
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
              My detailed designs of the rail and RFID system allowed for an
 easily integrated assembly to control the rest of the arm and
 gripper. Without an efficient rail system, the mechanism will not
 be able to reach design objective 1
            </li>
            <li>
              My design of the gripper tip allowed for the edge on picking up
 any object material, which is an aspect that achieved distinction
 for the “Swiss Army Knife Award” for adaptability.
            </li>
            <li>
               By quickly manufacturing majority of parts for assembly, I
 ensured the team stayed on track and reached successful
 integration.
            </li>
            <h2 className="text-xl font-bold mb-2 mt-2">What did I learn?</h2>
            <li>
              <strong>Manufacturing Methods:</strong> Learned to effectively apply the correct manufacturing
 methods from SLA resin printing to Laser cutting and machining. Understanding
 the benefits and factors for each helped me to correctly design and understand
 when to use each method as an engineer. 
            </li>
            <li>
              <strong>Design Methods:</strong> I learned the importance of designing for manufacturing, as
 most of our project utilized some form of 3d printing or machining, which
 contains constraints to building. Applying the correct tolerances and adjusting
 for factor of safety is crucial in the design phase and something I gained further
 knowledge in over the course of this project
            </li>

          </ul>
          {/* Solution Slideshow */}
          <div className="relative w-full h-100 md:h-96 mx-auto mb-8">
            <img
              src={solutionImages[solutionSlide].src}
              alt={solutionImages[solutionSlide].alt}
              className="rounded-lg shadow-md w-full h-full object-cover"
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