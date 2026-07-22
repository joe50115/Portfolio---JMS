import { useState } from "react";
import { svgPlaceholder } from "../utils/placeholder.js";

// Supports three item shapes:
//   { type: "image", seed, caption }        - generated placeholder image
//   { type: "image", src, caption }         - real image, once you have one
//   { type: "video", src, caption }         - real video file/URL
function Gallery({ label, items }) {
  const [openSrc, setOpenSrc] = useState(null);
  const [openAlt, setOpenAlt] = useState("");

  if (!items || items.length === 0) return null;

  function openLightbox(item) {
    if (item.type === "video") return; // videos play inline, no lightbox
    setOpenSrc(item.src || svgPlaceholder(item.seed, label, 1600, 900));
    setOpenAlt(item.caption);
  }

  function closeLightbox() {
    setOpenSrc(null);
  }

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <figure className="gallery-item" key={item.seed || item.src || i}>
            {item.type === "video" ? (
              <video src={item.src} controls preload="metadata" />
            ) : (
              <img
                src={item.src || svgPlaceholder(item.seed, label)}
                alt={item.caption}
                loading="lazy"
                onClick={() => openLightbox(item)}
              />
            )}
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className={`lightbox${openSrc ? " open" : ""}`} onClick={closeLightbox}>
        <button className="lb-close" onClick={closeLightbox}>Close ✕</button>
        {openSrc && <img src={openSrc} alt={openAlt} onClick={(e) => e.stopPropagation()} />}
      </div>
    </>
  );
}

export default Gallery;
