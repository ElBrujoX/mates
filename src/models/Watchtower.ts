import { Schema, model } from 'mongoose';

const WatchtowerSchema = new Schema({
  name: { type: String, required: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'maintenance'],
    default: 'active'
  },
  lastInspection: { type: Date },
  nextInspection: { type: Date },
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

WatchtowerSchema.index({ location: '2dsphere' });

export default model('Watchtower', WatchtowerSchema); 