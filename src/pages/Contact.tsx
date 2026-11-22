import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

interface ContactCard {
  label: string
  value: string
  href: string
  external: boolean
}

// Contact cards render only for contact details that are actually
// set in src/data/profile.ts, so the page never shows a dead or
// placeholder link. Empty fields stay hidden until filled in.
function Contact() {
  const cards: ContactCard[] = [
    profile.email && {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    profile.phoneDisplay && {
      label: 'Phone',
      value: profile.phoneDisplay,
      href: `tel:${profile.phoneHref}`,
      external: false,
    },
    profile.whatsapp && {
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: profile.whatsapp,
      external: true,
    },
    {
      label: 'GitHub',
      value: profile.github.replace('https://', ''),
      href: profile.github,
      external: true,
    },
    profile.linkedin && {
      label: 'LinkedIn',
      value: profile.linkedin.replace('https://www.', ''),
      href: profile.linkedin,
      external: true,
    },
  ].filter((card): card is ContactCard => Boolean(card))

  return (
    <div className="mx-auto max-w-site px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's start a conversation"
          description="Looking for a junior frontend developer? I'd love to hear from you. Email is the best way to reach me."
        />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Reveal key={card.label} delay={index * 90} className="h-full">
            <a
              href={card.href}
              {...(card.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="block h-full rounded-lg border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{card.label}</p>
              <p className="mt-2 break-all font-medium text-clay">{card.value}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={cards.length * 90}>
        <p className="mt-8 font-mono text-xs text-muted">Based in {profile.location}</p>
      </Reveal>
    </div>
  )
}

export default Contact
