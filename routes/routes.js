const express = require('express')
const router = express.Router() //обработка роута

const {
    getAllCost,
    createNewCost,
    changeCostInfo,
    deleteCost
} = require('../controllers/controllers')

router.get('/allCosts', getAllCost)
router.post('/createCost', createNewCost)
router.patch('/updateCost', changeCostInfo)
router.delete('/deleteCost', deleteCost)

module.exports = router