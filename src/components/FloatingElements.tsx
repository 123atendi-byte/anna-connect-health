import { motion } from "framer-motion";
import { Sparkles, Zap, Brain, Activity } from "lucide-react";

export const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, top: "15%", left: "10%", delay: 0 },
    { Icon: Zap, top: "25%", right: "15%", delay: 1 },
    { Icon: Brain, bottom: "30%", left: "8%", delay: 2 },
    { Icon: Activity, top: "45%", right: "12%", delay: 3 },
  ];

  return (
    <>
      {elements.map(({ Icon, delay, ...position }, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          className="absolute opacity-20"
          style={position}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </motion.div>
      ))}
    </>
  );
};
