import { profile } from '../data/profile'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.name}
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-clay"
          >
            GitHub
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-clay"
            >
              LinkedIn
            </a>
          )}
          {profile.whatsapp && (
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-clay"
            >
              WhatsApp
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-clay"
            >
              Email
            </a>
          )}
        </div>

        <p className="font-mono text-xs text-muted">Built with React, TypeScript & Tailwind</p>
      </div>
    </footer>
  )
}

export default Footer
