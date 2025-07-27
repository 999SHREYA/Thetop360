import cron from 'node-cron';
import Participant from '../models/Participant.js';
import Winner from '../models/Winner.js';

const rewards = [
  '🏆 Big Prize Entry',
  '🎟 +0.2 Raffle Entries',
  '💰 5 Credits'
];

const pickRandomWinners = async () => {
  const participants = await Participant.find();
  if (participants.length < 2) return;

  const shuffled = participants.sort(() => 0.5 - Math.random());
  const winners = shuffled.slice(0, 2);

  for (let user of winners) {
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    await Winner.create({ name: user.name, reward });
  }
  console.log('🎉 Winners picked');
};

cron.schedule('0 9 * * *', pickRandomWinners);