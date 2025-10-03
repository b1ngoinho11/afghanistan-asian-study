import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import VideoCard from "./components/VideoCard.jsx";
import Footer from "./components/Footer.jsx";
import NewsTicker from "./components/NewsTicker.jsx";

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
                    <td>
                      Pakistan, Iran, Turkmenistan, Uzbekistan, Tajikistan,
                      China
                    </td>
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
        <Section id="news" title="Latest News">
          <div style={{ padding: "0.5rem 1rem" }}>
            <NewsTicker
              // props are optional; adjust to taste
              label="Latest News"
              speedPxPerSec={60}
              gapPx={64}
              fetchIntervalMs={0} // keep 0 while using mock data
              maxItems={12}
            />
          </div>
        </Section>

        <Section id="video" title="Featured Video">
          <VideoCard
            id="video-asian-country"
            videoSrc="https://youtu.be/GKXfVJX02Uk"
            title="Asian Country"
            description="A quick look at Afghanistan as part of Asia, highlighting its location, neighbors, and regional importance."
            images={["src/assets/country1.jpg", "src/assets/country2.jpg", "src/assets/country3.jpg"]}
          />
          <VideoCard
            id="video-health-wellness"
            videoSrc="https://youtu.be/4y99h85eq7U"
            title="Health and Wellness"
            description="Covers traditional health practices, modern healthcare challenges, and how people maintain well-being in daily life."
            images={["src/assets/wellness.jpg"]}
            reverse
          />
          <VideoCard
            id="video-political-leadership"
            videoSrc="https://youtu.be/J5v09woqLQs"
            title="Political Leadership"
            description="Explains Afghanistan’s leadership system, key figures, and the role politics play in shaping the nation."
            images={["src/assets/political1.jpeg", "src/assets/political2.jpeg", "src/assets/political3.jpg", "src/assets/political4.jpg"]}
          />
          <VideoCard
            id="video-personality"
            videoSrc="https://youtu.be/uNtdkMnyUBY"
            title="Personality"
            description="Showcases the warm, hospitable, and resilient character of Afghan people across generations."
            images={["src/assets/personality1.jpg", "src/assets/personality2.jpg", "src/assets/personality3.jpg", "src/assets/personality4.jpg"]}
            reverse
          />
          <VideoCard
            id="video-cultural-festivals"
            videoSrc="https://youtu.be/ap8Ugo9iRdE"
            title="Cultural Festivals"
            description="Explores colorful celebrations like Nowruz and Eid, reflecting traditions, music, and community spirit."
            images={["src/assets/festival.jpeg"]}
          />
          <VideoCard
            id="video-local-entertainment"
            videoSrc="https://youtu.be/8amZ6cFGfq4"
            title="Local Entertainment"
            description="Highlights Afghan music, poetry, storytelling, and the role of tea houses as social hubs."
            images={["src/assets/entertainment.jpg"]}
            reverse
          />
          <VideoCard
            id="video-languages-dialects"
            videoSrc="https://youtu.be/apnU4tEqLiM"
            title="Languages and Dialects"
            description="Introduces Dari and Pashto as main languages, along with regional dialects that show the country’s diversity."
            images={["src/assets/language1.jpg", "src/assets/language2.jpg"]}
          />
          <VideoCard
            id="video-traditional-sports"
            videoSrc="https://youtu.be/dB_pUhCha-4"
            title="Traditional Sports"
            description="Focuses on Buzkashi and other native games that represent strength, teamwork, and culture."
            images={["src/assets/sport.jpg"]}
            reverse
          />
          <VideoCard
            id="video-asian-beauty"
            videoSrc="https://youtu.be/jpwL3fD-lmU"
            title="Asian Beauty"
            description="Presents Afghanistan’s unique sense of beauty seen in clothing, jewelry, and natural landscapes."
            images={["src/assets/beauty.jpeg"]}
          />
          <VideoCard
            id="video-population"
            videoSrc="https://youtu.be/mO1Gp2sqRUY"
            title="Population"
            description="Provides insight into demographics, ethnic groups, and the youthful population shaping the country’s future."
            images={["src/assets/population1.jpg", "src/assets/population2.jpg"]}
            reverse
          />
          <VideoCard
            id="video-communication"
            videoSrc="https://youtu.be/a4P5S7oxgiQ"
            title="Communication"
            description="Looks at how Afghans connect—through face-to-face traditions, media, and expanding digital networks."
            images={["src/assets/communication.jpg"]}
          />
          <VideoCard
            id="video-environment"
            videoSrc="https://youtu.be/nSejE2UAx20"
            title="Environment"
            description="Discusses Afghanistan’s mountains, rivers, and environmental challenges such as deforestation and climate change."
            images={["src/assets/environment.jpg"]}
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
