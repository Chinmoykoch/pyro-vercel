

import * as Scrollytelling from "@bsmnt/scrollytelling";
// import React, { useLayoutEffect, useRef } from 'react';
import "./heromodule.scss";
import { LogoBasement } from "../../logos/logo";
import  {CanvasWithMacModel}  from "./mac-model";

// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';
// import { toVw } from "../../../lib/utils";
// import { useMedia } from "../../../hooks/use-media";
// import { Tai_Heritage_Pro } from "next/font/google";
import Pyro from "../../../assets/pyro.png"

export const Hero = () => {
  // const isMobileSize = useMedia("(max-width: 768px)");



  // function AnimatedText() {
  //   const text = useRef(null);
  //   const mq = window.matchMedia("(max-width: 48em)");
  
  //   if(mq.matches){useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.from(text.current, {
  //       ease: "power2.in",
  //       scrollTrigger: {
  //         trigger: text.current,
  //         scrub: true,
  //         start: "top+=450px center",
  //         end: "bottom+=890px 15%",

  //       },
  //       opacity: 0,
  //       x: "-=100",
  //     });
  //   }, []);
  // }else{
  //   useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.from(text.current, {
  //       ease: "power2.in",
  //       scrollTrigger: {
  //         trigger: text.current,
  //         scrub: true,
  //         start: "top+=450px center",
  //         end: "bottom+=990px 15%",

  //       },
  //       opacity: 0,
  //       x: "-=100",
  //     });
  //   }, []);
  // }
    
  
  //   return (
  //     <div className={`${s["svg-make"]}`}> {/* Add multiple classes */}
  //       <h1 ref={text} className="when">
  //         when
  //       </h1>
  //       <h1>enchantment</h1>
  //     </div>
  //   );
  // }


  // const Mystery = () => {
  //   const text = useRef(null);


  //     useLayoutEffect(() => {
  //       gsap.registerPlugin(ScrollTrigger);
  //       gsap.from(text.current, {
  //         ease: "power2",
  //         scrollTrigger: {
  //           trigger: text.current,
  //           scrub: true,
  //           start: "top+=550px center",
  //           end: "bottom+=900px center",
  //         },
  //         opacity: 0,
  //         y: "+=20",
  //       });
  //     }, []);


  
   
  
  //   return (
  //     <div className={` ${s["svg-coolshit"]}`}> {/* Add multiple classes */}
  //       <h1 ref={text}>
  //         meets
  //       </h1>
  //       <div className="mystery"><h1 className="mystry">mystery</h1></div>
        
  //     </div>
  //   );
  // }


//   const Pyrokinesis = () => {
//     const text = useRef(null);
//     const mq = window.matchMedia("(max-width: 48em)");


//     if(mq.matches){useLayoutEffect(() => {
//       gsap.registerPlugin(ScrollTrigger);
//       gsap.from(text.current, {
//         ease: "power2.in",
//         scrollTrigger: {
//           trigger: text.current,
//           scrub: true,
//           start: "top+=450px center",
//           end: "bottom+=890px 15%",
//         },
//         opacity: 0,
//         // x: "+=100",
//       });
//     }, []);
//   }else{useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.from(
//       text.current,
      
//       { 
//         ease: "power2.in",
//         scrollTrigger: {
//           trigger: text.current,
//           scrub: true,
//           start: "top-=10vh center",
//           end: "bottom+=1090vh center",
          
//         },
//         opacity: 0,
//         // x: "+=200",
//       }
//     );
//   }, []);
// }
  
    
  
//     return (
//       <div className={`${s["svg-performs"]}`}> {/* Add multiple classes */}
//         <h1>Pyrokinesis</h1>
//         <h1 ref={text} className="year">
//           2024
//         </h1>
//       </div>
//     );
//   };



  return (
    <Scrollytelling.Root

      defaults={{ ease: "power2.inOut" }}

    >
      <Scrollytelling.Pin
        childHeight={"100vh"}
        pinSpacerHeight={"300vh"}
        pinSpacerClassName="pin-spacer"
      >
        <header className="header">
          
            <LogoBasement className="logo" />
          

          <svg
            className="star"
            fill="none"
            viewBox="0 0 679 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                fill="#fff"
                d="M209.804 73.71a12.593 12.593 0 00-3.901-8.19 12.543 12.543 0 00-8.384-3.43L0 59.49l197.519-2.6c3.12-.058 6.107-1.278 8.378-3.422s3.664-5.06 3.907-8.177L211.568 22l1.829 24.084a12.587 12.587 0 003.642 7.938 12.546 12.546 0 007.923 3.649L249 59.503l-24.038 1.833a12.542 12.542 0 00-7.923 3.644 12.59 12.59 0 00-3.642 7.936L211.568 97l-1.764-23.29z"
              />
            </g>
            <g clipPath="url(#b)">
              <path
                fill="#fff"
                d="M469.196 45.29a12.593 12.593 0 003.901 8.19 12.543 12.543 0 008.384 3.43L679 59.51l-197.519 2.6c-3.12.058-6.107 1.278-8.378 3.422s-3.664 5.06-3.907 8.177L467.432 97l-1.829-24.084a12.587 12.587 0 00-3.642-7.938 12.546 12.546 0 00-7.923-3.649L430 59.497l24.038-1.833a12.542 12.542 0 007.923-3.644 12.59 12.59 0 003.642-7.936L467.432 22l1.764 23.29z"
              />
            </g>
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 100,
                to: {
                  transformOrigin: "50% 50%",
                  rotate: 360,
                },
              }}
            >
               <svg
                className="logo"
                fill="none"
                viewBox="0 0 400 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  // x="161"  
                  // y="-30"   
                  width="80"
                  height="120"
                  src={Pyro}
                />
              </svg>
            </Scrollytelling.Animation>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M249 22H0v75h249z" />
              </clipPath>
              <clipPath id="b">
                <path fill="#fff" d="M430 97h249V22H430z" />
              </clipPath>
            </defs>
          </svg>
          <div className="cta">
            
            <pre>
              <code>To get the grooving experience </code>
            </pre>
            <div className="button">
                    
             {/* <Link  href="/sections/registration"> */}
              GET YOUR TICKETS NOW
               {/* </Link>                */}
                          
            </div>
          </div>
        </header>

        <section className="section">
          <div className="model-container">
            <CanvasWithMacModel />
          </div>

          <div className="">
            <div className="content">
              <div className="svg__container">

                {/* <AnimatedText/> */}
               
                <div className="svg-make"> {/* Add multiple classes */}
                <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: -58, ease: "power2.inout", opacity:0 },
            }}
          >
        <div className="when">
          WHEN
        </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: -21, ease: "power2.inout", opacity:1 },
            }}
          >
        <div>enchantment</div>
        </Scrollytelling.Animation>
      </div>

                {/* <Mystery/> */}

                <div className="svg-coolshit"> {/* Add multiple classes */}
                <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { yPercent: 58, ease: "power2.inout", opacity:0 },
            }}
          >
        <div>
          meets
        </div>
        </Scrollytelling.Animation>
{/* Add multiple classes */}
                <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: -5, ease: "power2.inout", opacity:1 },
            }}
          >
        <div className="mystery"><div className="mystry">mystery</div></div>
        </Scrollytelling.Animation>
      </div>
                {/* <Pyrokinesis/> */}

                <div className="svg-performs"> {/* Add multiple classes */}
                <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: 34, ease: "power2.inout", opacity:1 },
            }}
          >
        <div>Pyrokinesis</div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: {ease: "power2.inout", opacity:0 },
            }}
          >
        <div className="year">
          2024
        </div>
        </Scrollytelling.Animation>
      </div>
                
              </div>
              <div>
              </div>
              <div className="footer">
                <p></p>  
                <p>
                Pyrokinesis casts a spellbinding aura. It's a testament to the fusion of tradition and modernity,where the flames of creativity ignite hearts and minds, leaving an indelible mark on all who revel in its enchanting embrace.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
