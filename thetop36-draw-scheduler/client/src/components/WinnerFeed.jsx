

import { useEffect, useState } from 'react';

export default function WinnerFeed() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/winners/today')
      .then(res => res.json())
      .then(data => setWinners(data));
  }, []);

  return (
    <div className="mt-10 text-center">
      {winners.length === 0 ? (
        <p className="text-gray-500">No winners yet today.</p>
      ) : (
        <ul className="space-y-2">
          {winners.map((w, i) => (
            <li key={i} className="p-4 mx-auto bg-white shadow-md rounded-card w-72">
              <p className="font-bold">{w.name}</p>
              {/* <p className="text-sm text-gray-600">Reward: {w.reward}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}