import { Experiment } from "../../../lib/types";
import { Cyllinder } from "../../components/cyllinder";

import codewarsImg from '../../../assets/cylinder_img/codewars.jpg'
import constellateImg from '../../../assets/cylinder_img//constellate.jpg'
import cosplayImg from '../../../assets/cylinder_img/cosplay.jpg'
import robowarImg from '../../../assets/cylinder_img/robowar.jpg'
import stockwarzImg from '../../../assets/cylinder_img/stockwarz.jpg'
// import streetbeatsImg from '../../../../public/images/cylinder_img/streetbeats.jpg'
import visavisImg from '../../../assets/cylinder_img/visavis.jpg'
import culturalnightImg from '../../../assets/cylinder_img/culturalnight2.jpg'

const experiments = [
  {
    "title": "cultural night",
    "og": culturalnightImg
  },
  {
    "title": "cosplay",
    "og": cosplayImg
  },
  {
    "title": "codewars",
    "og": codewarsImg
  },
  {
    "title": "vis a vis",
    "og": visavisImg
  },
  {
    "title": "constellate",
    "og": constellateImg
  },


  {
    "title": "stockwarz",
    "og": stockwarzImg
  },
  {
    "title": "robo war",
    "og": robowarImg
  }
];

export const LabCylinder = () => {
    const filteredExperiments = experiments.filter(
        (experiment: any) => experiment.og !== null
      ) as Experiment[];

  return <Cyllinder experiments={filteredExperiments} />;
};
