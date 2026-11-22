import { skillGroups } from '../data/profile'

// The grouped skill list, shared by the home page preview and the
// About page.
function SkillsGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{group.label}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li key={skill} className="rounded-full border border-line bg-card px-3 py-1 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SkillsGrid
