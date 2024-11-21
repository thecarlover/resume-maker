import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User
  personalInfo: {
    name: { type: String, required: true }, // Name of the user
    email: { type: String, required: true }, // Email of the user
  },
  skills: [{ type: String }], // Array of skills
  education: [
    {
      institution: { type: String, required: true },
      degree: { type: String, required: true },
    },
  ], // Array of education details
  experience: [
    {
      company: { type: String, required: true },
      role: { type: String, required: true },
    },
  ], // Array of work experience
  createdAt: { type: Date, default: Date.now }, // Date when the resume was created
  updatedAt: { type: Date, default: Date.now }, // Date when the resume was last updated
});

export const resume = mongoose.model('resume', ResumeSchema);
