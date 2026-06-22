import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1
    });

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 30,
      delay: 0.3
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay d-flex align-items-center">
        <div className="container text-center">

          <h1 className="hero-title">
            Discover Sri Lanka
          </h1>

          <p className="hero-subtitle">
            Luxury travel experiences made for you
          </p>

        </div>
      </div>
    </section>
  );
}