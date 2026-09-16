import { Nav } from "./components/Nav";
import { Reveal } from "./components/Reveal";
import { SiteImage } from "./components/SiteImage";
import {
  businessSkills,
  careerLadder,
  cityThemes,
  classroomPath,
  craftSkills,
  images,
  pilotSteps,
  pipeline,
  redirectSteps,
  site,
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
        {/* 09 Hero */}
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

        {/* 10 Proof / Dodgers mural */}
        <section className="section section--tight" aria-labelledby="proof-title">
          <div className="shell">
            <Reveal>
              <SiteImage
                src={images.dodgersMural.src}
                alt={images.dodgersMural.alt}
                caption={images.dodgersMural.caption}
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
              <div className="pull" aria-hidden="false">
                <span>It can create identity.</span>
                <span>It can create pride.</span>
                <span>
                  And, when we invest in the people creating it, it can create
                  opportunity.
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 11 Vision */}
        <section
          id="vision"
          className="section"
          aria-labelledby="vision-title"
        >
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
                Los Angeles has extraordinary artistic talent.
              </p>
              <p className="prose">
                Especially within communities where graffiti, street art,
                lettering, illustration, music, fashion and design are already
                deeply embedded in the culture.
              </p>
              <p className="prose">
                The opportunity is to create more pathways that turn that talent
                into professional experience, economic opportunity and public
                art.
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

        {/* 12 From Graffiti to Opportunity */}
        <section id="youth" className="section" aria-labelledby="youth-title">
          <div className="shell">
            <Reveal>
              <p className="sec-num" aria-hidden="true">
                01
              </p>
              <p className="eyebrow">Youth Artist Development</p>
              <h2 id="youth-title" className="display display--xl">
                FROM GRAFFITI
                <br />
                TO OPPORTUNITY.
              </h2>
              <p className="secondary-line">
                DON&apos;T SUPPRESS THE TALENT.
                <br />
                DEVELOP IT.
              </p>
              <p className="prose">
                Some of the young people writing on Los Angeles walls already
                possess the beginnings of valuable creative skills:
              </p>
              <p className="prose">
                Lettering. Composition. Color. Illustration. Style. Fearlessness.
              </p>
              <p className="prose">
                The challenge is that many young artists may never be shown how
                those abilities can become a legitimate profession.
              </p>
              <p className="prose">
                <strong>Let&apos;s show them.</strong>
              </p>
              <p className="prose">
                I propose a city-supported mural and street-art development
                program connecting young Angelenos with professional muralists,
                graffiti artists, designers, illustrators and other creative
                professionals.
              </p>
              <p className="prose">
                The goal isn&apos;t simply to teach young people how to paint
                murals.
              </p>
              <h3 className="display display--lg" style={{ marginTop: "2.75rem" }}>
                TEACH THEM HOW TO
                <br />
                BECOME PROFESSIONAL ARTISTS.
              </h3>
            </Reveal>
          </div>
        </section>

        {/* 13 Craft + Business */}
        <section className="section section--tight" aria-labelledby="craft-title">
          <div className="shell">
            <h2 id="craft-title" className="visually-hidden">
              Craft and business
            </h2>
            <Reveal className="split">
              <div>
                <h3>Learn the Craft</h3>
                <ol className="skill-list">
                  {craftSkills.map((skill, i) => (
                    <li key={skill}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {skill}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3>Learn the Business</h3>
                <ol className="skill-list">
                  {businessSkills.map((skill, i) => (
                    <li key={skill}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {skill}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="ladder" aria-label="Development path">
                {careerLadder.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
              <p className="prose">
                Pair participants with established Los Angeles muralists, street
                artists and creative professionals.
              </p>
              <p className="prose">
                Young artists can begin as students. Then become apprentices.
                Then assistants. Then working artists. And eventually mentors to
                the generation behind them.
              </p>
              <h3 className="display display--lg" style={{ marginTop: "2.5rem" }}>
                CREATE THE CYCLE
                <br />
                WE WANT TO SEE.
              </h3>
              <div className="duo">
                <SiteImage
                  src={images.youth01.src}
                  alt={images.youth01.alt}
                  className="figure--portrait"
                />
                <SiteImage
                  src={images.youth02.src}
                  alt={images.youth02.alt}
                  className="figure--square"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 14 Redirect the Energy */}
        <section className="section section--ink" aria-labelledby="redirect-title">
          <div className="shell">
            <Reveal>
              <h2 id="redirect-title" className="display display--xl">
                REDIRECT
                <br />
                THE ENERGY.
              </h2>
              <p className="prose">
                Los Angeles spends resources responding to graffiti and vandalism
                after it happens.
              </p>
              <p className="prose">
                This initiative explores another part of the solution:
              </p>
              <p className="prose">
                <strong>
                  Invest in artistic talent before its only canvas is an
                  unauthorized wall.
                </strong>
              </p>
              <p className="prose">
                Not every participant will become a professional artist. Not
                every mural will eliminate vandalism.
              </p>
              <p className="prose">
                But we can create more legitimate places, mentors and economic
                pathways for young people who already have the desire to create.
              </p>
              <div className="ink-steps">
                {redirectSteps.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 15 Reclaim the Walls */}
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
                Los Angeles once turned its infrastructure into monumental public
                art.
              </p>
              <p className="prose">
                The 1984 Olympic era helped establish an iconic chapter in Los
                Angeles mural history.
              </p>
              <p className="prose">
                Decades later, many of those works are no longer visible.
              </p>
              <p className="prose">
                Some of these walls now sit in a recurring cycle:
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
              <h3 className="display display--xl" style={{ marginTop: "3rem" }}>
                LET&apos;S TURN THEM
                <br />
                INTO CANVASES AGAIN.
              </h3>
            </Reveal>
          </div>
        </section>

        {/* 16 Existing walls */}
        <section className="section section--tight" aria-labelledby="walls-title">
          <div className="shell">
            <h2 id="walls-title" className="visually-hidden">
              Existing walls
            </h2>
            <Reveal className="walls">
              <SiteImage
                src={images.wall01.src}
                alt={images.wall01.alt}
                className="figure--portrait"
              />
              <SiteImage
                src={images.wall02.src}
                alt={images.wall02.alt}
                className="figure--wide"
              />
              <SiteImage
                src={images.wall03.src}
                alt={images.wall03.alt}
                className="figure--wide"
              />
            </Reveal>
            <Reveal delay={1}>
              <p className="walls-caption">
                THE OPPORTUNITY
                <br />
                IS ALREADY HERE.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 17 New generation */}
        <section className="section" aria-labelledby="generation-title">
          <div className="shell">
            <Reveal>
              <h2 id="generation-title" className="display display--xl">
                A NEW GENERATION
                <br />
                OF LOS ANGELES
                <br />
                STREET ART.
              </h2>
              <p className="prose">
                I propose identifying high-visibility walls and infrastructure
                where Los Angeles can commission a new generation of monumental
                urban artwork.
              </p>
              <p className="prose">
                Not recreations of what existed before. Not generic civic
                decoration.
              </p>
              <p className="prose">
                <strong>
                  Los Angeles street art created by Los Angeles artists.
                </strong>
              </p>
              <div className="themes">
                {cityThemes.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <h3 className="display display--lg" style={{ marginTop: "3rem" }}>
                ARTWORK
                <br />
                BORN HERE.
              </h3>
              <h3 className="display display--lg" style={{ marginTop: "2rem" }}>
                SOURCE THE
                <br />
                TALENT HERE.
              </h3>
              <p className="prose">
                Los Angeles already has the artists.
              </p>
              <p className="prose">
                Muralists. Graffiti artists. Illustrators. Designers. Painters.
                Photographers. Lettering artists. Emerging creatives who simply
                haven&apos;t received their first major commission yet.
              </p>
              <p className="prose">
                Let&apos;s find them. Let&apos;s commission them. Let&apos;s pair
                experienced artists with apprentices coming through the youth
                program. And let&apos;s pay local creative talent to transform
                Los Angeles.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 18 Connect the programs */}
        <section className="section" aria-labelledby="classroom-title">
          <div className="shell">
            <Reveal>
              <h2 id="classroom-title" className="display display--xl">
                THE WALL BECOMES
                <br />
                THE CLASSROOM.
              </h2>
              <div className="path" aria-label="Artist pathway">
                {classroomPath.map((step, index) => (
                  <div className="path__item" key={step}>
                    <span aria-hidden="true">{index === 0 ? "·" : "↓"}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <p className="prose">
                This is where the two ideas become one.
              </p>
              <p className="prose">
                A young person could enter the program learning basic mural
                techniques. Work alongside a professional artist. Participate in
                a neighborhood project. Build a portfolio. Become a paid
                assistant. Develop their own artistic voice. And eventually earn
                the opportunity to design a wall themselves.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 19 Respect the culture */}
        <section className="section" aria-labelledby="respect-title">
          <div className="shell">
            <Reveal>
              <h2 id="respect-title" className="display display--xl">
                RESPECT
                <br />
                THE CULTURE.
              </h2>
              <p className="prose">
                The goal isn&apos;t to pretend commissioned murals will eliminate
                graffiti.
              </p>
              <p className="prose">
                The goal is to create artwork that communities recognize as
                authentic, give artists ownership in the spaces around them, and
                replace repeatedly painted-over surfaces with something
                culturally valuable.
              </p>
              <p className="prose">
                When local artists help create the environment, there is an
                opportunity to build a different relationship between the wall
                and the community around it.
              </p>
              <div className="ask">
                <div>
                  <h3>Instead of asking:</h3>
                  <p>
                    HOW QUICKLY CAN WE
                    <br />
                    PAINT OVER THIS WALL?
                  </p>
                </div>
                <div>
                  <h3>Let&apos;s also ask:</h3>
                  <p>
                    WHAT COULD THIS
                    <br />
                    WALL BECOME?
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 20 LA84 → LA28 */}
        <section
          id="la84-la28"
          className="section section--ink"
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
                city&apos;s public-art history.
              </p>
              <p className="prose">
                Imagine visitors traveling through Los Angeles and encountering
                monumental artwork created by artists from the communities
                surrounding them.
              </p>
              <p className="prose">
                Not artwork imported into Los Angeles.
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

        {/* 21 Manifesto */}
        <section className="section" aria-labelledby="manifesto-title">
          <div className="shell">
            <Reveal>
              <h2 id="manifesto-title" className="display display--xl">
                GIVE LOS ANGELES
                <br />
                THE WALLS.
              </h2>
              <ul className="manifesto-list">
                <li>Give young artists somewhere to develop.</li>
                <li>Give established artists meaningful commissions.</li>
                <li>Give neighborhoods artwork they can identify with.</li>
                <li>Give emerging talent a way into the creative economy.</li>
                <li>
                  Give visitors something uniquely Los Angeles to experience.
                </li>
                <li>
                  And turn walls that currently represent an ongoing maintenance
                  problem into opportunities for culture, mentorship and civic
                  pride.
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 22 Pilot */}
        <section className="section" aria-labelledby="pilot-title">
          <div className="shell">
            <Reveal>
              <h2 id="pilot-title" className="display display--xl">
                START WITH
                <br />
                ONE WALL.
              </h2>
              <p className="prose">
                This doesn&apos;t need to begin as a massive citywide program.
              </p>
              <p className="prose">Start with a pilot.</p>
              <ol className="pilot">
                {pilotSteps.map((step) => (
                  <li key={step.n}>
                    <span>{step.n}</span>
                    {step.text}
                  </li>
                ))}
              </ol>
              <h3 className="display display--lg" style={{ marginTop: "3rem" }}>
                PROVE THE IDEA.
                <br />
                THEN SCALE IT.
              </h3>
            </Reveal>
          </div>
        </section>

        {/* 23 Recent work */}
        <section id="work" className="section" aria-labelledby="work-title">
          <div className="shell">
            <Reveal>
              <h2 id="work-title" className="display display--xl">
                RECENT WORK.
              </h2>
              <div className="work-grid">
                {images.work.map((item, index) => (
                  <SiteImage
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    caption={item.caption}
                    className={
                      index % 3 === 1 ? "figure--portrait" : "figure--wide"
                    }
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 24 Contact */}
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
                SOMETHING
                <br />
                FOR LOS ANGELES.
              </h2>
              <p className="prose">
                I would welcome the opportunity to help develop these ideas
                alongside the City of Los Angeles, local artists, community
                organizations, schools, businesses and private partners.
              </p>
              <p className="prose">My goal is simple:</p>
              <p className="prose">
                <strong>
                  Take artistic talent that already exists in Los Angeles and
                  create more opportunities for that talent to improve the city
                  that created it.
                </strong>
              </p>
              <div className="contact-block">
                <div className="contact-meta">
                  <p className="name">{site.name}</p>
                  <p className="role">{site.title}</p>
                  <p>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                  <p>
                    <a href={site.emailHref}>{site.email}</a>
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
                  Let&apos;s talk →
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
          <div>© {site.year} {site.name}</div>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
