const {Schema, model} = require('mongoose')

const gigSchema = new Schema({
    date: String,
    service: String,
    client: String,
    start: String,
    finish: String,
    position: String,
    hourly: Number,
    flat: Number,
    tips: Number,
    notes: String,
    total: Number,
    hoursWorked: Number
}, {timestamps: true}
)

const Gig = model('Gig', gigSchema)

module.exports = Gig