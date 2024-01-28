import { useState, useEffect } from 'react';
import styles from './ProjectHomePage.module.scss';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

type ProjectType = {
  name: string;
  year: number;
  services: string;
  link: string;
  image: string;
  alt: string;
};

type PropsType = {
  projects: ProjectType[];
};

const ProjectHomePage = (props: PropsType): JSX.Element => {
  const { projects } = props;
  const [actualProject, setActualProject] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleScroll = (timeout: number) => {
    setIsScrolling(true);

    setTimeout(() => {
      setIsScrolling(false);
    }, timeout);
  };

  const nextProject = (timeout = 2500) => {
    if (actualProject < projects.length - 1) {
      handleScroll(timeout);
      setActualProject(actualProject + 1);
    }
  };

  const previousProject = (timeout = 2500) => {
    if (actualProject > 0) {
      handleScroll(timeout);
      setActualProject(actualProject - 1);
    }
  };

  useEffect(() => {
    const mouseWheelHandler = (e: any) => {
      if (!isScrolling) {
        e = window.event || e;
        const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

        if (delta === 1) previousProject(2500);
        if (delta === -1) nextProject(2500);
      }
    };

    let scrollYTouchMove: number[] = [];
    const touchMoveHandler = (e: any) => {
      if (!isScrolling) {
        e = window.event || e;
        scrollYTouchMove.push(e.touches[0].screenY);

        if (scrollYTouchMove.length >= 10) {
          if (scrollYTouchMove[0] > scrollYTouchMove[scrollYTouchMove.length - 1]) {
            nextProject(1500);
          } else {
            previousProject(1500);
          }

          scrollYTouchMove = [];
        }
      }
    };

    window.addEventListener('mousewheel', mouseWheelHandler, false);
    window.addEventListener('DOMMouseScroll', mouseWheelHandler, false);
    window.addEventListener('touchmove', touchMoveHandler, false);

    return () => {
      window.removeEventListener('mousewheel', mouseWheelHandler, false);
      window.removeEventListener('DOMMouseScroll', mouseWheelHandler, false);
      window.removeEventListener('touchmove', touchMoveHandler, false);
    };
  });

  const handlePreviousClick = () => {
    previousProject(2500);
  };

  const handleNextClick = () => {
    nextProject(2500);
  };

  return (
    
    <div className={styles.container}>
      {/* On fait une boucle sur tous les projets */}
      {projects.map((project, index) => {
        return (
          // On met la classe active au projet qui est en train d'être affiché et on l'enlève sinon
          <div
            key={index}
            className={`${styles.container__project__item} ${
              actualProject == index ? styles.active : ''
            }`}
          >
            <div className={styles.project__item}>
              <div className={styles.project__title}>
                {/* <NavLink to={project.link} className={styles.project__link}> */}
                  <h2 className={styles.animation__background}>{project.name}</h2>
                {/* </NavLink> */}
                <div className={styles.index__project}>
                  <div className={styles.butt}>
{actualProject > 0 && (
                  <div className={styles.prevButton} onClick={handlePreviousClick}>
                    <FaArrowLeftLong />
                  </div>
                )}
                 {actualProject < projects.length - 1 && (
                  <div className={styles.nextButton} onClick={handleNextClick}>
                    <FaArrowRightLong />
                  </div>
                )}
                </div>
                  <span>
                    <div className={styles.animation__width}></div>
                  </span>
                  <p className={styles.animation__transform_top_small}>{'0' + (index + 1)}</p>
                </div>
              </div>
              <div className={styles.item__container}>
                <div className={styles.left__container}>
                  <div className={styles.services__container}>
                 
                    <p
                      className={`${styles.project__services} ${styles.animation__transform_top_small}`}
                    >
                      {project.services}
                    </p>
                    <p
                      className={`${styles.project__year} ${styles.animation__transform_top_small}`}
                    >
                      {project.year}
                    </p>
                  </div>
                  <span className={styles.container__image}>
                    <img
                      className={styles.animation__width}
                      src={project.image}
                      alt={project.alt}
                    />
                  </span>
                </div>
                <div className={styles.right__container}>
                  
                  <div
                    className={`${styles.container__number_of_projects} ${styles.animation__transform_left_rotate}`}
                  >
                    <p className={styles.animation__transform_left}>{index + 1}</p>
                    <span></span>
                    <p className={styles.animation__transform_right}>{projects.length}</p>
                  </div>

                </div>
              </div>
            </div>

          </div>
          
        );
      })}
    </div>
               
  );
};

export default ProjectHomePage;
