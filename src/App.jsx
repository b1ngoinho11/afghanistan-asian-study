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
          <br></br>
          <br></br>
          <div className="overview-grid">
            <div>
              <table className="facts-table">
                <tbody>
                  <tr>
                    <th>Capital</th>
                    <td>Kabul</td>
                  </tr>
                  <tr>
                    <th>Population</th>
                    <td>~41 million</td>
                  </tr>
                  <tr>
                    <th>Languages</th>
                    <td>Dari, Pashto, Uzbek, Turkmen</td>
                  </tr>
                  <tr>
                    <th>Neighbors</th>
                    <td>Pakistan, Iran, Turkmenistan, Uzbekistan, Tajikistan, China</td>
                  </tr>
                  <tr>
                    <th>Currency</th>
                    <td>Afghan afghani (AFN)</td>
                  </tr>
                  <tr>
                    <th>Time Zone</th>
                    <td>UTC+4:30</td>
                  </tr>
                  <tr>
                    <th>Provinces</th>
                    <td>34</td>
                  </tr>
                  <tr>
                    <th>Landscape</th>
                    <td>Hindu Kush, Amu Darya, Helmand</td>
                  </tr>
                  <tr>
                    <th>Economy</th>
                    <td>Agriculture, trade, mining potential</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overview-map-col">
              <div className="map-wrapper map-wrapper--small">
                <iframe
                  title="Afghanistan Map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Afghanistan&hl=en&z=5&output=embed"
                ></iframe>
              </div>
              <p>
                Afghanistan’s location has long made it a cultural crossroads,
                connecting South, Central, and West Asia and shaping its diverse
                heritage and traditions.
              </p>
            </div>
          </div>
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
            videoSrc="https://youtu.be/6HywFR2k6kA?si=x7mbA4HF2j-0T3jZ"
            title="Health and Wellness"
            description="Covers traditional health practices, modern healthcare challenges, and how people maintain well-being in daily life."
            reverse
          />
          <VideoCard
            videoSrc="https://youtu.be/J5v09woqLQs"
            title="Political Leadership"
            description="Explains Afghanistan’s leadership system, key figures, and the role politics play in shaping the nation."
          />
          <VideoCard
            id="video-personality"
            videoSrc="https://youtu.be/uNtdkMnyUBY"
            title="Personality"
            description="Showcases the warm, hospitable, and resilient character of Afghan people across generations."
            reverse
          />
          <VideoCard
            id="video-cultural-festivals"
            videoSrc="https://youtu.be/ap8Ugo9iRdE"
            title="Cultural Festivals"
            description="Explores colorful celebrations like Nowruz and Eid, reflecting traditions, music, and community spirit."
          />
          <VideoCard
            id="video-local-entertainment"
            videoSrc="https://youtu.be/8amZ6cFGfq4"
            title="Local Entertainment"
            description="Highlights Afghan music, poetry, storytelling, and the role of tea houses as social hubs."
            reverse
          />
          <VideoCard
            id="video-languages-dialects"
            videoSrc="https://youtu.be/apnU4tEqLiM"
            title="Languages and Dialects"
            description="Introduces Dari and Pashto as main languages, along with regional dialects that show the country’s diversity."
          />
          <VideoCard
            id="video-traditional-sports"
            videoSrc="https://youtu.be/dB_pUhCha-4"
            title="Traditional Sports"
            description="Focuses on Buzkashi and other native games that represent strength, teamwork, and culture."
            reverse
          />
          <VideoCard
            id="video-asian-beauty"
            videoSrc="https://youtu.be/6HywFR2k6kA?si=x7mbA4HF2j-0T3jZ"
            title="Asian Beauty"
            description="Presents Afghanistan’s unique sense of beauty seen in clothing, jewelry, and natural landscapes."
          />
          <VideoCard
            id="video-population"
            videoSrc="https://youtu.be/mO1Gp2sqRUY"
            title="Population"
            description="Provides insight into demographics, ethnic groups, and the youthful population shaping the country’s future."
            reverse
          />
          <VideoCard
            id="video-communication"
            videoSrc="https://youtu.be/a4P5S7oxgiQ"
            title="Communication"
            description="Looks at how Afghans connect—through face-to-face traditions, media, and expanding digital networks."
          />
          <VideoCard
            id="video-environment"
            videoSrc="https://youtu.be/nSejE2UAx20"
            title="Environment"
            description="Discusses Afghanistan’s mountains, rivers, and environmental challenges such as deforestation and climate change."
            reverse
          />
        </Section>

        <Section id="created-by" title="Created by">
          <p> 65011269 Budthbundit Thaya-urai </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
