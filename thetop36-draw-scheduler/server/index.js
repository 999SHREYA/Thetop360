// // server/index.js
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import cron from "node-cron";
// import Winner from "./models/Winner.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB error:", err));

// app.get("/api/winners/today", async (req, res) => {
//   const today = new Date().toISOString().slice(0, 10);
//   const winners = await Winner.find({ date: today });
//   res.json(winners);
// });
// // inside index.js after API routes

// // Fake users pool
// const users = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah"];
// const rewards = ["$50 Credit", "Raffle Entry", "Free Bundle", "$100 Prize"];

// cron.schedule("0 10 * * *", async () => {
//   const today = new Date().toISOString().slice(0, 10);
//   const existing = await Winner.find({ date: today });
//   if (existing.length > 0) return;

//   const winners = Array.from({ length: 2 }).map(() => ({
//     name: users[Math.floor(Math.random() * users.length)],
//     reward: rewards[Math.floor(Math.random() * rewards.length)],
//     date: today,
//   }));

//   await Winner.insertMany(winners);
//   console.log("Winners picked for", today, winners);
// });

// app.post("/api/winners", async (req, res) => {
//     const { name, reward } = req.body;
//     const today = new Date().toISOString().slice(0, 10);
  
//     if (!name || !reward) return res.status(400).json({ message: "Name & reward required" });
  
//     const newWinner = new Winner({ name, reward, date: today });
//     await newWinner.save();
  
//     res.status(201).json(newWinner);
//   });
  


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import participantRoutes from './routes/participants.js';
import winnerRoutes from './routes/winners.js';
import './cron/pickWinners.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/participants', participantRoutes);
app.use('/api/winners', winnerRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
