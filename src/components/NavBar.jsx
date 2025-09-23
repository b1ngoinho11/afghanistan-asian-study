import { useEffect, useState } from 'react'

export default function NavBar() {
  const [isSolid, setIsSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsSolid(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${isSolid ? 'navbar--solid' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#hero">Afghanistan</a>
        <nav className="links">
          <a href="#hero">Home</a>
          <a href="#overview">Overview</a>
          <div className="dropdown">
            <button className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Video ▾</button>
            <div className="dropdown-menu" role="menu">
              <a href="#video-asian-country" role="menuitem">Asian Country</a>
              <a href="#video-health-wellness" role="menuitem">Health and Wellness</a>
              <a href="#video-personality" role="menuitem">Personality</a>
              <a href="#video-cultural-festivals" role="menuitem">Cultural Festivals</a>
              <a href="#video-local-entertainment" role="menuitem">Local Entertainment</a>
              <a href="#video-languages-dialects" role="menuitem">Languages and Dialects</a>
              <a href="#video-traditional-sports" role="menuitem">Traditional Sports</a>
              <a href="#video-communication" role="menuitem">Communication</a>
              <a href="#video-environment" role="menuitem">Environment</a>
            </div>
          </div>
          <a href="#created-by">Created By</a>
        </nav>
      </div>
    </header>
  )
}


