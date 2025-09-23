export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  )
}


