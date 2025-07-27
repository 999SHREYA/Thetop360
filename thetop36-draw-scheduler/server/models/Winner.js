import mongoose from 'mongoose';

const winnerSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: { type: Date, required: true },
});

export default mongoose.model('Winner', winnerSchema);

