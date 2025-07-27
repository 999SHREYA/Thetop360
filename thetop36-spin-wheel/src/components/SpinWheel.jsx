import { useState } from "react";

const segments = [
  "🎟 +1 Entry",
  "🎟 +2 Entries",
  "💰 +10 Credits",
  "💰 +25 Credits",
  "🎟 +3 Entries",
  "💰 +50 Credits",
  "🎟 +5 Entries",
  "💰 +100 Credits",
];

export default function SpinWheel() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [reward, setReward] = useState("");
  const [spun, setSpun] = useState(false);

  const spin = () => {
    if (spun || spinning) return;

    setSpinning(true);

    // Random segment
    const selectedIndex = Math.floor(Math.random() * segments.length);
    const anglePerSegment = 360 / segments.length;

    // Full rotations + offset to land on the segment
    const newRotation = 360 * 5 + selectedIndex * anglePerSegment;

    setRotation(newRotation);

    // Wait till animation ends
    setTimeout(() => {
      setReward(segments[selectedIndex]);
      setSpun(true);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 mt-20 font-inter">
      <h2 className="text-xl font-bold text-primary mb-4">Spin the Wheel</h2>

      <div
        className="relative w-64 h-64 rounded-full border-[10px] border-primary overflow-hidden transition-transform duration-[4s] ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {segments.map((label, i) => {
          const rotate = (360 / segments.length) * i;
          return (
            <div
              key={i}
              className="absolute w-1/2 h-1/2 left-1/2 top-1/2 origin-bottom text-xs text-center text-white"
              style={{
                transform: `rotate(${rotate}deg) translate(-50%, -100%)`,
                backgroundColor: i % 2 === 0 ? "#FF7A00" : "#FFA733",
              }}
            >
              {label}
            </div>
          );
        })}
      </div>

      <button
        onClick={spin}
        disabled={spun}
        className="mt-6 px-4 py-2 bg-accent text-white rounded disabled:opacity-50"
      >
        {spun ? "You already spun!" : spinning ? "Spinning..." : "Spin Now"}
      </button>

      {reward && (
        <p className="mt-4 text-lg font-semibold text-primary">
          🎉 You won: <span className="text-accent">{reward}</span>
        </p>
      )}
    </div>
  );
}
