// Cube.js
import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you are using Next.js
import cube from "@/public/assets/cube.svg";
import { cn } from "@/lib/utils";

const Cube = ({ x, y, size, position }) => (
  <motion.div
    className={`absolute ${position} z-[-1]`}
    ini={position}
    style={{
      x: x * 0.1,
      y: y * 0.09,
    }}
    transition={{ type: "inertia", delay: 1, duration: 0.8 }}
  >
    <Image src={cube} style={{ width: size }} alt="cube" />
  </motion.div>
);

export default Cube;
