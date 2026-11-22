import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import PhotoCard from '../components/PhotoCard'
import SkillsGrid from '../components/SkillsGrid'
import Education from '../components/Education'
import Reveal from '../components/Reveal'

function About() {
  return (
    <div className="mx-auto max-w-site px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="About" title="A little about me" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
        <Reveal delay={100}>
          <PhotoCard />
          <p className="mt-3 font-mono text-xs text-muted">Based in {profile.location}</p>
        </Reveal>

        <div>
          {profile.bio.map((paragraph, index) => (
            <Reveal key={index} delay={150 + index * 100}>
              <p className="mb-4 max-w-2xl leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}

          <div className="mt-10">
            <Reveal delay={200}>
              <h3 className="font-display text-2xl font-semibold">Skills</h3>
            </Reveal>
            <div className="mt-6">
              <Reveal delay={280}>
                <SkillsGrid />
              </Reveal>
            </div>
          </div>

          <div className="mt-12">
            <Education />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
