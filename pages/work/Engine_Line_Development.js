import Head from "next/head";
import Header from "../../components/Header";
import { useState } from "react";
import { useRouter } from "next/router";

export default function engineagvproject() {
  const router = useRouter();
  const handleWorkScroll = () => {
    router.push('/?scrollTo=work');
  };
  const handleContactScroll = () => {
    router.push('/?scrollTo=contact');
  };
  // Only keep two images for the main slideshow
  const whatImages = [
    {
      src: "/images/agv/p1.png",
      alt: "AGV Prototype",
    },
    {
      src: "/images/agv/p2.png",
      alt: "AGV2",
    },
  ];
  const [whatSlide, setWhatSlide] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const prevWhatSlide = () => setWhatSlide((whatSlide - 1 + whatImages.length) % whatImages.length);
  const nextWhatSlide = () => setWhatSlide((whatSlide + 1) % whatImages.length);

  return (
    <>
      <Head>
        <title>Engine Line Development - Toyota</title>
      </Head>
  <Header handleWorkScroll={handleWorkScroll} handleContactScroll={handleContactScroll} />

      {/* Parallax Banner Section */}
      <div
        className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage: "url('/images/toyota.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            Engine Line Development
          </h1>
        </div>
      </div>

      {/* Main content: What is it? and normal slideshow */}
      {!fullscreen && (
        <div className="max-w-4xl mx-auto flex flex-col mt-10 px-4">
          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">Skills I utilized</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">AutoCAD</span>
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Project Management</span>
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Root Cause Analysis</span>
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Six Sigma</span>
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">Data Analysis</span>
            </div>
          </section>
          <h2 className="text-2xl font-bold mb-4">What is it?</h2>
          <p className="mb-6 text-gray-800">This project involved the design and development of an AGV (Automated Guided Vehicle) for engine line automation at Toyota. The images below show the prototype and design iterations. I took this project as an intitiave when a fellow line engineer went on vacation, I was given the chance to act as a line engineer independatly, having the chance to lead full projects.</p>
          <div className="relative w-full flex items-center justify-center" style={{ minHeight: '350px' }}>
            <img
              src={whatImages[whatSlide].src}
              alt={whatImages[whatSlide].alt}
              className="rounded-lg shadow-md w-full h-auto max-h-[500px] object-contain cursor-zoom-in"
              style={{ background: '#fff' }}
              onClick={() => setFullscreen(true)}
            />
            {/* Arrows */}
            {whatImages.length > 1 && (
              <>
                <button
                  onClick={prevWhatSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
                  aria-label="Previous image"
                  style={{ zIndex: 2 }}
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M13 17l-5-5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={nextWhatSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
                  aria-label="Next image"
                  style={{ zIndex: 2 }}
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M7 7l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </>
            )}
            {/* Dots */}
            {whatImages.length > 1 && (
              <div className="flex justify-center gap-2 absolute left-1/2 -translate-x-1/2" style={{ bottom: 12, width: '100%' }}>
                {whatImages.map((img, idx) => (
                  <button
                    key={img.src}
                    onClick={() => setWhatSlide(idx)}
                    className={`w-3 h-3 rounded-full ${whatSlide === idx ? "bg-blue-600" : "bg-gray-300"} transition`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div className="w-screen h-screen flex flex-col items-center justify-center fixed top-0 left-0 z-50 bg-black">
          <h2 className="text-2xl font-bold mb-4 text-white absolute top-8 left-1/2 -translate-x-1/2 z-50">What is it?</h2>
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-8 right-8 z-50 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow text-black"
            aria-label="Close fullscreen"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor"><path d="M6 6l16 16M6 22L22 6" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </button>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={whatImages[whatSlide].src}
              alt={whatImages[whatSlide].alt}
              className="w-full h-full object-contain cursor-zoom-out"
              style={{ background: '#111' }}
              onClick={() => setFullscreen(false)}
            />
            {/* Arrows */}
            {whatImages.length > 1 && (
              <>
                <button
                  onClick={prevWhatSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
                  aria-label="Previous image"
                  style={{ zIndex: 2 }}
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M13 17l-5-5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={nextWhatSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition"
                  aria-label="Next image"
                  style={{ zIndex: 2 }}
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M7 7l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </>
            )}
            {/* Dots */}
            {whatImages.length > 1 && (
              <div className="flex justify-center gap-2 absolute left-1/2 -translate-x-1/2" style={{ bottom: 12, width: '100%' }}>
                {whatImages.map((img, idx) => (
                  <button
                    key={img.src}
                    onClick={() => setWhatSlide(idx)}
                    className={`w-3 h-3 rounded-full ${whatSlide === idx ? "bg-blue-600" : "bg-gray-300"} transition`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}