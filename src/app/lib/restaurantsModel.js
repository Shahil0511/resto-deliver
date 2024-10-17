import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
  name: { type: String, required: true }, 
});


export const restaurantSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);
