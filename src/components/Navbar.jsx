import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        <Link className="navbar-brand text-white fw-bold" to="/">
          ✈ Explore Lanka
        </Link>

        <button className="navbar-toggler text-white">
          ☰
        </button>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto gap-3">

            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li>
              <Link className="nav-link" to="/hotels">Hotels</Link>
            </li>

            <li>
              <Link className="nav-link" to="/packages">Packages</Link>
            </li>

            <li>
              <Link className="nav-link" to="/destinations">Destinations</Link>
            </li>

            <li>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}