"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function PolicyForms() {
  return (
    <div className="flex-col justify-center items-center text-center  mb-5">
      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <p className="text-gray-600 text-sm text-center">
          Cansu Arslanbaş | Mersin | Uzman Diyetisyen
        </p>
        <p>
          İnönü mah. 1406. Sk. Taş İş Merkezi Bina no:6 İç kapı No:7, 33130
          Yenişehir/Mersin
        </p>
        <Button className="m-2 animate-bounce" variant="my_green">
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir//Diyetmed,+%C4%B0n%C3%B6n%C3%BC,+1406.+Sk.+Ta%C5%9F+%C4%B0%C5%9F+Merkezi+Kat:4+No:7,+33130+Yeni%C5%9Fehir%2FMersin/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x1527f5c077743e17:0x32fd832773082aef!3e0?sa=X&ved=1t:3747&ictx=111"
          >
            Nasıl gidebilirim?
          </Link>
        </Button>
        <p className="text-muted-foreground"> © 2025 All rights reserved.</p>
      </motion.div>
    </div>
  );
}

export default PolicyForms;
