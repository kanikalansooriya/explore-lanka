export default function DestinationCard({
  image,
  title,
  description
}) {
  return (
    <div className="card destination-card shadow">

      <img
        src={image}
        alt={title}
        className="card-img-top"
      />

      <div className="card-body">

        <h5>{title}</h5>

        <p>{description}</p>

        <button className="btn btn-warning">
          Explore
        </button>

      </div>

    </div>
  );
}