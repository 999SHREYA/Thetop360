


import { useRef, useState, useEffect } from "react";

const rewards = [
  "🏆 Big Prize Entry",
  "🎟 +0.2 Raffle Entries",
  "💰 5 Credits",
];

export default function ScratchCard() {
  const canvasRef = useRef(null);
  const [scratched, setScratched] = useState(false);
  const [reward, setReward] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 256;
    canvas.height = 128;

    ctx.fillStyle = "#B0B0B0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const handleScratch = (e) => {
    if (scratched) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fill();

    checkScratchProgress();
  };

  const checkScratchProgress = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparentPixels = 0;
  
    for (let i = 3; i < pixels.data.length; i += 4) {
      if (pixels.data[i] < 128) transparentPixels++;
    }
  
    const totalPixels = canvas.width * canvas.height;
    const percent = (transparentPixels / totalPixels) * 100;
  
    if (percent > 40 && !scratched) {
      const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
      setReward(randomReward);
      setScratched(true);
  
      
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 200); 
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center max-w-sm p-6 mx-auto mt-20 bg-white rounded shadow-md">
      <h2 className="mb-4 text-xl font-bold text-primary font-inter">Scratch & Win</h2>

      <div className="relative w-[256px] h-[128px] rounded overflow-hidden border border-gray-400">
        <div className="absolute inset-0 z-0 flex items-center justify-center text-lg font-semibold text-black bg-yellow-200">
          {scratched ? reward : "🎁 Your Reward!"}
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 touch-none"
          onMouseMove={handleScratch}
          onTouchMove={handleScratch}
        />
      </div>

      {scratched && (
        <p className="mt-4 text-sm text-gray-600 font-inter">
          You have revealed: <strong>{reward}</strong>
        </p>
      )}
    </div>
  );
}

