const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ticketNumber: { type: String, required: true },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Ticket', TicketSchema);
