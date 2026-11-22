import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import { publicAssetUrl } from '../utils/publicAssetUrl'

// The top section of the home page: introduction on the left and a
// framed preview of real project work on the right, so the first
// thing a visitor sees is built product, not a CV block.
function Hero() {
  return (
    <section className="overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-site items-center gap-12 px-6 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          {profile.availability && (
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
              </span>
              {profile.availability}
            </p>
          )}
          <p className="eyebrow mt-6">{profile.role}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium text-ink">{profile.headline}</p>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              View my projects
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in touch
            </Link>
          </div>
        </Reveal>

        {/* Framed screenshots of real projects, stacked with a slight tilt on desktop */}
        <Reveal delay={200} className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -left-6 top-10 w-72 rotate-[-6deg] overflow-hidden rounded-lg border border-line bg-card shadow-lg">
              <BrowserBar />
              <img
                src={publicAssetUrl('/images/projects/cosmos.jpg')}
                alt="Screenshot of the Cosmos Space Dashboard project"
                className="aspect-[8/5] w-full object-cover object-top"
              />
            </div>
            <div className="relative ml-auto w-[26rem] rotate-[2deg] overflow-hidden rounded-lg border border-line bg-card shadow-xl">
              <BrowserBar />
              <img
                src={publicAssetUrl('/images/projects/gamearena.jpg')}
                alt="Screenshot of the GameArena project"
                className="aspect-[8/5] w-full object-cover object-top"
              />
            </div>
            <div className="relative -mt-10 ml-4 w-80 rotate-[-2deg] overflow-hidden rounded-lg border border-line bg-card shadow-lg">
              <BrowserBar />
              <img
                src={publicAssetUrl('/images/projects/muddabir.jpg')}
                alt="Screenshot of the Muddabir Finance Dashboard project"
                className="aspect-[8/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
        {/* On small screens, one framed preview keeps the hero visual */}
        <Reveal delay={200} className="lg:hidden">
          <div className="overflow-hidden rounded-lg border border-line bg-card shadow-lg">
            <BrowserBar />
            <img
              src={publicAssetUrl('/images/projects/gamearena.jpg')}
              alt="Screenshot of the GameArena project"
              className="aspect-[8/5] w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-site px-6 pb-10">
        <div className="animate-scroll-cue flex items-center gap-2 font-mono text-xs text-muted">
          <span>Scroll to explore</span>
          <span aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  )
}

// Minimal browser-chrome bar used above framed screenshots.
function BrowserBar() {
  return (
    <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-line" />
      <span className="h-2 w-2 rounded-full bg-line" />
    </div>
  )
}

export default Hero
