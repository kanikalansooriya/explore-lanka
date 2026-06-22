export default function Hotels() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Luxury Hotels</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5>Ocean Resort</h5>
              <p>5 Star Beachfront Luxury Hotel.</p>
              <button className="btn btn-warning">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5>Tea Estate Villa</h5>
              <p>Luxury mountain retreat.</p>
              <button className="btn btn-warning">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5>City Boutique Hotel</h5>
              <p>Modern luxury in Colombo.</p>
              <button className="btn btn-warning">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}