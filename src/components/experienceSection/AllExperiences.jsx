import SingleProject from "../projectsSection/SingleProject"; 
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [];

const AllProjects = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {projects.map((project, index) => {
        return (
          <>
            <SingleProject key={index} project={project} />
            {index < 4 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllProjects;
