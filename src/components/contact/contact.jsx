import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export function Contact()
{

    return(
        <div className="bg-black text-white h-screen max-w-screen">
            
            <div   className="flex justify-center items-center">

          
          
            <div className=" w-[400px] h-[500px] mr-[100px]">
               <DotLottieReact
      src="https://lottie.host/fda3f5a8-cf06-4cc9-a922-168ca81b2407/tkEJmE6C5Q.lottie"
      loop
      autoplay
    />
    </div>
            <div  className="">
            <h1>conatct me ! <br />
            <span>on these </span></h1>
     <div className="flex gap-5 text-2xl">
          <a href="https://github.com/f4farmaish" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/f4farmaish" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaLinkedin />
          </a>
          <a href="mailto:farmaishalifaf@gmail.com" className="hover:text-purple-400">
            <FaEnvelope />
          </a>
          <a href="tel:+923289428437" className="hover:text-purple-400">
            <FaPhoneAlt />
          </a>
  </div>


</div>

  </div>
        </div>
    )
}