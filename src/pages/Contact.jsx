export default function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Contact Us
      </h1>

      <form className="card shadow p-4">

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-3">
          <textarea
            rows="5"
            className="form-control"
            placeholder="Message"
          ></textarea>
        </div>

        <button className="btn btn-warning">
          Send Message
        </button>

      </form>
    </div>
  );
}