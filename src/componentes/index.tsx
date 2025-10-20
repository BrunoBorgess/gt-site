import { motion, useCycle, easeInOut } from "framer-motion";
import digitallogo from "../assets/ghost-logo.png";


const navItems = [
  "Home",
  "Nossos Produtos",
  "Sobre Nós",
  "Serviços",
  "Blog",
  "Contato",
  "Eventos",
];

// Variantes para a sidebar mobile
const sidebarVariants = {
  open: {
    x: 0,
    transition: { duration: 0.5, ease: easeInOut },  // <-- aqui usa o easing importado
  },
  closed: {
    x: "-100%",
    transition: { duration: 0.5, ease: easeInOut },
  },
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="bg-[#0a0a0a] text-white py-6 relative z-50 shadow-lg shadow-orange-900/40">
      <nav className="flex items-center h-36 px-8 max-w-[1400px] mx-auto">
        {/* LOGO ANIMADA */}
        <motion.img
          src={digitallogo}
          alt="Logo Digital"
          className="object-contain w-[180px] cursor-pointer"
          initial={{ opacity: 1, x: 0, scale: 1 }}
          animate={{
            y: [-10, 10, -10], // Flutuação contínua
            rotate: [0, 3, -3, 0], // Oscilação suave
            scale: [1, 1.05, 1], // Pulso leve
          }}
          transition={{
            y: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
            rotate: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
            scale: { duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
          }}
          whileHover={{
            scale: 1.2,
            rotate: 15,
            filter: "drop-shadow(0 0 15px rgba(255, 123, 0, 0.8))", // Brilho laranja
          }}
        />

        {/* NAV LINKS DESKTOP */}
        <ul className="hidden md:flex space-x-10 text-2xl font-semibold tracking-wide ml-12">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              className="relative cursor-pointer text-white hover:text-orange-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                textShadow: "0 0 10px rgba(147, 51, 234, 0.8)", // Brilho roxo de Halloween
              }}
            >
              {item}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* BOTÃO HAMBÚRGUER MOBILE */}
        <motion.div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => toggleOpen()}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-8 h-1 bg-orange-400 mb-1 rounded"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-1 bg-orange-400 mb-1 rounded"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-1 bg-orange-400 rounded"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </nav>

      {/* SIDEBAR MOBILE */}
      <motion.div
        className="md:hidden fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] shadow-lg shadow-orange-900/40 z-50"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <ul className="flex flex-col space-y-6 p-6 text-xl font-semibold tracking-wide mt-20">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              className="relative cursor-pointer text-white hover:text-orange-400 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                x: 5,
                textShadow: "0 0 10px rgba(147, 51, 234, 0.8)", // Brilho roxo
              }}
              onClick={() => toggleOpen()}
            >
              {item}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

export default Header;