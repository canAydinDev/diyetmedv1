"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import Image from "next/image";

function PersonelLogo() {
  return (
    <motion.div
      variants={fadeIn("up", 0.9)}
      initial="hidden"
      whileInView={"show"}
      whileHover={"whileHover"}
      viewport={{ once: false, amount: 0.7 }}
      className="rounded-full bg-myColor text-myColor-foreground p-2"
    >
      <Link href="/">
        <Image
          src="/images/2.png"
          width={150}
          height={150}
          alt="diyetmed-logo"
        />
      </Link>
    </motion.div>
  );
}

export default PersonelLogo;
