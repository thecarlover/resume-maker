import { Resume } from "../models/resumeSchema.js"; 
import { User } from "../models/userSchema.js"; 

// Create a new resume
export const createResume = async (req, res) => {
  try {
    const userId = req.userId; 

    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create new resume
    const newResume = new Resume({
      userId,
      personalInfo: req.body.personalInfo,
      education: req.body.education,
      experience: req.body.experience,
      skills: req.body.skills,
      portfolio: req.body.portfolio,
      videoIntro: req.body.videoIntro,
    });

    await newResume.save();

    return res.status(201).json({
      message: "Resume created successfully",
      resume: newResume,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// Get user's resume
export const getResume = async (req, res) => {
  try {
    const userId = req.userId; // Assuming userId comes from authenticated user middleware

    // Find the resume by userId
    const resume = await Resume.findOne({ userId });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json(resume);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// Update user's resume
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId; // Assuming userId comes from authenticated user middleware

    // Find the resume by userId
    const resume = await Resume.findOne({ userId });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Update resume fields
    resume.personalInfo = req.body.personalInfo || resume.personalInfo;
    resume.education = req.body.education || resume.education;
    resume.experience = req.body.experience || resume.experience;
    resume.skills = req.body.skills || resume.skills;
    resume.portfolio = req.body.portfolio || resume.portfolio;
    resume.videoIntro = req.body.videoIntro || resume.videoIntro;
    resume.updatedAt = Date.now(); // Update the updatedAt field

    await resume.save();

    return res.status(200).json({
      message: "Resume updated successfully",
      resume,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// Delete user's resume
export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId; // Assuming userId comes from authenticated user middleware

    // Find the resume by userId
    const resume = await Resume.findOne({ userId });
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Delete the resume
    await resume.remove();

    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
