import { useRef, useState, useEffect } from "react";
// Utility hook to detect if screen is desktop size or larger
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1280);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isDesktop;
}
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useRouter } from "next/router";

// Local Data
import data from "../data/portfolio.json";

const images = [
  '/images/cornerstone win.jpg', // This one should be more zoomed out
  '/images/orange_render_zoomedout.png',
  '/images/school_win.jpg',
  '/images/Robotrail/robotfullpic.png',
  '/images/skateboard.jpg.jpg',
  
  // Add more image paths as needed
];

function AnimatedBodyText({ text, show }) {
  // Split text into lines based on manual line breaks or by length
  // For demonstration, we'll split by commas for a "line" effect
  const lines = text.split(/, /g);

  return (
    <span>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block transition-all duration-1000 ease-out ${
            show
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: `${i * 400}ms`,
          }}
        >
          {line}
          {i < lines.length - 1 ? "," : ""}
        </span>
      ))}
    </span>
  );
}

function HeroSlideshow({ images, current }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "7rem",
        right: "3rem",
        width: "45%",
        height: "80vh",
        borderRadius: "2em",
        overflow: "hidden",
        zIndex: 2,
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        background: "transparent",
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {images.map((img, idx) => {
        let bgSize = "cover";
        let bgPosition = "center";
        if (img.includes("cornerstone win.jpg")) bgSize = "100% 100%";
        if (img.includes("batterymodule/assembly.png")) bgSize = "auto 100%";
        if (img.includes("orange_render.png")) {
          bgSize = "80% auto";
          bgPosition = "60% center";
        }
        if (img.includes("robotfullpic.png")) bgSize = "80% auto";
        return (
          <div
            key={img}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out`}
            style={{
              opacity: idx === current ? 1 : 0,
              backgroundImage: `url('${img}')`,
              backgroundSize: bgSize,
              backgroundRepeat: "no-repeat",
              backgroundPosition: bgPosition,
              borderRadius: "2em",
              transitionProperty: "opacity",
            }}
          />
        );
      })}
    </div>
  );
}

function CompanyLogoDropdown({ logo, alt, imgClass, experiences }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="w-32 h-32 bg-white rounded-lg shadow flex flex-col items-center justify-start relative cursor-pointer transition-all duration-200 group"
    >
      <div
        className="flex items-center justify-center w-full h-32 transition-transform duration-200 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-blue-400 group-hover:ring-rounded-full rounded-lg"
        onClick={() => setOpen((o) => !o)}
        tabIndex={0}
        onKeyDown={e => (e.key === "Enter" || e.key === " ") && setOpen(o => !o)}
        role="button"
        aria-expanded={open}
        style={{ outline: "none" }}
      >
        <img
          src={logo}
          alt={alt}
          className={imgClass + " transition-transform duration-200"}
          style={{ objectPosition: "center" }}
        />
      </div>
      {open && (
        <div className="absolute left-0 top-36 w-72 bg-white rounded-xl shadow-lg p-4 z-20 border border-gray-200 animate-fade-in">
          <ul className="list-disc pl-5 text-gray-700 text-sm">
            {experiences.map((exp, i) => (
              <li key={i} className="mb-2">{exp}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


function Home() {
  const email = "n8pereir@uwaterloo.ca";
  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      alert("Email address copied to clipboard!");
    }
    setShowDropdown(false);
  };
  const handleLinkedIn = () => {
    const linkedInUrl = "https://www.linkedin.com/in/nathanjpereira";
    window.open(linkedInUrl, "_blank");
    setShowDropdown(false);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const handleContactScroll = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const workRef = useRef();
  const aboutRef = useRef();
  const footerRef = useRef();
  const router = useRouter();
  // Only scroll to section if ?scrollTo=work or ?scrollTo=about is present in URL and not on initial page load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("scrollTo")) {
      if (router.query && router.query.scrollTo) {
        if (router.query.scrollTo === "work" && workRef.current) {
          window.scrollTo({
            top: workRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
          });
        } else if (router.query.scrollTo === "about" && aboutRef.current) {
          window.scrollTo({
            top: aboutRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }
  }
  , [router.query]);
  // Slideshow index
  // (already declared below, remove duplicate)
  const [showTitle, setShowTitle] = useState(false);
  const [showBody, setShowBody] = useState(false); // NEW
  const [fade, setFade] = useState(false);
  const [slide, setSlide] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setSlide(true); // Start slide
      timeout = setTimeout(() => {
        setSlideIndex((prev) => (prev + 1) % images.length);
        setSlide(false); // Reset slide after animation
      }, 1500); // 1500ms matches the slide duration
    }, 7000); // 7 seconds between slides

    setShowTitle(true);
    const bodyTimeout = setTimeout(() => setShowBody(true), 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(bodyTimeout);
    };
  }, []);
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // ...existing code...

  const isDesktop = useIsDesktop();
  return (
    <>
      <Head>
        <title>Nathan Pereira</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`relative ${data.showCursor && "cursor-none"}`}>
        {data.showCursor && <Cursor />}

        {/* Light grey bubble behind main content */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "5rem",
            width: "300vw",
            maxWidth: 1470,
            minHeight: "90vh",
            borderRadius: "2.5em",
            background: "#ffffffff", // Tailwind's gray-100
            boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
            zIndex: 0,
          }}
        ></div>

        <div className="hero-background-wrapper">
          {isDesktop && (
            <HeroSlideshow
              images={images}
              current={slideIndex}
              className="hero-slideshow"
            />
          )}
        </div>
        <div className="hero-overlay"></div>
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>

        {/* Header should be outside the container for full width */}
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />

        <div className="container mx-auto mb-10 relative z-10" style={{overflowX: 'hidden'}}>
          <div className="scale-viewport-wrapper">
            <div className="pl-1 laptop:pl-7 pt-16 flex items-center gap-6 hero-row">
              {/* Profile image as rounded rectangle */}
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-28 h-30 laptop:w-48 laptop:h-45 rounded-2xl object-cover shadow-lg profile-img"
                style={{ flexShrink: 0 }}
              />
              <div
                className={`text-left transition-all duration-1000 ease-out transform ${
                  showTitle
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{minWidth: 0}}
              >
                <h1 className="text-lg tablet:text-xl laptop:text-2xl font-medium mb-2 text-black drop-shadow-lg">
                  Welcome to my Portfolio
                </h1>
                <h1 className="text-2xl tablet:text-4xl laptop:text-5xl laptopl:text-6xl text-black font-bold drop-shadow-lg">
                  {data.name}
                </h1>
                {/* Message Me button with dropdown */}
                <div className="relative inline-block mt-8" id="message-me-hero-dropdown">
                  <button
                    className="bg-black text-white rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 transition-colors duration-200 font-semibold focus:outline-none"
                    style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)" }}
                    onClick={() => setShowDropdown((v) => !v)}
                  >
                    Message Me
                  </button>
                  {showDropdown && (
                      <div
                        className="absolute left-full top-1/2 ml-4 w-[210px] max-w-[80vw] bg-black rounded-xl shadow-2xl border border-gray-800 flex flex-col items-center animate-fade-in text-sm"
                        style={{
                          backgroundColor: '#000',
                          zIndex: 9999,
                          padding: '0.25rem 0.25rem',
                          transform: 'translateY(-50%)',
                        }}
                      >
                        <button
                          className="w-full px-3 py-2 text-left hover:bg-blue-800 rounded-t-xl transition-colors text-white font-semibold focus:outline-none cursor-pointer text-sm"
                          onClick={handleLinkedIn}
                          tabIndex={0}
                          type="button"
                        >
                          Contact via LinkedIn
                        </button>
                        <button
                          className="w-full px-3 py-2 text-left hover:bg-blue-800 rounded-b-xl transition-colors border-t border-white text-white font-semibold focus:outline-none cursor-pointer active:bg-blue-900 text-sm"
                          onClick={handleCopyEmail}
                          tabIndex={0}
                          type="button"
                          style={{userSelect: 'none'}}
                        >
                          Copy Email to Clipboard
                          <div className="text-xs text-white mt-1 select-none">{email}</div>
                        </button>
                      </div>
                  )}
                  </div>
                </div>
              </div>

              {/* Body text fades in after title */}
              <div
                className={`pl-1 laptop:pl-7 mt-6 mb-10 max-w-3xl transition-all duration-1000 ease-out ${
                  showBody ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } body-text-wrapper`}
              >
                <p className="text-3xl laptop:text-5xl text-black opacity-90 font-semibold leading-loose body-text">
                  <AnimatedBodyText
                    text="Thank you for visiting, whether you are a recruiter, student, or random person, feel free to explore and view my progression as a mechanical engineer."
                    show={showBody}
                  />
                </p>
              </div>

              {/* My Engineering Journey Timeline Section */}
              <section className="w-full flex flex-col items-center mt-40 mb-20">
                <h2 className="text-3xl laptop:text-4xl font-bold text-black mb-10">
                  My Engineering Journey
                </h2>
                
              {/* Row of 5 company logos with dropdowns */}
              <div className="w-full flex justify-center mb-0 mt-5 journey-icons-row">
                <div className="flex gap-8 flex-wrap journey-icons-inner">
                  <CompanyLogoDropdown
                    logo="/images/Dentra_Blue.png"
                    alt="Dentra"
                    imgClass="object-cover w-28 h-28"
                    experiences={[
                      "Started as a challenge to learn to develop a product and business",
                      "Dentra began with a shared frustration. Doing everything right yet still being blindsided by cavities or gum problems",
                      "Led a team of 4 engineers, acheiving $10,500 in investments for developing a intial MVP",
                    ]}
                  />
                  <CompanyLogoDropdown
                    logo="/images/Solid_battery.png"
                    alt="Solid UltraBattery"
                    imgClass="object-contain w-28 h-28"
                    experiences={[
                      "Researching and testing graphite anodes for cells, utilizing thermogravimetric analysis and X-ray fluorescence testing to determine material composition.",
                      "Designed and tested a peristaltic pump and ventilation system for optimizing the cathode coating process, achieving 50% reduction in production time, utilizing SolidWorks for design and Ansys for CFD analysis.",
                      "Filed 2 patentsDeveloped 3D-printed single and multi-layer pouch cell molds, streamlining the manufacturing process and achieving a 25% reduction in production time",
                    ]}
                  />
                  <CompanyLogoDropdown
                    logo="/images/tesla.png"
                    alt="Tesla"
                    imgClass="object-contain w-28 h-28"
                    experiences={[
                      "Led the testing and validation of POP designs to improve 60 electrolyte filling machines in Texas Gigafactory, utilizing in-depth procedures and root cause analysis to optimize designs.",
                      "Optimized manufacturing processesConducted research and spearheaded the development of an RFID system slated for integration into upcoming next-generation electrolyte machines, representing an investment of over $2.3 million. Responsibilities encompassed rigorous material testing, design work, and validation of proof of concept.",
                      "Implemented cost-saving measureConducted thorough fatigue and dispense calibration cycling tests on electrolyte pumps to pinpoint root causes and provide valuable feedback to designers. Utilized a VHX microscope for detailed analysis of degradation over time, enhancing our understanding of long-term performance.",
                    ]}
                  />
                  <CompanyLogoDropdown
                    logo="/images/toyota.jpg"
                    alt="Toyota"
                    imgClass="object-contain w-28 h-28"
                    experiences={[
                      "Had the chance to take over engine line as lead engineer was on paternity leave",
                      "Utilized Toyotas’ TBP problem analysis method to lead a cross-functional team in the complete redesign of the magnetic path for AGV navigation, optimizing route planning and eliminating potential disruptions, leading to improved overall operational reliability and a 62% decrease in AGV errors.",
                      "Engineered and implemented 3D-designed ergonomic hood jigs and fixtures, improving production efficiency andeliminating mechanical failures, resulting in $5,000 in cost savings.",
                    ]}
                  />
                  <CompanyLogoDropdown
                    logo="/images/cemcorp.jpg"
                    alt="Cemcorp"
                    imgClass="object-contain w-28 h-28"
                    experiences={[
                      "Managed plant layout projects",
                      "Prepared comprehensive process flow charts, P&ID diagrams, BOM, tie-point list, and equipment lists to aid seamless communication with stakeholders throughout the design and implementation phases of an industrial alcohol distillery plant.",
                      "Had the opportunity to act as sole mechanical designer due to the original designer being on vacation.",
                    ]}
                  />
                  <CompanyLogoDropdown
                    logo="/images/mcw.jpg"
                    alt="MCW Consultants"
                    imgClass="object-contain w-28 h-28"
                    experiences={[
                      "Drafted HVAC system plans",
                      "Worked with architects and clients",
                      "Delivered on-time project reports",
                    ]}
                  />
                </div>
              </div>
              </section>


              {/* Main content starts here */}
              <div className="flex flex-col items-start justify-center min-h-[80vh]">
                {/* Work Section - manual entry, original card style */}
                <div className="mt-10 laptop:mt-20 p-2 laptop:p-0" ref={workRef}>
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl laptop:text-4xl font-bold">A Showcase of My Work!</h1>
                    <a
                      href="/files/NathanPereiraPortfolio_2025_1.pdf"
                      download
                      className="ml-4 bg-black text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition-colors duration-200 font-semibold"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      PDF Version
                    </a>
                  </div>
                  <div className="mt-50 laptop:mt-50 grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-8">
                    {/* Manually entered Work Card 1 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/Dentra")}
                    >
                      <img
                        src="/images/orange_render.png"
                        alt="Dentra"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">Dentra</h2>
                        <p className="text-gray-600 text-lg">Product Development</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 2 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/robot")}
                    >
                      <img
                        src="/images/Robotrail/robotfullpic.png"
                        alt="Project Two"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">Robot Rail System </h2>
                        <p className="text-gray-600 text-lg">Robotics and Automation</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 3 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/Coater_pump")}
                    >
                      <img
                        src="/images/pump/assembly.png"
                        alt="Coater Pump"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">Coater Pump</h2>
                        <p className="text-gray-600 text-lg">Manufacturing/Mechanical Design</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 4 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/battery_module")}
                    >
                      <img
                        src="/images/batterymodule/assembly.png"
                        alt="Project Four"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">UWBC - Battery Module Design</h2>
                        <p className="text-gray-600 text-lg">Mechanical Design</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 5 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/Vent_design")}
                    >
                      <img
                        src="/images/vent/ventdesign.png"
                        alt="NMC Ventilation Design"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">NMC Ventilation Design</h2>
                        <p className="text-gray-600 text-lg">HVAC Design</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 6 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/Engine_Line_Development")}
                    >
                      <img
                        src="/images/toyota.jpg"
                        alt="Project Six"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">Engine AGV Development</h2>
                        <p className="text-gray-600 text-lg">Manufacturing</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 7 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/hoodjig")}
                    >
                      <img
                        src="/images/jig/tip.png"
                        alt="Project Seven"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">Hood Jig Design</h2>
                        <p className="text-gray-600 text-lg">Manufacturing Design</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 8 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/mechafinger")}
                    >
                      <img
                        src="/images/finger/cad.png"
                        alt="MechaFinger"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2"> MechaFinger - Work In Progress</h2>
                        <p className="text-gray-600 text-lg">Product Design</p>
                      </div>
                    </div>
                    {/* Manually entered Work Card 9 */}
                    <div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:shadow-2xl transition-shadow"
                      onClick={() => router.push("/work/Motionmate")}
                    >
                      <img
                        src="/images/motionmate/motionmatecad.png"
                        alt="Project Nine"
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2">MotionMate - Work In Progress</h2>
                        <p className="text-gray-600 text-lg">Product Design</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
                  <h1 className="tablet:m-10 text-3xl laptop:text-4xl font-bold mb-8 text-black drop-shadow-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>What do I Bring To the Table?</h1>
                  <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                    <ServiceCard
                      name="Product Design & Prototyping"
                      description="From concept sketches to functional prototypes, I turn ideas into tangible products using CAD, 3D printing, and hands-on iteration."
                    />
                    <ServiceCard
                      name="Manufacturing & DFM"
                      description="Experienced in designing for manufacturability, optimizing parts for cost, quality, and scalability across various processes."
                    />
                    <ServiceCard
                      name="Testing & Validation"
                      description="Skilled in setting up experiments, analyzing data, and validating designs to ensure reliability and performance."
                    />
                    <ServiceCard
                      name="Cross-Functional Collaboration"
                      description="I work closely with electrical, software, and business teams to deliver integrated solutions that meet real-world needs."
                    />
                    {/* Add, remove, or edit ServiceCard components as desired */}
                  </div>
                </div>

              

                <div className="mt-10 laptop:mt-40 p-3 laptop:p-0" ref={aboutRef}>
                  <h1 className="tablet:m-10 text-3xl font-extrabold text-black">Innovator. Problem-Solver. Mechanical Engineer.</h1>
                  <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
                  I’m Nathan, a mechanical engineer passionate about building products that push boundaries. With experience at Tesla, Toyota, and startups, I bring creativity and technical expertise to every project, from batteries and clean energy to medical devices and beyond. I thrive trying to push my limits and learn concepts and skills out of my comfort zone.
                  </p>
                </div>
              </div>
              <div ref={footerRef}>
                <Footer />
              </div>
            </div> {/* end .scale-viewport-wrapper */}
          </div> {/* end .container mx-auto ... */}
        </div> {/* end .relative ... */}
      </>
    );
}
export default Home;
