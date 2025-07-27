import { useEffect, useState } from 'react';

export default function ParticipantsList() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/participants')
      .then(res => res.json())
      .then(data => setParticipants(data));
  }, []);

  return (
    <div className="mt-10 text-center">
      <h2 className="mb-2 text-lg font-semibold text-primary">Participants</h2>
      <ul className="space-y-1">
        {participants.map((p, i) => (
          <li key={i}>{p.name} ({p.email})</li>
        ))}
      </ul>
    </div>
  );
}