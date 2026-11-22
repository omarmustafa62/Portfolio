interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

// Consistent heading block used at the top of each section.
function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-2">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-muted">{description}</p>}
    </div>
  )
}

export default SectionHeading
