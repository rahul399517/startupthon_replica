"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ScrollVideo Component with a zoom effect based on scroll progress
const ScrollVideo = ({ frames, containerHeight = 3000, speedMultiplier = 1.2 }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const offsetTop = containerRef.current.offsetTop;
    let progress = (window.scrollY - offsetTop) / (containerHeight / speedMultiplier);
    progress = Math.max(0, Math.min(progress, 1));
    setScrollProgress(progress);
    const frameIndex = Math.floor(progress * (frames.length - 1));
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
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 + scrollProgress * 0.05 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
