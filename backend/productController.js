const Pokemon = require("../models/Product")
const axios = require("axios")

exports.addPokemon = async (req,res)=>{
    try{

        const pokemon = await Pokemon.create({
            name:req.body.name,
            type:req.body.type,
            height:req.body.height,
            weight:req.body.weight,
            image:req.file ? req.file.path : req.body.image
        })

        res.status(201).json({
            message:"Pokemon Added",
            pokemon
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.getAllPokemon = async(req,res)=>{
    try{

        const pokemon = await Pokemon.find()

        res.status(200).json({
            message:"All Pokemon",
            pokemon
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.getPokemonById = async(req,res)=>{
    try{

        const pokemon = await Pokemon.findById(req.params.id)

        res.status(200).json({
            message:"Pokemon Details",
            pokemon
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.updatePokemon = async(req,res)=>{
    try{

        const pokemon = await Pokemon.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        )

        res.status(200).json({
            message:"Pokemon Updated",
            pokemon
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.deletePokemon = async(req,res)=>{
    try{

        await Pokemon.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message:"Pokemon Deleted"
        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.searchPokemon = async(req,res)=>{
    try{

        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${req.params.name}`
        )

        res.json(response.data)

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}