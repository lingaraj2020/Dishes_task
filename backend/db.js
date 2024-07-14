
const mongoose=require("mongoose");
// mongodb+srv://raj2020:Raj6362@cluster0.yhlsrrr.mongodb.net/dishes_db

mongoose.connect("mongodb+srv://raj2020:Raj6362@cluster0.yhlsrrr.mongodb.net/dishes")
const dishSchema=mongoose.Schema({
    dishId:String,
    dishName:String,
    imageUrl:String,
    isPublished:{
        type:Boolean,
        default:true
    }
})

const Dish=mongoose.model('Dish',dishSchema);

module.exports={
    Dish
}