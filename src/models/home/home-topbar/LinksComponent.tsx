"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function LinksComponent() {
  return (
    <div className="flex gap-3 p-2 m-2 hover:cursor-pointer  ">
      <div className="flex justify-center items-center gap-3 mx-3">
        <motion.a
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          whileHover={"whileHover"}
          viewport={{ once: false, amount: 0.7 }}
          href="https://www.instagram.com/diyetmed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={45} style={{ color: "#77a72b" }} />
        </motion.a>
        <motion.a
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          whileHover={"whileHover"}
          viewport={{ once: false, amount: 0.7 }}
          href="https://www.tiktok.com/@carslanbas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={45} style={{ color: "#77a72b" }} />
        </motion.a>

        <motion.a
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          whileHover={"whileHover"}
          viewport={{ once: false, amount: 0.7 }}
          href="https://www.facebook.com/diyetmed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={45} style={{ color: "#77a72b" }} />
        </motion.a>
      </div>
    </div>
  );
}

export default LinksComponent;
