import { Nav } from "./components/Nav";
import { Reveal } from "./components/Reveal";
import { SiteImage } from "./components/SiteImage";
import {
  classroomPath,
  images,
  pilotFlow,
  pipeline,
  site,
  youthPath,
} from "./data/siteContent";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Nav />

      <main id="main">
        {/* Hero */}
        <header className="hero shell">
          <Reveal>
            <p className="eyebrow">A Public Art Vision for Los Angeles</p>
            <h1 className="display display--hero">
              GIVE LOS ANGELES
              <br />
              THE WALLS.
            </h1>
            <p className="lede">
              Developing the next generation of Los Angeles artists and
              transforming overlooked walls into landmarks.
            </p>
            <div className="hero__meta">
              <p className="hero__by">A proposal by {site.name}</p>
              <a className="cta-link" href="#vision">
                Explore the vision ↓
              </a>
            </div>
          </Reveal>
        </header>

        {/* Proof / Dodgers mural */}
        <section className="section section--tight" aria-labelledby="proof-title">
          <div className="shell">
            <Reveal>
              <SiteImage
                src={images.dodgersMural.src}
                alt={images.dodgersMural.alt}
                caption={images.dodgersMural.caption}
                objectPosition={images.dodgersMural.objectPosition}
                className="figure--hero"
                priority
              />
            </Reveal>
            <Reveal className="proof-copy" delay={1}>
              <p className="eyebrow">Made in Los Angeles</p>
              <h2 id="proof-title" className="display display--xl">
                ART FOR THE CITY
                <br />
                THAT RAISED US.
              </h2>
              <p className="prose">
                I recently had the opportunity to help manage and paint a mural
                in Venice Beach celebrating the Los Angeles Dodgers&apos; second
                consecutive World Series championship.
              </p>
              <p className="prose">
                Seeing people stop, photograph the mural and connect with the
                work reinforced something I have believed for a long time:
              </p>
              <p className="prose">
                <strong>Public art can do more than beautify a wall.</strong>
              </p>
              <div className="pull">
                <span>IT CAN CREATE IDENTITY.</span>
                <span>IT CAN CREATE PRIDE.</span>
                <span>IT CAN CREATE OPPORTUNITY.</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="section" aria-labelledby="vision-title">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">The Vision</p>
              <h2 id="vision-title" className="display display--xl">
                DEVELOP THE ARTISTS.
                <br />
                GIVE THEM THE WALLS.
                <br />
                BEAUTIFY LOS ANGELES.
              </h2>
              <p className="prose">
                Los Angeles already has extraordinary artistic talent.
              </p>
              <p className="prose">
                The opportunity is to create stronger pathways that turn that
                talent into professional experience, economic opportunity and
                public art — while transforming overlooked and repeatedly
                painted-over walls into cultural landmarks.
              </p>
            </Reveal>

            <Reveal className="pipeline" delay={1} aria-label="Program pathway">
              {pipeline.map((step, i) => (
                <div className="pipeline__item" key={step}>
                  <span className="pipeline__arrow" aria-hidden="true">
                    {i === 0 ? "·" : "→"}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* 01 Develop the artists */}
        <section id="youth" className="section" aria-labelledby="youth-title">
          <div className="shell">
            <Reveal>
              <p className="sec-num" aria-hidden="true">
                01
              </p>
              <p className="eyebrow">Youth Artist Development</p>
              <h2 id="youth-title" className="display display--xl">
                DEVELOP THE TALENT.
                <br />
                CREATE THE OPPORTUNITY.
              </h2>
              <p className="secondary-line">
                DON&apos;T SUPPRESS THE TALENT.
                <br />
                DEVELOP IT.
              </p>
              <p className="prose">
                Some young Angelenos already possess the beginnings of valuable
                creative skills — lettering, composition, color, illustration,
                design and style.
              </p>
              <p className="prose">
                I propose exploring a city-supported artist-development program
                connecting young people with professional muralists, street
                artists, designers, illustrators and other creative
                professionals.
              </p>
              <p className="prose">
                The goal is bigger than teaching someone how to paint a mural.
              </p>
              <p className="prose">
                <strong>
                  It is about showing them how creative ability can become a
                  profession.
                </strong>
              </p>

              <div className="flow" aria-label="Development path">
                {youthPath.map((step, i) => (
                  <div className="flow__item" key={step}>
                    {i > 0 ? (
                      <span className="flow__arrow" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <p className="prose prose--note">
                Participants could learn artistic technique, project planning,
                pricing, client communication, portfolio development and
                professional mural production.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 02 Reclaim the walls */}
        <section
          id="reclaim"
          className="section"
          aria-labelledby="reclaim-title"
        >
          <div className="shell">
            <Reveal>
              <p className="sec-num" aria-hidden="true">
                02
              </p>
              <p className="eyebrow">Public Art + City Beautification</p>
              <h2 id="reclaim-title" className="display display--xl">
                RECLAIM
                <br />
                THE WALLS.
              </h2>
              <p className="secondary-line accent">LA84 → LA28</p>
              <p className="prose">
                The 1984 Olympic era helped establish an iconic chapter in Los
                Angeles mural history.
              </p>
              <p className="prose">
                Decades later, many of those works are no longer visible, and
                some of these surfaces now sit in a recurring cycle:
              </p>
              <p className="secondary-line">
                GRAFFITI.
                <br />
                PAINT OVER.
                <br />
                GRAFFITI AGAIN.
                <br />
                PAINT OVER AGAIN.
              </p>
              <h3 className="display display--xl" style={{ marginTop: "2.75rem" }}>
                LET&apos;S TURN THEM
                <br />
                INTO CANVASES AGAIN.
              </h3>
              <p className="prose">
                Identify high-visibility walls and infrastructure where Los
                Angeles can commission a new generation of monumental urban
                artwork.
              </p>
              <p className="prose">
                Not recreations of what existed before.
              </p>
              <p className="prose">
                New work reflecting Los Angeles today — created by artists who
                live here.
              </p>
              <h3 className="display display--lg" style={{ marginTop: "2.5rem" }}>
                ARTWORK BORN HERE.
                <br />
                TALENT SOURCED HERE.
              </h3>
            </Reveal>

            <Reveal className="walls walls--born-here" delay={1}>
              {images.bornHereGallery.map((item, index) => (
                <SiteImage
                  key={`born-here-${index}`}
                  src={item.src}
                  alt={item.alt}
                  objectPosition={item.objectPosition}
                  className="figure--wide"
                />
              ))}
            </Reveal>
          </div>
        </section>

        {/* Connect — wall becomes classroom */}
        <section
          className="section section--ink"
          aria-labelledby="classroom-title"
        >
          <div className="shell">
            <Reveal>
              <h2 id="classroom-title" className="display display--xl">
                THE WALL BECOMES
                <br />
                THE CLASSROOM.
              </h2>
              <p className="prose">
                This is where the two ideas become one.
              </p>
              <p className="prose">
                Young artists develop their skills through mentorship.
                Established Los Angeles artists receive meaningful commissions.
                Emerging artists work alongside them.
              </p>
              <p className="prose">
                Public walls become real-world opportunities to learn, create,
                build portfolios and eventually earn commissions of their own.
              </p>
              <div className="path" aria-label="Artist pathway">
                {classroomPath.map((step, index) => (
                  <div className="path__item" key={step}>
                    <span aria-hidden="true">{index === 0 ? "·" : "↓"}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* LA84 → LA28 */}
        <section
          id="la84-la28"
          className="section section--ink section--tight-top"
          aria-labelledby="olympics-title"
        >
          <div className="shell">
            <Reveal>
              <p className="la-mark" aria-hidden="true">
                <span>LA84</span>
                <span className="arrow">↓</span>
                <span>LA28</span>
              </p>
              <h2 id="olympics-title" className="visually-hidden">
                LA84 to LA28
              </h2>
              <p className="prose">
                Los Angeles hosted the world in 1984.
              </p>
              <p className="prose">
                In 2028, the world comes back.
              </p>
              <p className="prose">
                That creates an opportunity to begin another chapter in the
                city&apos;s public-art history — one created by Los Angeles
                artists and the communities surrounding these walls.
              </p>
              <h3 className="display display--lg" style={{ marginTop: "2.5rem" }}>
                ARTWORK
                <br />
                BORN HERE.
              </h3>
              <div className="era">
                <div>
                  <h3>1984</h3>
                  <p>The legacy.</p>
                </div>
                <div>
                  <h3>2028</h3>
                  <p>The new canvas.</p>
                </div>
                <div>
                  <h3>BEYOND</h3>
                  <p>A permanent creative pipeline for Los Angeles artists.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pilot */}
        <section id="pilot" className="section" aria-labelledby="pilot-title">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">The Next Step</p>
              <h2 id="pilot-title" className="display display--xl">
                START WITH
                <br />
                ONE WALL.
              </h2>
              <p className="prose">
                The idea does not need to begin citywide.
              </p>
              <p className="prose">
                Start with one location. Create one pilot that brings together
                an established Los Angeles artist, emerging talent and young
                apprentices.
              </p>

              <div className="flow flow--pilot" aria-label="Pilot sequence">
                {pilotFlow.map((step, i) => (
                  <div className="flow__item" key={step}>
                    {i > 0 ? (
                      <span className="flow__arrow" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <h3 className="display display--lg" style={{ marginTop: "3rem" }}>
                PROVE THE MODEL.
                <br />
                THEN BUILD FROM IT.
              </h3>
            </Reveal>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="section" aria-labelledby="work-title">
          <div className="shell">
            <Reveal>
              <h2 id="work-title" className="display display--xl">
                SELECTED WORK.
              </h2>
              <div className="work-grid work-grid--select">
                {images.work.map((item, index) => (
                  <SiteImage
                    key={`work-${index}`}
                    src={item.src}
                    alt={item.alt}
                    caption={item.caption}
                    objectPosition={item.objectPosition}
                    className="figure--wide"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="section section--ink"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <Reveal>
              <h2 id="contact-title" className="display display--xl">
                LET&apos;S BUILD
                <br />
                SOMETHING FOR
                <br />
                LOS ANGELES.
              </h2>
              <div className="contact-block contact-block--simple">
                <div className="contact-meta">
                  <p className="name">{site.name}</p>
                  {site.titleLines.map((line) => (
                    <p className="role" key={line}>
                      {line}
                    </p>
                  ))}
                  <p className="role" style={{ marginTop: "1.25rem" }}>
                    {site.location}
                  </p>
                  <p style={{ marginTop: "1.5rem" }}>
                    <a href={site.emailHref}>{site.email}</a>
                  </p>
                  <p>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                  <p>
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {site.instagramLabel}
                    </a>
                  </p>
                </div>
                <a className="cta-link" href={site.emailHref}>
                  Start a conversation →
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div>{site.name}</div>
          <div>{site.location}</div>
          <div>
            © {site.year} {site.name}
          </div>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
