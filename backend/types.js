const zod = require("zod");

const createDish = zod.object({
  dishId:zod.string(),
  dishName: zod.string(),
  imageUrl: zod.string(),
});

module.exports = {
  createDish: createDish,
};
