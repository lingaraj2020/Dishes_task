const express = require("express");
const { createDish, updateDish } = require("./types");
const { Dish } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//   })
// );

app.post("/dish",async(req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createDish.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs",
        })
        return;
    }
    await Dish.create({
      dishId:createPayload.dishId,
      dishName:createPayload.dishName,
      imageUrl:createPayload.imageUrl,
    })
    res.json({
      msg:"Dish created"
    })
})

app.get("/dishes", async (req, res) => {
  const dishes = await Dish.find({});
  res.json({dishes});
});

app.put("/dishes/:id/toggle", async (req, res) => {
  const dish=await Dish.findOne({dishId:req.params.id});
  dish.isPublished=!dish.isPublished;
  await dish.save();
  res.json({
    msg:`Dish of id ${req.params.id} updated`
  })
});

app.listen(port, () => {
  console.log(`you app is running on server ${port}`);
});
