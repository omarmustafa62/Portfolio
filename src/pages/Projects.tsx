import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function Projects() {
  const shipped = projects.filter((project) => project.repoUrl !== '').length
  const withShots = projects.filter((project) => project.image !== '').length

  return (
    <div className="mx-auto max-w-site px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          description={`${shipped} projects shipped on GitHub, ${withShots} of them shown with a real screenshot of the running site, plus ${projects.length - shipped} slots saved for work in progress. The Code link opens the repository.`}
        />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Projects
