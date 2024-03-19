function RestaurantCard({ img, name, cuisine, stars }) {
  return (
    <div>
      <img src={img} alt={`${name} Restaurant`} />
      <h2>{name}</h2>
      <h3>{cuisine.join(", ")}</h3>
      <h4>{stars} stars</h4>
    </div>
  );
}

export default RestaurantCard;
