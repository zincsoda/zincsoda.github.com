import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <div className="site-content">
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
