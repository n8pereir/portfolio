import React, { useState } from "react";
import Button from "../Button";




const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      <Button onClick={() => window.open("https://www.linkedin.com/in/nathanjpereira/")}>LinkedIn</Button>
      <EmailPopupButton email="n8pereir@uwaterloo.ca" />
      {/* Add more socials as needed */}
    </div>
  );
};

// Email button with popup for copy or mailto
function EmailPopupButton({ email }) {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    setShowPopup(false);
  };

  const handleMail = () => {
    window.open(`mailto:${email}`);
    setShowPopup(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button onClick={() => setShowPopup((v) => !v)}>{email}</Button>
      {showPopup && (
        <div className="absolute z-50 bg-white border border-gray-300 rounded shadow-lg p-2 mt-2 right-0 min-w-[160px] flex flex-col">
          <button
            className="text-left px-3 py-2 hover:bg-gray-100 rounded font-medium"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy Email Address"}
          </button>
          <button
            className="text-left px-3 py-2 hover:bg-gray-100 rounded font-medium"
            onClick={handleMail}
          >
            Open in Email App
          </button>
        </div>
      )}
    </div>
  );
}

export default Socials;
