import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Score = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [currentRoll, setCurrentRoll] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const numbers = [1, 2, 3, 4, 5, 6];

  const handleNumberSelect = (number: number) => {
    setSelectedNumber(number);
    console.log(`Selected number: ${number}`);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      toast.error("Please select a number first!");
      return;
    }

    setIsRolling(true);
    console.log("Rolling dice...");

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setCurrentRoll(roll);
      console.log(`Rolled: ${roll}`);

      if (roll === selectedNumber) {
        setScore((prev) => prev + selectedNumber);
        toast.success(`You won ${selectedNumber} points!`);
        console.log(`Score increased by ${selectedNumber}`);
      } else {
        toast.error("Try again!");
      }

      setIsRolling(false);
    }, 1000);
  };

  const resetGame = () => {
    setSelectedNumber(null);
    setCurrentRoll(null);
    setScore(0);
    console.log("Game reset");
    toast.info("Game reset!");
  };

  const renderDots = (number: number) => {
    const dotPositions = {
      1: ["center"],
      2: ["top-right", "bottom-left"],
      3: ["top-right", "center", "bottom-left"],
      4: ["top-left", "top-right", "bottom-left", "bottom-right"],
      5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
      6: ["top-left", "top-right", "middle-left", "middle-right", "bottom-left", "bottom-right"],
    };

    const getClassName = (position: string) => {
      switch (position) {
        case "center": return "col-start-2 row-start-2";
        case "top-left": return "col-start-1 row-start-1";
        case "top-right": return "col-start-3 row-start-1";
        case "middle-left": return "col-start-1 row-start-2";
        case "middle-right": return "col-start-3 row-start-2";
        case "bottom-left": return "col-start-1 row-start-3";
        case "bottom-right": return "col-start-3 row-start-3";
        default: return "";
      }
    };

    return dotPositions[number as keyof typeof dotPositions].map((position, index) => (
      <div
        key={index}
        className={`w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full ${getClassName(position)}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-8 px-4">
      <div className="max-w-md mx-auto bg-gradient-to-br from-white via-gray-200 to-gray-100 rounded-xl shadow-md p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Dice Game</h1>
          <p className="text-gray-600 mb-4">Score: {score}</p>

          <button
            onClick={() => alert("1. Select a number (1-6)\n2. Click the dice to roll\n3. If your number matches the roll, you get points equal to that number\n4. Try to get the highest score!")}
            className="mb-4 px-4 py-2 border rounded text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400"
          >
            Show Rules
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => handleNumberSelect(number)}
              className={`h-12 text-lg border rounded ${selectedNumber === number ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white" : "bg-white text-gray-700"}`}
            >
              {number}
            </button>
          ))}
        </div>

        <motion.div
          className="w-32 h-32 mx-auto bg-white border-2 border-gray-300 rounded-xl grid grid-cols-3 grid-rows-3 gap-2 p-4 cursor-pointer"
          onClick={rollDice}
          animate={{
            rotate: isRolling ? 360 : 0,
            scale: isRolling ? 0.8 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {currentRoll && renderDots(currentRoll)}
        </motion.div>

        <div className="text-center mt-6">
          <button
            onClick={resetGame}
            className="w-full px-4 py-2 border rounded text-white bg-gradient-to-r from-red-400 to-pink-500 hover:from-pink-500 hover:to-red-400"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Score;
