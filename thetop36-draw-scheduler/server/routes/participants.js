import express from 'express';
import Participant from '../models/Participant.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const participants = await Participant.find();
  res.json(participants);
});

router.post('/', async (req, res) => {
  const participant = new Participant(req.body);
  await participant.save();
  res.json(participant);
});

export default router;