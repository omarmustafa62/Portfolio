// ============================================================
// YOUR PROJECTS: 12 slots, one object each.
// The first 8 are your real GitHub repositories, with descriptions
// carried over from your previous portfolio and screenshots of the
// running sites in public/images/projects. Slots 9-12 are
// placeholders for work in progress; replace them as you finish.
// - title: the project name
// - description: one or two honest lines about what it does and
//   what you built or learned
// - tech: the main technologies you used (2-4 is plenty)
// - image: a screenshot of the project in public/images/projects,
//   or '' for no image
// - repoUrl: link to the GitHub repository, or '' if it is not
//   public yet (the card then shows as "in progress")
// - liveUrl: link to a live demo, or '' if there is none
// ============================================================

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  repoUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Contact Hub',
    description: 'A contact manager with CRUD, search, favorites, emergency contacts, and persistent Local Storage data.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    image: '/images/projects/contact-hub.jpg',
    repoUrl: 'https://github.com/omarmustafa62/Contact-Hub-Contact-Manager',
    liveUrl: '',
  },
  {
    id: 2,
    title: "What's For Dinner",
    description: 'A recipe discovery app that fetches meals from a REST API and shows their details, ingredients, and cooking instructions.',
    tech: ['JavaScript', 'REST API', 'CSS'],
    image: '/images/projects/whats-for-dinner.jpg',
    repoUrl: 'https://github.com/omarmustafa62/Whats-For-Dinner-Recipe-App',
    liveUrl: '',
  },
  {
    id: 3,
    title: 'NutriPlan',
    description: 'A starter UI for food, nutrition and fitness planning, with meal discovery and food logging planned.',
    tech: ['JavaScript', 'CSS', 'HTML'],
    image: '/images/projects/nutriplan.jpg',
    repoUrl: 'https://github.com/omarmustafa62/NutriPlan',
    liveUrl: '',
  },
  {
    id: 4,
    title: 'Muddabir Finance Dashboard',
    description: 'An Arabic personal finance dashboard with an RTL layout and responsive design.',
    tech: ['HTML', 'CSS', 'RTL'],
    image: '/images/projects/muddabir.jpg',
    repoUrl: 'https://github.com/omarmustafa62/Muddabir-Finance-Dashboard',
    liveUrl: '',
  },
  {
    id: 5,
    title: 'Cosmos Space Dashboard',
    description: 'A space-themed dashboard that displays external API data with asynchronous JavaScript and interactive UI elements.',
    tech: ['HTML', 'JavaScript', 'APIs'],
    image: '/images/projects/cosmos.jpg',
    repoUrl: 'https://github.com/omarmustafa62/Cosmos-Space-Dashboard',
    liveUrl: '',
  },
  {
    id: 6,
    title: 'EliteHomes',
    description: 'A real estate website for browsing property listings, locations and services through a responsive interface.',
    tech: ['HTML', 'CSS'],
    image: '/images/projects/elitehomes.jpg',
    repoUrl: 'https://github.com/omarmustafa62/EliteHomes',
    liveUrl: '',
  },
  {
    id: 7,
    title: 'GameArena',
    description: 'A responsive gaming and esports site for exploring games, tournaments and teams.',
    tech: ['HTML', 'CSS'],
    image: '/images/projects/gamearena.jpg',
    repoUrl: 'https://github.com/omarmustafa62/GameArena-Gaming-Website',
    liveUrl: '',
  },
  {
    id: 8,
    title: 'React project in progress',
    description: 'A new React project is on the way. This card goes live as soon as the repository is public.',
    tech: ['React'],
    image: '',
    repoUrl: '',
    liveUrl: '',
  },
  {
    id: 9,
    title: 'React project in progress',
    description: 'A new React project is on the way. This card goes live as soon as the repository is public.',
    tech: ['React'],
    image: '',
    repoUrl: '',
    liveUrl: '',
  },
  {
    id: 10,
    title: 'Next.js project in progress',
    description: 'A new Next.js project is on the way. This card goes live as soon as the repository is public.',
    tech: ['Next.js'],
    image: '',
    repoUrl: '',
    liveUrl: '',
  },
  {
    id: 11,
    title: 'Room to grow',
    description: 'An open slot for whatever you build next. Replace the text and link when it is ready.',
    tech: [],
    image: '',
    repoUrl: '',
    liveUrl: '',
  },
]
