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
          <a href="#video">Video</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}


