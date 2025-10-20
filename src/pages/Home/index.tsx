import { motion, easeInOut } from "framer-motion";
import type { Variants, RepeatType } from "framer-motion";
import backgroundTech from "../../assets/fundo.jpeg"; // Imagem de fundo tecnológica
import logo from "../../assets/ghost-logo.png"; // Imagem do logo ghost

// Variantes para animações
const logoVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  animate: {
    opacity: 1,
    scale: 1,
    y: [0, -15, 0], // Flutuação suave
    transition: {
      opacity: { duration: 1 },
      scale: { duration: 1 },
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as RepeatType, // cast explícito para evitar erro de tipagem
        ease: easeInOut,
      },
    },
  },
};

const textVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

function Home() {
  return (
    <div
      className="w-full min-h-screen text-white overflow-hidden relative font-thin"
      style={{
        backgroundColor: "#0a0a0a", // cor abóbora escura do header
        backgroundImage: `url(${backgroundTech})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        {/* Logo animada */}
        <motion.img
          src={logo}
          alt="Ghost Logo"
          className="w-32 h-32 md:w-48 md:h-48 mb-8 bg-transparent cursor-pointer"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.2,
            filter: "drop-shadow(0 0 15px rgba(255, 123, 0, 0.8))", // cor abóbora laranja
          }}
        />


        {/* Título */}
        <motion.h1
          className="text-4xl md:text-6xl font-light mb-4 text-center tracking-wide"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Bem-vindo à <span className="text-orange-400">Ghost Tech</span>
        </motion.h1>

        {/* Texto descritivo */}
        <motion.p
          className="text-lg md:text-2xl text-center max-w-3xl mx-4 mb-8"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Apaixonado por tecnologia e buscando componentes para montar seu setup com preço justo? Na Ghost Tech, oferecemos produtos e soluções inovadoras com um toque de magia digital.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
