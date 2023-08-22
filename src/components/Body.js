import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

//Body Component
const Body = () => {
    let listOfRestaurants = [{
        data : {
            "id": "598607",
            "name": "Soul Rasa",
            "cloudinaryImageId": "win6uczwtszg007suegg",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Indian",
            "Healthy Food",
            "Home Food",
            "South Indian",
            "North Indian"
            ],
            "avgRating": 4.4,
            "deliveryTime": 24,
            "avgRatingString": "4.4",
        }
    },
    {   data : {
            "id": "598608",
            "name": "Dominos",
            "cloudinaryImageId": "win6uczwtszg007suegg",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Indian",
            "Healthy Food",
            "Home Food",
            "South Indian",
            "North Indian"
            ],
            "avgRating": 3.8,
            "deliveryTime": 24,
            "avgRatingString": "4.4",
        },
    },
    {   data : {
            "id": "598609",
            "name": "MCD",
            "cloudinaryImageId": "win6uczwtszg007suegg",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Indian",
            "Healthy Food",
            "Home Food",
            "South Indian",
            "North Indian"
            ],
            "avgRating": 4.,
            "deliveryTime": 24,
            "avgRatingString": "4.4",
        },
    }];
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    //Filter Logic here
                   // console.log("Button Clicked");
                   listOfRestaurants = listOfRestaurants.filter(
                    (res) => res.data.avgRating > 4
                    );
                }}
                >Top Rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;
