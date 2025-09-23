export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>Afghanistan</h1>
          <h3>
            Discover the Land of History, Culture, and Resilience.
          </h3>
          <p>
            65011269 Budthbundit Thaya-urai
          </p>
          <br></br>
          <br></br>
          <a href="#overview" className="cta">Explore more</a>
        </div>
        <div className="hero-aside">
          <div className="hero-flag-wrap">
            <img
              className="hero-flag"
              src="https://cdn.britannica.com/40/5340-050-AA46700D/Flag-Afghanistan.jpg"
              width="480"
              height="320"
              alt="Flag of Afghanistan"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


