const Dev = require('../models/dev');
const parseStringAsArrays = require('../utils/parseStringAsArrays')
    module.exports = {
    async index(request, response){
        //console.log(request.query);
        const { latitude, longitude, techs} = request.query
        const techsArray= parseStringAsArrays(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,  
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            }
        })
        return response.json( devs );
    }}