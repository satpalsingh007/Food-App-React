import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
    const { deliveryTime } = resData.info.sla;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            ></img>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h4>{avgRating}⭐</h4>
            <h5>{deliveryTime}minutes</h5>
        </div>
    );
};
export default RestrauntCard;
