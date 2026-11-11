// Sanjay Sudhakar's About Me page (CSCI 1000 GitHub group project)
// The file name becomes the page address: localhost:3000/SanjaySudhakar
//
// HOW TO EDIT: change the text in the `me` section right below.
// You don't need to touch anything else in this file.

const me = {
  name: 'Sanjay Sudhakar',
  initials: 'SS',
  tagline: 'Computer Science student at CU Boulder',
  about:
    "I'm a CS major at CU Boulder who's really invested in AI and how it's shaping education and the world right now. I'm interested in research and figuring out where I fit in all of it. Outside of class, I love going to the gym, hanging out with friends and family on the weekends, and watching movies.",
  facts: [
    { emoji: '⏱️', text: 'I used to speedcube, and my fastest solve was under 20 seconds' },
    { emoji: '🎾', text: 'I like to play tennis' },
    { emoji: '🃏', text: 'I love board games and card games, and I played Magic as a kid' },
  ],
  classes: [
    'CSCI 1300: Computer Science 1: Starting Computing',
    'CSCI 1000: Computer Science as a Field of Work and Study',
    'APPM 1350: Calculus 1 for Engineers',
    'PHIL 2440: Symbolic Logic',
    'MUEL 3642: History of Jazz',
  ],
  interests: ['AI', 'Board Games', 'Movies', 'Music (Kanye)', 'Gym', 'Tennis'],
  github: 'SanjayS214',
};

export default function SanjaySudhakar() {
  return (
    <div className='page'>
      <title>{me.name}</title>
      <link rel='icon' href='/favicon.ico' />

      <header className='hero'>
        <div className='avatar'>{me.initials}</div>
        <h1>Hi, I'm {me.name.split(' ')[0]}!</h1>
        <p className='tagline'>{me.tagline}</p>
        <a className='pill' href={`https://github.com/${me.github}`}>
          github.com/{me.github}
        </a>
      </header>

      <main>
        <section className='card wide'>
          <h2>About Me</h2>
          <p>{me.about}</p>
        </section>

        <section className='card'>
          <h2>Fun Facts</h2>
          <ul className='facts'>
            {me.facts.map((fact) => (
              <li key={fact.text}>
                <span className='emoji'>{fact.emoji}</span>
                {fact.text}
              </li>
            ))}
          </ul>
        </section>

        <section className='card'>
          <h2>This Semester</h2>
          <ul className='classes'>
            {me.classes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className='card wide'>
          <h2>Interests</h2>
          <div className='tags'>
            {me.interests.map((tag) => (
              <span className='tag' key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        <a className='back' href='/'>
          &larr; Back to Home Page
        </a>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #0f0f10;
          color: #ececec;
          padding-bottom: 4rem;
        }

        .hero {
          text-align: center;
          padding: 4rem 1rem 3rem;
          background: linear-gradient(180deg, #1c1a14 0%, #0f0f10 100%);
          border-bottom: 1px solid #2a2720;
        }

        .avatar {
          width: 110px;
          height: 110px;
          margin: 0 auto 1.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f0f10;
          background: #cfb87c;
          box-shadow: 0 0 0 6px rgba(207, 184, 124, 0.2);
        }

        h1 {
          margin: 0;
          font-size: 3rem;
          letter-spacing: -0.02em;
        }

        .tagline {
          margin: 0.5rem 0 1.5rem;
          font-size: 1.2rem;
          color: #a8a8a8;
        }

        .pill {
          display: inline-block;
          padding: 0.45rem 1rem;
          border: 1px solid #cfb87c;
          border-radius: 999px;
          color: #cfb87c;
          text-decoration: none;
          font-size: 0.95rem;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .pill:hover {
          background: #cfb87c;
          color: #0f0f10;
        }

        main {
          max-width: 56rem;
          margin: 2.5rem auto 0;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .card {
          background: #18181a;
          border: 1px solid #2a2a2e;
          border-radius: 14px;
          padding: 1.5rem;
        }

        .wide {
          grid-column: 1 / -1;
        }

        h2 {
          margin: 0 0 1rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #cfb87c;
        }

        p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          font-size: 1.05rem;
          line-height: 1.5;
          padding: 0.5rem 0;
          border-bottom: 1px solid #242428;
        }

        li:last-child {
          border-bottom: none;
        }

        .emoji {
          margin-right: 0.6rem;
        }

        .classes li::before {
          content: '▸';
          color: #cfb87c;
          margin-right: 0.6rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tag {
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          background: #232320;
          border: 1px solid #3a3628;
          font-size: 0.95rem;
        }

        .back {
          grid-column: 1 / -1;
          justify-self: center;
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          border: 1px solid #2a2a2e;
          border-radius: 10px;
          color: #ececec;
          text-decoration: none;
          transition: border-color 0.15s ease, color 0.15s ease;
        }

        .back:hover {
          border-color: #cfb87c;
          color: #cfb87c;
        }

        @media (max-width: 640px) {
          main {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 2.25rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background: #0f0f10;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}