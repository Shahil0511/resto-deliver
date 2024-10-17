import mongoose from "mongoose";
const { MONGODB_URI } = process.env;
export const connectionStr = process.env.MONGODB_URI;
