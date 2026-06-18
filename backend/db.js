const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://srujanamaruthu_db_user:secure123@cluster0.zqacr3y.mongodb.net/pokemonTracker?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB Connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDb;