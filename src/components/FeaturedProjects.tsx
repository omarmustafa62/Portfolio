import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

// Home page section: the first three shipped projects plus a link
// to the full projects page. Cards reveal one after another.
function FeaturedProjects() {
  const featured = projects.filter((project) => project.repoUrl !== '').slice(0, 3)

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-site px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A few things I have built. The full list is on the projects page."
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={featured.length * 90}>
          <Link
            to="/projects"
            className="mt-8 inline-block text-sm font-medium text-clay underline decoration-line underline-offset-4 hover:decoration-clay"
          >
            See all projects →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default FeaturedProjects
