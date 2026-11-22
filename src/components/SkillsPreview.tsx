import SectionHeading from './SectionHeading'
import SkillsGrid from './SkillsGrid'
import Reveal from './Reveal'

// Home page section: a quick look at the toolkit.
function SkillsPreview() {
  return (
    <section>
      <div className="mx-auto max-w-site px-6 py-16">
        <Reveal>
          <SectionHeading eyebrow="Toolkit" title="What I work with" />
        </Reveal>
        <Reveal delay={120}>
          <SkillsGrid />
        </Reveal>
      </div>
    </section>
  )
}

export default SkillsPreview
