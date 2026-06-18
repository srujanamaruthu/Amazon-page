const mongoose = require("mongoose")

const PokemonSchema = new mongoose.Schema({

    name:{
        type:String
    },

    type:{
        type:String
    },

    height:{
        type:Number
    },

    weight:{
        type:Number
    },

    image:{
        type:String
    }

})

module.exports = mongoose.model("Pokemon",PokemonSchema)
