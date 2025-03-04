"use client";
import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FadeOnScrollSection = ({ children }) => {
  const ref = useRef(null);
  // Adjust the "amount" value as needed (0.3 means 30% of the element is in view)
  const isInView = useInView(ref, { amount: 0.3, once: false });
  
  return (
    <AnimatePresence>
      {isInView && (
        <motion.div
          ref={ref}
          key="fadeContent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FadeOnScrollSection;
