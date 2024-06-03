import RestrauntCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {}}>
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
            {resList.map((restaurant) => (
                <RestrauntCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
    </div>
);
export default Body;
