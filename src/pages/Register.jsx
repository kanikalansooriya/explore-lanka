export default function Register() {
  return (
    <div className="container py-5">
      <div
        className="card shadow mx-auto p-4"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-center mb-4">
          Register
        </h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-warning w-100">
          Create Account
        </button>
      </div>
    </div>
  );
}