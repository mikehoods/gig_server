const express = require('express');
const gigController = require('../controllers/gigController')
const router = express.Router();

router.get('/', gigController.gig_index)
router.post('/', gigController.gig_create)
router.get('/:id', gigController.gig_details)
router.delete('/:id', gigController.gig_delete)
router.put('/:id', gigController.gig_update)

module.exports = router;