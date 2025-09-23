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
          <VideoCard
            id="video-asian-country"
            videoSrc="https://youtu.be/GKXfVJX02Uk"
            title="Asian Country"
            description="A quick look at Afghanistan as part of Asia, highlighting its location, neighbors, and regional importance."
          />
          <VideoCard
            id="video-health-wellness"
            videoSrc="https://youtu.be/mO1Gp2sqRUY"
            title="Health and Wellness"
            description="Covers traditional health practices, modern healthcare challenges, and how people maintain well-being in daily life."
            reverse
          />
          {/* <VideoCard
            videoSrc="https://youtu.be/apnU4tEqLiM"
            title="Political Leadership"
            description="Explains Afghanistan’s leadership system, key figures, and the role politics play in shaping the nation."
          /> */}
          <VideoCard
            id="video-personality"
            videoSrc="https://youtu.be/uNtdkMnyUBY"
            title="Personality"
            description="Showcases the warm, hospitable, and resilient character of Afghan people across generations."
          />
          <VideoCard
            id="video-cultural-festivals"
            videoSrc="https://youtu.be/ap8Ugo9iRdE"
            title="Cultural Festivals"
            description="Explores colorful celebrations like Nowruz and Eid, reflecting traditions, music, and community spirit."
            reverse
          />
          <VideoCard
            id="video-local-entertainment"
            videoSrc="https://youtu.be/8amZ6cFGfq4"
            title="Local Entertainment"
            description="Highlights Afghan music, poetry, storytelling, and the role of tea houses as social hubs."
          />
          <VideoCard
            id="video-languages-dialects"
            videoSrc="https://youtu.be/apnU4tEqLiM"
            title="Languages and Dialects"
            description="Introduces Dari and Pashto as main languages, along with regional dialects that show the country’s diversity."
            reverse
          />
          <VideoCard
            id="video-traditional-sports"
            videoSrc="https://youtu.be/dB_pUhCha-4"
            title="Traditional Sports"
            description="Focuses on Buzkashi and other native games that represent strength, teamwork, and culture."
          />
          {/* <VideoCard
            videoSrc="https://youtu.be/mO1Gp2sqRUY"
            title="Asian Beauty"
            description="Presents Afghanistan’s unique sense of beauty seen in clothing, jewelry, and natural landscapes."
          /> */}
          {/* <VideoCard
            videoSrc="https://youtu.be/ap8Ugo9iRdE"
            title="Population"
            description="Provides insight into demographics, ethnic groups, and the youthful population shaping the country’s future."
          /> */}
          <VideoCard
            id="video-communication"
            videoSrc="https://youtu.be/a4P5S7oxgiQ"
            title="Communication"
            description="Looks at how Afghans connect—through face-to-face traditions, media, and expanding digital networks."
            reverse
          />
          <VideoCard
            id="video-environment"
            videoSrc="https://youtu.be/nSejE2UAx20"
            title="Environment"
            description="Discusses Afghanistan’s mountains, rivers, and environmental challenges such as deforestation and climate change."
          />
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
