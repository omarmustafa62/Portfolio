import type { Project } from '../data/projects'
import { publicAssetUrl } from '../utils/publicAssetUrl'

interface ProjectCardProps {
  project: Project
}

// One project card: a real screenshot of the project on top, then
// title, description, tech tags and links. A project without a
// repoUrl is work in progress: dashed frame, no image, no links,
// so visitors never hit a dead or wrong link.
function ProjectCard({ project }: ProjectCardProps) {
  const number = String(project.id).padStart(2, '0')
  const inProgress = project.repoUrl === ''

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        inProgress ? 'border-dashed border-line p-6' : 'border-line'
      }`}
    >
      {project.image && (
        <div className="relative overflow-hidden border-b border-line">
          <img
            src={publicAssetUrl(project.image)}
            alt={`Screenshot of the ${project.title} project`}
            loading="lazy"
            className="aspect-[8/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className={project.image ? 'flex flex-1 flex-col p-6' : 'flex flex-1 flex-col'}>
        <div className="flex items-start justify-between">
          <span className="font-mono text-sm text-clay">{number}</span>
          {inProgress ? (
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              In progress
            </span>
          ) : (
            <div className="flex gap-4 text-sm">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-clay hover:decoration-clay"
              >
                Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-clay hover:decoration-clay"
                >
                  Live
                </a>
              )}
            </div>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
