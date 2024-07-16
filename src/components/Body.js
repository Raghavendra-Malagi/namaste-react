import RestoCard from "./RestoCard";
// import cardList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listData, setListData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [topRated, setTopRated] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter mt-2 mb-2">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchResult = listData.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurants(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedRestaurants = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(topRatedRestaurants);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestoCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
