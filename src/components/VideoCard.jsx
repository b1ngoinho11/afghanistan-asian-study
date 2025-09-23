export default function VideoCard({ videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ", title = "Video Title Placeholder", description = "Replace this description with details about the video and how it relates to Afghanistan." }) {
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
    <div className="video-card">
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
      <div className="video-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}