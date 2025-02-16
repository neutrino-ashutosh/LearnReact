import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = ()=>{

  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'http://localhost:3000/api/restaurants?lat=28.5399515&lng=77.25915789999999'
    );

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
  }

  return (
    <div className='body'>

      <div className='filter'> 

        <div className="search">
          <input type="text" 
          className="search-box" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} ></input>
          <button onClick={() => {

            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);

          }}>
            Search</button>
        </div>
        
        <button className='filter-btn'
          onClick={()=> {
          const filteredList = listOfRestaurants.filter(
            (res)=> res.info.avgRating > 4.4
          );
          setListOfRestaurants(filteredList);
          }}
          >
            Top Rated Restaurants 
        </button>

      </div>

      <div className='res-container'>
        {filteredRestaurant.map((restaurant)=> (
        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))}                
      </div>
      
    </div>
  )
}

export default Body ;