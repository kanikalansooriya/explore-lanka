export default function Packages() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Travel Packages
      </h1>

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h3>7 Days Package</h3>
            <h4>$1200</h4>
            <p>
              Sigiriya, Kandy, Ella &
              Mirissa Tour
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h3>5 Days Package</h3>
            <h4>$850</h4>
            <p>
              South Coast Luxury Escape
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h3>3 Days Package</h3>
            <h4>$550</h4>
            <p>
              Weekend Getaway Experience
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}