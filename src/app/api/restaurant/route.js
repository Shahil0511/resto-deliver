import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Establish database connection
async function connectDB() {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(connectionStr);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error("MongoDB connection error:", err);
      throw new Error("Database connection error");
    }
  }
}

export async function GET() {
  try {
    await connectDB();
    const data = await restaurantSchema.find().lean();
    return NextResponse.json({ result: true, data });
  } catch (err) {
    console.error("Error fetching restaurants:", err);
    return NextResponse.json(
      { result: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    let payload = await request.json();
    const restaurant = new restaurantSchema(payload);
    const result = await restaurant.save();
    return NextResponse.json({ result, success: true });
  } catch (err) {
    console.error("Error creating restaurant:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
