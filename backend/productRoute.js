const {
    addPokemon,
    getAllPokemon,
    getPokemonById,
    updatePokemon,
    deletePokemon,
    searchPokemon
} = require("../controller/productController")

const express = require("express")
const router = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({
    storage
})

router.post("/pokemon", upload.single("image"), addPokemon)


router.get("/pokemon", getAllPokemon)

router.get("/pokemon/:id", getPokemonById)

router.put("/pokemon/:id", updatePokemon)

router.delete("/pokemon/:id", deletePokemon)

router.get("/search/pokemon/:name", searchPokemon)

module.exports = router
