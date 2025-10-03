export default function VideoCard({ id, videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ", title = "Video Title Placeholder", description = "Replace this description with details about the video and how it relates to Afghanistan.", reverse = false, tone = "neutral", images = [] }) {
  const toEmbedUrl = (url) => {
    try {
      const u = new URL(url);
      const host = u.hostname.replace(/^www\./, "");

      // Already an embed URL
      if (host === "youtube.com" || host === "m.youtube.com") {
        if (u.pathname.startsWith("/embed/")) {
          return `${u.origin}${u.pathname}?rel=0&modestbranding=1`;
        }
        if (u.pathname === "/watch") {
          const id = u.searchParams.get("v");
          if (id) return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
        }
        if (u.pathname.startsWith("/shorts/")) {
          const id = u.pathname.split("/")[2];
          if (id) return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
        }
      }

      if (host === "youtu.be") {
        const id = u.pathname.replace("/", "");
        if (id) return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
      }

      // Fallback: if caller already passed an embed link or something else, return as-is
      return url;
    } catch {
      return url;
    }
  };

  const embedUrl = toEmbedUrl(videoSrc);

  return (
    <div className={`video-card ${reverse ? 'video-card--reverse' : ''}`} id={id}>
      <div className="video-wrapper">
        <iframe
          className="video-embed"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className={`video-description video-description--${tone}`}>
        <h3 className="text-xl">{title}</h3>
        <br></br>
        <p>{description}</p>
        {Array.isArray(images) && images.length > 0 ? (
          <div className={`video-images ${
            images.length === 1 ? 'video-images--grid-1' :
            images.length === 2 ? 'video-images--grid-2' :
            images.length === 3 ? 'video-images--grid-3' :
            'video-images--grid-4'
          }`}>
            {images.slice(0, 4).map((src, idx) => (
              <img key={idx} src={src} alt="" loading="lazy" />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}