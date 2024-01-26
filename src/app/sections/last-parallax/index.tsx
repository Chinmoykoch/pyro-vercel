import * as Scrollytelling from "@bsmnt/scrollytelling";
import SMILE_IMAGE from "../../../../public/images/parallax/smile.png";
import PC_IMAGE from "../../../../public/images/parallax/pc.png";

import  "./last-parallaxmodule.scss";

export const LastParallax = () => {
  return (
    <Scrollytelling.Root
      start="top bottom"
      scrub={0.75}
    >
      <section className="section">
        <div className="wrapper">
          <Scrollytelling.Waypoint
            at={50}
            tween={{
              target: ["body"],
              to: { background: "white", color: "black" },
              duration: 0.35,
            }}
          />
          <Scrollytelling.Waypoint
            at={75}
            tween={{
              target: ["#smile-image", "#pc-image"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <img
            alt="PC"
            className="pc"
            src={PC_IMAGE}
            // placeholder="blur"
            id="pc-image"
          />
          <img
            alt="Smile"
            className="smile"
            src={SMILE_IMAGE}
            // placeholder="blur"
            id="smile-image"  
          />
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 100,
              fromTo: [
                {
                  scale: 0,
                },
                {
                  ease: "linear",
                  scale: 1,
                },
              ],
            }}
          >
            <h2 className="title">
              THAT&apos;S ALL, <br />
              FOLKS
            </h2>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
