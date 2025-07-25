import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  uuid: { type: String },
  title: { type: String, required: true },
  content: { type: String },
  mood: { type: String },
  date: { type: Date, required: true },
  pinned: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Entry', entrySchema);
