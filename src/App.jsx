import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import VideoCard from "./components/VideoCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="page">
      <NavBar />

      <main>
        <Hero />

        <Section id="overview" title="Overview">
          <p>
            Afghanistan is a landlocked country in South-Central Asia, known for
            its rich history, diverse culture, and striking natural landscapes.
            From the ancient Silk Road and the majestic Hindu Kush mountains to
            vibrant traditions shaped by many civilizations, Afghanistan holds a
            unique place in global heritage. Despite challenges in recent
            decades, its people remain resilient, with a culture deeply rooted
            in hospitality, poetry, and art. This website aims to provide clear,
            accessible information about Afghanistan’s history, geography,
            society, and present-day developments to help the world better
            understand this fascinating nation.
          </p>
        </Section>

        <Section id="video" title="Featured Video">
          <VideoCard />
        </Section>

        <Section id="contact" title="Contact">
          <p> Add your contact or footer information here. </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
