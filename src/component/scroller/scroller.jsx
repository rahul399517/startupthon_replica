"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ScrollVideo = ({
  frames,
  containerHeight = 3000,
  speedMultiplier = 0.5 // Lower value slows down frame change
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const offsetTop = containerRef.current.offsetTop;  // This show form where out container start 
    let progress =
      (window.scrollY - offsetTop) / (containerHeight / speedMultiplier);

      //  here  window.scrolly means how far will you window scroll 
    progress = Math.max(0, Math.min(progress, 0.99)); //it show that the progress should never go below 0 and above 0.99
    setScrollProgress(progress);
    const frameIndex = Math.floor(progress * (frames.length - 1)); // it allows us to alway get  whole number 
    setCurrentFrame(frameIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [frames, speedMultiplier, containerHeight]);

  return (
    <div ref={containerRef} style={{ height: containerHeight }}>
      <motion.img
        src={frames[currentFrame]}
        alt={`Frame ${currentFrame}`}
        initial={{ opacity: 0, scale: 1, rotate: 0, x: 0 }}
        animate={{
          opacity: 1,
          scale: 1 + scrollProgress * 0.05,
          rotate: scrollProgress * 2,
          x: scrollProgress * 20
        }}
        transition={{ type: "spring", stiffness: 20, damping: 30 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1
        }}
      />
    </div>
  );
};

export default ScrollVideo;
