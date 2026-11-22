import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import SkillsPreview from '../components/SkillsPreview'

// The home page only composes its section components; each section
// lives in its own file under src/components.
function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
    </>
  )
}

export default Home
