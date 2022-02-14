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
            let { number } = req.body;
            if(!number)
                number = 0;
            let readings = await Reading.find({}, {_id: false, __v: false}).sort({datetime:1}).limit(number)
            return res.json(readings)
        })
}