import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    console.log("Connected to MongoDB");

    const data = await restaurantSchema.find();
    console.log("Fetched data from MongoDB:", data);
    return NextResponse.json({ result: true, data });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    return NextResponse.json(
      { result: false, error: "Database connection error" },
      { status: 500 }
    );
  }
}


export async function POST(request) {
  try {
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    console.log("Connected to MongoDB");


    const body = await request.json();
    const { name } = body;

    
    if (!name) {
      return NextResponse.json(
        { result: false, error: "Name is required" },
        { status: 400 }
      );
    }

   
    const newRestaurant = new restaurantSchema({ name });
    await newRestaurant.save();

    return NextResponse.json(
      { result: true, restaurant: newRestaurant },
      { status: 201 }
    );
  } catch (err) {
    console.error("MongoDB connection error:", err);
    return NextResponse.json(
      { result: false, error: "Database connection error" },
      { status: 500 }
    );
  }
}
