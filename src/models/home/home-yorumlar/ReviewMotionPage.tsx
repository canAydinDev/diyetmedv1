"use client";
import { fadeIn } from "@/models/home/home-yorumlar/variants";

import { motion } from "framer-motion";
import ReviewsHomePage from "./ReviewsHomePage";

function ReviewMotionPage() {
  return (
    <>
      <motion.section
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <ReviewsHomePage />
      </motion.section>
    </>
  );
}

export default ReviewMotionPage;
