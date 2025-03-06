"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// This hook calculates a global opacity based on window.scrollY.
// In this example, it fades in from 0 to 300px scroll, stays at full opacity until 1000px,
// then fades out gradually.
const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newOpacity = 1;
      if (scrollY < 300) {
        newOpacity = scrollY / 300;
      } else if (scrollY > 1000) {
        newOpacity = Math.max(0, 1 - (scrollY - 1000) / 300);
      }
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return opacity;
};

const GlobalFadeWrapper = ({ children }) => {
  const opacity = useScrollOpacity();
  return (
    <motion.div style={{ opacity }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
};

export default GlobalFadeWrapper;
