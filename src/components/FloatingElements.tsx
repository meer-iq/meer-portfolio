import { motion } from "framer-motion";

const FloatingElements = () => {
  const elements = [
    { id: 1, x: "10%", y: "20%", delay: 0, size: "w-12 h-12" },
    { id: 2, x: "80%", y: "30%", delay: 1, size: "w-16 h-16" },
    { id: 3, x: "20%", y: "70%", delay: 2, size: "w-8 h-8" },
    { id: 4, x: "90%", y: "80%", delay: 0.5, size: "w-14 h-14" },
    { id: 5, x: "60%", y: "15%", delay: 1.5, size: "w-10 h-10" },
    { id: 6, x: "5%", y: "50%", delay: 2.5, size: "w-6 h-6" },
    { id: 7, x: "75%", y: "60%", delay: 1.8, size: "w-12 h-12" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} rounded-full bg-gradient-primary opacity-20 blur-sm`}
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + element.id,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10],
            x: [-5, 5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Larger floating shapes with enhanced animations */}
      <motion.div
        className="absolute w-32 h-32 border border-primary/20 rounded-xl backdrop-blur-sm"
        style={{ left: "70%", top: "60%" }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 border-2 border-secondary/30 rounded-full backdrop-blur-sm"
        style={{ left: "15%", top: "50%" }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.8, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-20 h-20 bg-gradient-secondary rounded-full opacity-10 blur-xl"
        style={{ left: "40%", top: "25%" }}
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-28 h-28 bg-accent/20 rounded-full opacity-20 blur-2xl"
        style={{ left: "85%", top: "40%" }}
        animate={{
          x: [-25, 25, -25],
          y: [-20, 20, -20],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default FloatingElements;