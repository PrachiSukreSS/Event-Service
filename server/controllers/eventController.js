// 📁 server/controllers/eventController.js
import Event from "../models/Event.js";

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addEvent = async (req, res) => {
  try {
    const { title, date, description, imgSrc } = req.body;
    const newEvent = new Event({ title, date, description, imgSrc });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
