export default function HotelCard({
  image,
  title,
  price
}) {
  return (
    <div className="card hotel-card shadow">

      <img
        src={image}
        alt={title}
        className="card-img-top"
      />

      <div className="card-body">

        <h5>{title}</h5>

        <p>${price} / Night</p>

        <button className="btn btn-warning">
          Book Now
        </button>

      </div>

    </div>
  );
}