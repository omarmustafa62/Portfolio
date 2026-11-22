import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="mx-auto max-w-site px-6 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-2">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-8">
        Back home
      </Link>
    </div>
  )
}

export default NotFound
