import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },  
});

export const restaurantSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);
