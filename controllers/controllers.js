const Cost = require('../schema/schema')

module.exports.getAllCost = async (req, res) => {
    // res.send({data: Cost});
    try {
        await Cost.find().then(result => {
            res.send({data: result})
        })
    } catch (err) {
        res.json(err)
    }
}

module.exports.createNewCost = async (req, res) => {
    try {
        const cost = new Cost({
            text: req.body.text,
            totalMoney: req.body.totalMoney,
            date: req.body.date
        });   //receive body
        await cost.save()

        res.json(cost)
    } catch (error) {
        res.status(400).json(error)
    }


}

module.exports.changeCostInfo = async (req, res) => {
    try {
        await Cost.updateOne({_id: req.body._id}, req.body).then(result => {
                Cost.find({_id: req.body._id}).then(result => {
                    res.json(result)
                })
            }
        )
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports.deleteCost = async (req, res) => {
    try {
        await Cost.deleteOne({_id: req.query.id}).then(result => {
            res.status(200).send('success delete')
        })
    } catch (error) {
        res.status(404).json(error)

    }
    // res.status(404).send('Task not found');
}