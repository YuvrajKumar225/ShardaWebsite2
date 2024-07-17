import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TeamPeople from "../../../utils/TimPeople";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Team = () => {
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
    <div className="py-16 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-accent">Our Great Team</h3>
        <h1 className="text-4xl font-semibold text-center">
          Our <span className="text-primary">Team</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {TeamPeople?.map((TeamPerson) => (
          <div
            key={TeamPerson.id}
            className={`${
              TeamPerson.id % 2 === 0
                ? "bg-base-100"
                : "bg-base-100"
            } rounded-lg p-6 duration-300`}
          >
            <div className="mx-auto text-center w-45">
              {TeamPerson.icon}
            </div>
            <div className="relative bg-white shadow-lg bottom-8">
              <h2 className="text-[20px] font-semibold text-center">
                {TeamPerson.title}
              </h2>
              <div className="text-center">
                <div
                  className="w-20 h-[1px] bg-primary mx-auto"
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto !important",
                  }}
                ></div>
              </div>
              <p className="text-accent text-[15px] text-center">
                {TeamPerson.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
