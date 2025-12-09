import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function lidar_project() {
  const router = useRouter();
  const handleWorkScroll = () => {
    router.push('/?scrollTo=work');
  };
  const handleContactScroll = () => {
    router.push('/?scrollTo=contact');
  };
  // Slideshow images for "What is it?" - lidar_slides_intro.pdf
  const whatImages = [
    {
      src: "/files/lidar_slides_intro.pdf#page=1", 
      alt: "LiDAR Mount Location on Cadillac Lyriq - Introduction",
    },
    {
      src: "/files/lidar_slides_intro.pdf#page=2", 
      alt: "LiDAR Mount Design Constraints",
    },
    {
      src: "/files/lidar_slides_intro.pdf#page=3", 
      alt: "LiDAR Mount Design Criteria",
    },
  ];
  const [whatSlide, setWhatSlide] = useState(0);

  // Slideshow images for "How was the design journey?" - lidar_slides_design.pdf
  const journeyImages = [
    {
      src: "/files/lidar_slides_design.pdf#page=4", 
      alt: "Rear Mount Sketch #2 - Chosen Design",
    },
    {
      src: "/files/lidar_slides_design.pdf#page=5", 
      alt: "Rear Mount Decision Matrix",
    },
    {
      src: "/files/lidar_slides_design.pdf#page=8", 
      alt: "New Front Mount CAD Exploded View",
    },
    {
      src: "/files/lidar_slides_design.pdf#page=11", 
      alt: "New Rear Mount CAD on Vehicle",
    },
    {
      src: "/files/lidar_slides_design.pdf#page=13", 
      alt: "ANSYS Simulation Setup and Parameters",
    },
    {
      src: "/files/lidar_slides_design.pdf#page=16", 
      alt: "Front Mount Random Vibration Stress Results",
    },
    {
      src: "/files/lidar_slides_design.pdf#page=20", 
      alt: "Rear Mount Random Vibration Stress Results",
    },
  ];
  const [slide, setSlide] = useState(0);

  // Slideshow images for "Solution & Accomplishments" - lidar_slides_integration.pdf
  const solutionImages = [
    {
      src: "/files/lidar_slides_integration.pdf#page=3", 
      alt: "Front Mount Installed on Vehicle",
    },
    {
      src: "/files/lidar_slides_integration.pdf#page=4", 
      alt: "Rear Mount Installed on Vehicle",
    },
    {
      src: "/files/lidar_slides_integration.pdf#page=6", 
      alt: "Key Lessons Learned and Takeaways",
    },
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
    
    // Helper component for PDF slides
    const PdfSlide = ({ src, alt }) => (
        <object 
            data={src} 
            type="application/pdf" 
            width="100%" 
            height="350px"
            className="rounded-lg shadow-md w-full h-auto max-h-[80vh] object-contain"
            style={{ background: '#fff' }}
        >
            <p className="text-gray-500">
                {`Image of ${alt}`} - Your browser does not support inline PDFs.
                <a href={src.split('#')[0]} target="_blank" rel="noopener noreferrer" className="text-blue-500">View PDF</a>
            </p>
        </object>
    );

  return (
    <>
      <Head>
        <title>LiDAR Mounts - Engineering Project</title>
      </Head>
  <Header handleWorkScroll={handleWorkScroll} handleContactScroll={handleContactScroll} />

      {/* Parallax Banner Section - Image updated to reflect automotive/sensor theme */}
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/lidar_sensor.jpg')", // Placeholder for a relevant image
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            LiDAR Mounts for UWAFT's Cadillac Lyriq
          </h1>
        </div>
      </div>

      {/* Main content with skills as bubbles in their own section */}
      <div className="max-w-6xl mx-auto flex flex-col mt-10 px-4">
        {/* Skills Section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Skills I utilized</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Product Design</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">FEA (ANSYS)</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Vibration Analysis</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">CAD Modeling (Siemens NX)</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Additive Manufacturing (3D Printing)</span>
                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Aesthetics & Vehicle Integration</span>
                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Project Management</span>
          </div>
        </section>

        <hr className="my-6"/>

        {/* What is it? */}
        <section className="mb-8">
          <div className="flex flex-col gap-2 mb-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-bold">What is it? ⚡️ Project Context and Goals</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <ul className="list-disc pl-5 mb-0 text-gray-800">
                <li>
                  A final-year engineering project for the **EcoCAR EV Challenge** to design and validate **front and rear mounts for LiDAR sensors** on a 2023 Cadillac Lyriq.
                </li>
                <li>
                  The LiDAR is critical for the Connected and Autonomous Vehicle (CAV) team, providing **high-resolution, two-dimensional maps** for low-speed parking and environmental sensing during competition.
                </li>
                <li>
                    The core challenge was to meet strict **functional and structural requirements** (e.g., **Field of View** ≥ 120°, **Mount Angle** ≤ 10°) while ensuring the mounts integrated with the vehicle's **premium aesthetic** and could be easily serviced.
                </li>
              </ul>
            </div>
            {/* Slideshow for What is it? */}
            <div className="relative w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center justify-center">
                <div className="w-full">
                    <PdfSlide src={whatImages[whatSlide].src} alt={whatImages[whatSlide].alt} />
                </div>
              {/* Arrows and Dots */}
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

        <hr className="my-6"/>

        {/* How was the design journey? */}
        <section className="mt-10">
          <div className="flex flex-col gap-2 mb-2 md:flex-row md:items-center md:justify-between">
                <h2 className="text-xl font-bold">How was the design journey? ⚙️ Methodology and Validation</h2>
            </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <ul className="list-disc pl-5 mb-0 text-gray-800">
                <li>
                  **Design Review & Iteration:** Rejected the legacy rear mount due to poor FOV and aesthetics. Developed four new sketches, ultimately selecting **Sketch #2** through a **Decision Matrix** for its optimal balance of manufacturability, FOV, and aesthetic integration.
                </li>
                <li>
                  **Manufacturing Challenge & Redesign:** Faced challenges with the first rear mount CAD prototype which **failed multiple 3D print attempts** due to complexity. This forced a strategic redesign to a final **one-piece modular design** focused on simplified manufacturing and premium aesthetic integration.
                </li>
                <li>
                  **Front Mount Optimization:** Modified the existing front mount design to allow for installation **without removing the front bumper**, significantly reducing the risk of damage and simplifying the integration process closer to competition.
                </li>
                <li>
                  **Structural Validation (FEA):** Utilized ANSYS for a comprehensive **vibrational analysis** linking **Static Structural** (for bolt preload), **Modal Analysis** (for natural frequency), and **Random Vibration** testing (using GM specifications) to confirm structural integrity and prevent resonance failure.
                </li>
              </ul>
            </div>
            {/* Slideshow for Design Journey */}
            <div className="relative w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center justify-center">
                <div className="w-full">
                    <PdfSlide src={journeyImages[slide].src} alt={journeyImages[slide].alt} />
                </div>
              {/* Arrows and Dots */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow transition"
                aria-label="Previous image"
                style={{ zIndex: 2 }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M13 17l-5-5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow transition"
                aria-label="Next image"
                style={{ zIndex: 2 }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M7 7l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {journeyImages.length > 1 && (
                <div className="flex justify-center mt-2 gap-1 absolute bottom-2 left-1/2 -translate-x-1/2">
                  {journeyImages.map((img, idx) => (
                    <button
                      key={img.src}
                      onClick={() => setSlide(idx)}
                      className={`w-2 h-2 rounded-full ${slide === idx ? "bg-blue-600" : "bg-gray-300"} transition`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
          </div>
            </div>
        </section>

        <hr className="my-6"/>

        {/* Solution / Accomplishments */}
        <section className="mt-10">
            <div className="flex flex-col gap-2 mb-2 md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-bold">Solution & Accomplishments ✅ Key Results</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <ul className="list-disc pl-5 mb-0 text-gray-800">
                <li>
                  **Validated Structural Integrity:** Both mounts passed the random vibration analysis. The front mount recorded a maximal stress of **0.148 MPa** and a modal frequency of **1305.4 Hz**. The rear mount recorded a maximal stress of **0.491 MPa** and a modal frequency of **575.05 Hz**, confirming a low risk of failure in operational conditions.
                </li>
                <li>
                  **Product Design Success:** Delivered fully functional **one-piece** 3D-printed mounts that significantly improved **Field of View** and **service accessibility** compared to legacy designs.
                </li>
                <li>
                  **Aesthetics & Finishing:** Successfully modified the vehicle's aesthetic elements, including the **cutting and polishing of the front bumper**, to achieve a premium, factory-integrated look for the final product.
                </li>
                <li>
                    **Project Management & Learning:** Gained critical experience in managing a large-scale project under competition constraints, learning the value of **clear communication with stakeholders** to resolve design ambiguities (e.g., the 3-inch envelope rule) and efficiently allocating **resources** (e.g., 3D printing and simulation software).
                </li>
              </ul>
            </div>
            {/* Slideshow for Solution & Accomplishments */}
            <div className="relative w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-center justify-center">
                <div className="w-full">
                    <PdfSlide src={solutionImages[solutionSlide].src} alt={solutionImages[solutionSlide].alt} />
                </div>
              {/* Arrows and Dots */}
              <button
                onClick={prevSolutionSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow transition"
                aria-label="Previous image"
                style={{ zIndex: 2 }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M13 17l-5-5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={nextSolutionSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow transition"
                aria-label="Next image"
                style={{ zIndex: 2 }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M7 7l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {solutionImages.length > 1 && (
                <div className="flex justify-center mt-2 gap-1 absolute bottom-2 left-1/2 -translate-x-1/2">
                  {solutionImages.map((img, idx) => (
                    <button
                      key={img.src}
                      onClick={() => setSolutionSlide(idx)}
                      className={`w-2 h-2 rounded-full ${solutionSlide === idx ? "bg-blue-600" : "bg-gray-300"} transition`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
        </section>
      </div>
    </>
  );
}
