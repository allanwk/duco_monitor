const Reading  = require('../models/reading')

module.exports = function (app) {
    app.route('/api')
        .post(async function(req, res){
            try{
                var reading = new Reading(req.body)
                reading.save()
                return res.send("success")
            }
            catch(err){
                return res.json(err)
            }
        })
        .get(async function(req, res){
            let readings = await Reading.find({}, {_id: false, __v: false}).sort({datetime:-1})
            return res.json(readings)
        })
    app.route('/api/:limit')
        .get(async function(req, res){
            const { limit } = req.params;
            let readings = await Reading.find({}, {_id: false, __v: false}).sort({datetime:-1}).limit(limit)
            return res.json(readings)
        })
}