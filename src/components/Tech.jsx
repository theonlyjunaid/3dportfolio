import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        window.innerWidth > 768 ? technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
        )) : technologies.slice(4,10).map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))
      }
    </div>
  );
};

export default SectionWrapper(Tech, "");