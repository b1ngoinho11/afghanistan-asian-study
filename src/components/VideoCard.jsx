export default function VideoCard({ videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ", title = "Video Title Placeholder", description = "Replace this description with details about the video and how it relates to Afghanistan." }) {
  return (
    <div className="video-card">
      <div className="video-wrapper">
        <iframe
          className="video-embed"
          src={videoSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}