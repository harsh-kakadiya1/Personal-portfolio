import { motion } from "framer-motion";

const blobTransition = {
  duration: 16,
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "mirror",
};

export const Component = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.28),transparent_42%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.24),transparent_44%),linear-gradient(180deg,#020617_0%,#01030a_45%,#000000_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <motion.div
        className="absolute -left-1/4 -top-1/3 h-[75vh] w-[75vh] rounded-full bg-blue-500/16 blur-3xl"
        animate={{ x: [0, 90, 20], y: [0, 70, 30], scale: [1, 1.08, 0.98] }}
        transition={blobTransition}
      />

      <motion.div
        className="absolute -right-1/4 top-1/4 h-[70vh] w-[70vh] rounded-full bg-cyan-300/14 blur-3xl"
        animate={{ x: [0, -80, -25], y: [0, 55, -20], scale: [1, 0.94, 1.05] }}
        transition={{ ...blobTransition, duration: 18 }}
      />

      <motion.div
        className="absolute left-1/3 bottom-[-28vh] h-[60vh] w-[60vh] rounded-full bg-white/8 blur-3xl"
        animate={{ x: [0, 50, -30], y: [0, -40, -10], scale: [1, 1.06, 0.96] }}
        transition={{ ...blobTransition, duration: 20 }}
      />
    </div>
  );
};
