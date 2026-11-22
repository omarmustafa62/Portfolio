import { profile } from '../data/profile'
import Reveal from './Reveal'

// Education and training timeline for the About page, built from
// the education list in src/data/profile.ts.
function Education() {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold">Education & training</h3>

      <div className="mt-6 space-y-8 border-l border-line pl-6">
        {profile.education.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 120}>
            <div className="relative">
              <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-clay" />
              <p className="font-mono text-xs text-clay">{entry.year}</p>
              <h4 className="mt-1 font-semibold">{entry.title}</h4>
              <p className="mt-0.5 text-sm text-muted">{entry.place}</p>
              <p className="mt-1 text-sm text-muted">{entry.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Languages</h4>
        <ul className="mt-2 space-y-1">
          {profile.languages.map((language) => (
            <li key={language} className="text-sm">
              {language}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Education
