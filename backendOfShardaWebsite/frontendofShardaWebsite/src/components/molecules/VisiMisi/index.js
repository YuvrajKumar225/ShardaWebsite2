import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import visionMission from "../../../utils/visiMisi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const VisionMission = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <div className="py-16 parent bg-neutral">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-accent">Goals & Direction</h3>
        <h1 className="text-4xl font-semibold text-center">
          Vision <span className="text-primary">& Mission</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {visionMission?.map((visionMissionItem) => (
          <div
            key={visionMissionItem.id}
            className={`${
              visionMissionItem.id % 2 === 0
                ? "bg-base-100 impactfull-card shadow-lg"
                : "bg-base-100 impactfull-card shadow-lg"
            } rounded-lg p-6 duration-300`}
          >
            <div className="w-40 mx-auto mb-4 text-center">
              {visionMissionItem.icon}
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {visionMissionItem.title}
            </h2>
            <p className="text-accent">{visionMissionItem.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VisionMission;
