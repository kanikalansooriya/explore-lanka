import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container py-5">
        <h2 className="text-center mb-5">Popular Destinations</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5"
                className="card-img-top"
                alt="Sigiriya"
              />
              <div className="card-body">
                <h5>Sigiriya</h5>
                <p>Ancient rock fortress and world heritage site.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1589308454676-22a0f67d7a2b"
                className="card-img-top"
                alt="Ella"
              />
              <div className="card-body">
                <h5>Ella</h5>
                <p>Tea plantations and breathtaking mountains.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
                className="card-img-top"
                alt="Mirissa"
              />
              <div className="card-body">
                <h5>Mirissa</h5>
                <p>Luxury beaches and whale watching tours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}