
import { motion } from "framer-motion";
import IMG from "../assets/dices 1.png";

type StartGameProps = {
  toggle: () => void;
};

function StartGame({ toggle }: StartGameProps) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <motion.div
        className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src={IMG}
          alt="Dice"
          className="w-40 h-40"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          DICES GAME
        </motion.h1>
        <motion.button
          className="px-6 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Play Now
        </motion.button>
      </motion.div>
    </div>
  );
}

export default StartGame;
