import { CDN_URL } from "../utils/constants";
const RestoCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
  } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="resto-card">
      <img src={CDN_URL + cloudinaryImageId} alt="image" />
      <h3>{name}</h3>
      <h4>
        {locality}, {areaName}
      </h4>
      <p>Cost: {costForTwo}</p>
      <h4>cuisines: {cuisines.join(", ")}</h4>
      <h5>{avgRating}⭐</h5>
      <h5>Delivery time: {deliveryTime} minutes</h5>
    </div>
  );
};

export default RestoCard;
