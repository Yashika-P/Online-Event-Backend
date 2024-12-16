
const Event = require('../models/Event');

// Create a new event
const createEvent = async (req, res) => {
  const { title, description, date, location, price } = req.body;
  try {
    const newEvent = new Event({ title, description, date, location, price });
    const event = await newEvent.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createEvent, getEvents };
