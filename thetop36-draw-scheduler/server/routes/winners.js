import express from 'express';
import Winner from '../models/Winner.js';
const router = express.Router();

router.get('/today', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const winners = await Winner.find({ date: { $gte: today } });
  res.json(winners);
//   console.log(winners, "winner")
});

router.post('/', async (req, res) => {
  const winner = new Winner(req.body);
  await winner.save();
  res.json(winner);
});

export default router;