"use client";

import { useState } from "react";
import RestauarntLogin from "../_components/RestauarntLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";

const Restaurants = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="py-8 ">
      <div className="max-w-md mx-auto">
        {isLogin ? <RestauarntLogin /> : <RestaurantSignUp />}
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Restaurants;
