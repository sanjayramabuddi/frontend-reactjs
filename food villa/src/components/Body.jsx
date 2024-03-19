import { useState } from "react";
import { restaurantList } from "../data";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

function Body() {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredRestaurants = filterData(searchText, restaurantList);
    setRestaurants(filteredRestaurants);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="flex">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
}

export default Body;
