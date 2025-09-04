import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog, handleContactScroll }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Manually set your name and resume button visibility here
  const name = "Nathan Pereira";
  const showResume = true; // Set to false to hide Resume button

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper navigation for resume page
  const goToHomeAndScroll = (section) => {
    if (router.pathname === "/resume") {
      router.push(`/?scrollTo=${section}`);
    } else {
      if (section === "work" && handleWorkScroll) handleWorkScroll();
      if (section === "about" && handleAboutScroll) handleAboutScroll();
      if (section === "contact" && handleContactScroll) handleContactScroll();
    }
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-extrabold p-2 laptop:p-0 link header-title text-gray-900"
              >
                {name}
              </h1>

              <Popover.Button className="mobile-menu-btn">
                <img
                  className="h-7 w-7"
                  src="/images/menu.svg"
                  alt="menu"
                />
              </Popover.Button>
            </div>
            <Popover.Panel
              className="mobile-dropdown absolute right-2 top-2 z-[9999] w-60 p-4 bg-white shadow-2xl rounded-xl border border-gray-200"
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={() => goToHomeAndScroll("work")}>Work</Button>
                  <Button onClick={() => goToHomeAndScroll("about")}>About</Button>
                  {showResume && (
                    <Button
                      onClick={() => window.open('/files/Nathan_Pereira_Resume_2025.pdf', '_blank')}
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => goToHomeAndScroll("contact")}
                    className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 transition-colors duration-200"
                    style={{
                      boxShadow: "0 4px 16px rgba(37, 99, 235, 0.25)",
                      fontWeight: 600,
                    }}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  <Button onClick={() => goToHomeAndScroll("work")}>Work</Button>
                  <Button onClick={() => goToHomeAndScroll("about")}>About</Button>
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => goToHomeAndScroll("contact")}
                    className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 transition-colors duration-200"
                    style={{
                      boxShadow: "0 4px 16px rgba(37, 99, 235, 0.25)",
                      fontWeight: 600,
                    }}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className="mt-0 hidden flex-row items-center justify-between sticky top-0 z-20 tablet:flex bg-white shadow-lg border-b border-gray-200 px-8 laptop:px-20"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0 text-gray-900 header-title mr-8 laptop:mr-20"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex gap-4 laptop:gap-8">
            <Button onClick={() => goToHomeAndScroll("work")}>Work</Button>
            <Button onClick={() => goToHomeAndScroll("about")}>About</Button>
                  {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button
              onClick={() => goToHomeAndScroll("contact")}
              className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 transition-colors duration-200"
              style={{
                boxShadow: "0 4px 16px rgba(37, 99, 235, 0.25)",
                fontWeight: 600,
              }}
            >
              Contact
            </Button>
          </div>
        ) : (
          <div className="flex gap-4 laptop:gap-8">
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button onClick={() => goToHomeAndScroll("work")}>Work</Button>
            <Button onClick={() => goToHomeAndScroll("about")}>About</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button
              onClick={() => goToHomeAndScroll("contact")}
              className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 transition-colors duration-200"
              style={{
                boxShadow: "0 4px 16px rgba(37, 99, 235, 0.25)",
                fontWeight: 600,
              }}
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
