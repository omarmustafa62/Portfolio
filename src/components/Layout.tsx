import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

// Layout wraps every page with the shared navbar and footer.
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
