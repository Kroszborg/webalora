"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function ThreatMap() {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.src = "https://threatmap.checkpoint.com/";
    }
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-gray-800"
        >
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
        </motion.div>
      )}
      <motion.iframe
        ref={mapRef}
        title="Live Threat Map"
        className="w-full h-full"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        onLoad={handleLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
