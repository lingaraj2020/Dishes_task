// src/App.js
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    const response = await axios.get("http://localhost:3000/dishes");
    setDishes(response.data.dishes);
  };

  const togglePublished = async (dishId) => {
    await axios.put(`http://localhost:3000/dishes/${dishId}/toggle`);
    fetchDishes();
  };

  return (
    <div className="m-4 flex flex-col items-center">
      <div className="text-3xl font-bold w-full m-2 p-2 text-center">
        Dishes Dashboard
      </div>
      <div className="flex justify-center m-2 p-4">
        <div className="flex flex-wrap">
          {dishes.map((dish) => (
            <div
              key={dish.dishId}
              className="m-2 p-2 border border-gray-300 rounded-lg shadow-lg max-w-xs flex flex-col items-center"
            >
              <img
                className="w-[200px] h-[150px] object-cover mb-2"
                src={dish.imageUrl}
                alt={dish.dishName}
              />
              <div className="text-lg font-semibold mb-2">{dish.dishName}</div>
              <p className="mb-2">
                {dish.isPublished ? "Published" : "Unpublished"}
              </p>
              <button
                className="border border-black bg-gray-200 w-full py-2 flex justify-center rounded-md mt-2"
                onClick={() => togglePublished(dish.dishId)}
              >
                Toggle
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
