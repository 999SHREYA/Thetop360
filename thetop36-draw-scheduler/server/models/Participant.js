import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema({
  name: String,
  email: String,
  entries: { type: Number, default: 1 },
});

export default mongoose.model('Participant', participantSchema);
