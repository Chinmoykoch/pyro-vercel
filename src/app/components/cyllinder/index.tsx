import { gsap } from "gsap";
import * as Scrollytelling from "@bsmnt/scrollytelling";


import "./cyllindermodule.scss";
import clsx from "clsx";
import { useMapToCylinder } from "./helpers";
import { Experiment } from "../../../lib/types";

import { useViewportSize } from "../../../hooks/use-viewport";

const progress = { value: 0 };

type CyllinderProps = {
  experiments: Experiment[];
};

const itemHeight = "7vh";
const itemsInViewAtOnce = 5;
const itemsPadding = 4;

export const Cyllinder: React.FC<CyllinderProps> = ({ experiments }) => {
  const { height } = useViewportSize();
  const pinSpacerHeight = `calc(3 * ${itemHeight} * ${
    Math.max(itemsInViewAtOnce, experiments.length) + itemsPadding
  })`;

  const update = useMapToCylinder({
    target: "[data-experiment]",
    onUpdate: (element, { y, z, rotationX, opacity, data }) => {
      gsap.set(element, {
        rotateX: rotationX,
        opacity: data.progress === 0 ? opacity : 1,
        y: y,
        z: z,
        attr: { ["data-state"]: data.progress != 0 ? "active" : "disabled" },
      });
    },
    config: {
      cylinderRadius: height / 3.6,
      availableRadians: (Math.PI / 7) * experiments.length,
    },
  });

  return (
    <Scrollytelling.Root
      scrub={0.75}
      callbacks={{
        onRefresh: () => update(progress.value),
      }}
    >
      <div
        className="csection"
        style={{
          height: pinSpacerHeight,
        }}
      >
        <div className="cpin">
          <div className="cyllinder">
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 100,
                target: progress,
                to: {
                  value: 1,
                  onUpdate: () => update(progress.value),
                },
              }}
            />

            {experiments.map((experiment, i) => {
              // const author = experiment.contributors[0];

              return (
                <div className={"item"} data-experiment={i} key={i}>
                  {/* title is the name   */}
                  <h2 className="title">{experiment.title}</h2>
                  <div className="info">
                    {/* <Link
                      className={s["link"]}
                      href={"https://lab.basement.studio" + experiment.href}
                      target="_blank"
                      rel="noopener"
                    > */}


                      {/* image src */}
                        <img
                          draggable={false}
                          className={clsx("image", "image")}
                          ref={experiment.og}
                          width={760}
                          height={496}
                          // quality={100}
                          alt={"dummy image"}
                        />

 

                    {/* {author?.name && (
                      <p className={s["credits"]}>
                        <span>Made by</span>{" "}
                        <Link href={author.url} target="_blank" rel="noopener">
                          {author?.name}
                        </Link>
                      </p>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Scrollytelling.Root>
  );
};

