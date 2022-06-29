const Gig = require('../models/gigs.js')

const gig_index = (req, res) => {
    Gig.find().sort({ createdAt: -1 })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const gig_details = (req, res) => {
    Gig.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const gig_create = (req, res) => {
    const gig = new Gig(req.body)

    gig.save()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const gig_delete = (req, res) => {
    Gig.findByIdAndDelete(req.params.id)
        .then(result = res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const gig_update = (req, res) => {
    Gig.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

module.exports = {
    gig_index,
    gig_details,
    gig_create,
    gig_delete,
    gig_update
}