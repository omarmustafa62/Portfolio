// ============================================================
// YOUR PERSONAL INFO: edit everything in this file.
// Nothing here is fetched from anywhere; it is all plain text
// you control. An empty string ('') hides that item from the site.
// ============================================================

export const profile = {
  name: 'Omar Mustafa',
  role: 'Junior Frontend Developer',
  availability: 'Open to entry-level opportunities',
  location: 'Egypt',

  // One honest sentence about yourself.
  headline:
    'I build responsive, interactive web interfaces with HTML, CSS and JavaScript.',

  // A short paragraph for the hero section.
  intro:
    "I'm looking for an entry-level role where I can contribute and grow. I recently finished professional frontend training at Route Academy, and my projects live on GitHub, from a recipe discovery app to an Arabic finance dashboard.",

  // Longer bio for the About page.
  bio: [
    "I'm a junior frontend developer with hands-on experience building responsive and interactive web projects. I work with HTML, CSS and JavaScript, and I'm developing my React skills and TypeScript fundamentals through projects and professional training.",
    "Right now I'm focused on React and Next.js: my first projects with them are in progress and will appear here once they're ready. I'm looking for an entry-level role where I can contribute and grow with a team.",
  ],

  languages: ['Arabic: native', 'English: B2 (upper-intermediate)'],

  education: [
    {
      year: '2024',
      title: 'HICMIS Graduate',
      place: 'High Institute of Computer and Management Information Systems',
      note: 'Graduated in 2024.',
    },
    {
      year: '2026',
      title: 'Frontend Development Training',
      place: 'Route Academy',
      note: 'Professional frontend development training with practical projects applying web fundamentals.',
    },
  ],

  // Your photo: put a file named photo.jpg in the public/images
  // folder and it will show up automatically on the About page.
  photo: '/images/photo.jpg',

  // Contact + social links. Leave any as '' to hide it.
  email: 'omarmustafa62dx@gmail.com',
  phoneDisplay: '+20 109 285 7117',
  phoneHref: '+201092857117',
  whatsapp: 'https://wa.me/201092857117',
  github: 'https://github.com/omarmustafa62',
  linkedin: 'https://www.linkedin.com/in/omarmustafaa',

  // Optional personal socials. Paste the URL to show the link.
  facebook: '',
  instagram: '',
}

// Skills grounded in your own portfolio wording. Remove anything
// you cannot discuss in an interview: an honest short list beats
// a long fake one.
export const skillGroups = [
  {
    label: 'Core',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    label: 'Layout & Styling',
    skills: ['Tailwind CSS', 'Bootstrap 5', 'Flexbox & CSS Grid', 'Responsive Design'],
  },
  {
    label: 'Currently Growing',
    skills: ['React', 'TypeScript', 'Next.js'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'REST APIs & JSON'],
  },
]
