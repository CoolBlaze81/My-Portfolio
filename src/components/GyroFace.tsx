import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function GyroFace({ children }: Props) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleOrientation(e: DeviceOrientationEvent) {
      const beta = e.beta || 0;
      const gamma = e.gamma || 0;

      setRotation({
        x: beta / 8,
        y: gamma / 8,
      });
    }

    window.addEventListener("deviceorientation", handleOrientation);

    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <motion.div
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}