import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold"></h1>
          <div className="mt-10">
            <h1 className="text-2xl tablet:text-3xl laptop:text-4xl laptopl:text-6xl text-extrabold">
              I am open to new opportunities
            </h1>
            <h1 className="text-2xl tablet:text-3xl laptop:text-4xl laptopl:text-6xl text-extrabold">
              Lets Connect!
            </h1>
            
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Designed and Developed by{" "}
        
          <a className="underline underline-offset-1"> Nathan Pereira</a>
        
      </h1>
    </>
  );
};

export default Footer;
