import { useState } from "react";

const RestaurantSignUp = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ name, city, email, phone, password,confirmPassword }),
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-500 text-center">
        Sign Up
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="restaurantName"
            >
              Restaurant Name
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="restaurantName"
              placeholder="Restaurant Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="city">
              City
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="city"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="tel"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RestaurantSignUp;
