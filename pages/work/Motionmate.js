import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MotionMateProject() {
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
      src: "/images/motionmate/motionmatecad.png",
      alt: "MotionMate CAD",
    },

    // Add more images if needed
  ];
  const [whatSlide, setWhatSlide] = useState(0);

  // Slideshow images for "How was the design journey?"
  const journeyImages = [
    {
      src: "/images/motionmate/math_motionmate.jpg",
      alt: "MotionMate Math",
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
        <title>Motionmate - Personal Project</title>
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
            Motionmate - Personal Project
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
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Project Management</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Root Cause Analysis</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Six Sigma</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Additive Manufacturing</span>

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
                  People using social media, or involved with
 content creation depend on people to film for
 them, tracking there movement within a set
 frame. This product resolves this issue of
 human aid by creating an automated system to
 track yourself when recording  
                </li>

              </p>
            </div>
            {/* Slideshow for What is it? */}
            <div className="relative w-full mt-6 md:mt-0 flex items-center justify-center" style={{ minHeight: '350px' }}>
              <img
                src={whatImages[whatSlide].src}
                alt={whatImages[whatSlide].alt}
                className="rounded-lg shadow-md w-full h-auto max-h-[80vh] object-contain"
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
              Researched methods of linear and
 rotational movement through
 motors
            </li>
            <li>
              Complete <b>gear analysis</b> to
 determine necessary torque
 required to complete both rotations
 within the X-Y plane
            </li>
            <li>
              Design and 3d print protype using
              <b> Solidworks</b>
            </li>
            <li>
             Develop code for integrated
 <b>computer vision system</b>
            </li>


          </ul>
          {/* Slideshow */}
          <div className="relative w-full mx-auto mb-8 flex items-center justify-center" style={{ minHeight: '350px' }}>
            <img
              src={journeyImages[slide].src}
              alt={journeyImages[slide].alt}
              className="rounded-lg shadow-md w-full h-auto max-h-[80vh] object-contain"
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
          </div>
        </section>

        {/* Solution / Accomplishments */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-2">Solution & Accomplishments</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-800">
            <li>
             Developed prototype design for 3d
 printing   
 </li>
            <li>
             Calculated a feasible servo motor
 torque and gear pitch to handle a 
<b>maximum of 8.6kg</b>
            </li>

          </ul>
        </section>
      </div>
    </>
  );
}