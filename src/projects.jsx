import React, { useState } from "react";
import { portfolioItems, portfolioFilters } from "./data/content.js";

// Convert a YouTube watch/short URL into an embed URL.
function toEmbedUrl(url) {
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
  if (!isYouTube) return null;
  const videoId = url.includes("youtu.be")
    ? url.split("youtu.be/")[1]
    : url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
}

function VideoCard({ item }) {
  const embedUrl = toEmbedUrl(item.video);
  return (
    <div className="project-card pos-relative">
      {embedUrl ? (
        <iframe
          className="project-video"
          src={embedUrl}
          title={item.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      ) : (
        <video className="project-video" src={item.video} controls loop autoPlay playsInline muted />
      )}
      <span className="type-badge">{item.type}</span>
      <p className="project-title">{item.title}</p>
    </div>
  );
}

function DesignCard({ item }) {
  return (
    <div className="project-card pos-relative">
      {item.image ? (
        <img className="project-image" src={item.image} alt={item.title} />
      ) : (
        <div className="design-placeholder flex align-center justify-center">
          <span>{item.title}</span>
        </div>
      )}
      <span className="type-badge">{item.type}</span>
      <p className="project-title">{item.title}</p>
    </div>
  );
}

function CaseStudyCard({ item }) {
  const cs = item.caseStudy;
  return (
    <div className="case-study-card color-white text-start">
      <h3 className="case-study-title">{item.title}</h3>
      <ul className="case-study-list">
        <li><strong>Objective:</strong> {cs.objective}</li>
        <li><strong>Creative:</strong> {cs.creative}</li>
        <li><strong>Audience:</strong> {cs.audience}</li>
        <li><strong>Budget:</strong> {cs.budget}</li>
        <li><strong>Results:</strong> {cs.results}</li>
      </ul>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visibleItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="project-container" id="Portfolio">
      <div className="project-heading text-center color-white" data-aos="fade-down">
        <h5>MY WORK</h5>
        <h2>Portfolio</h2>
      </div>

      <div className="portfolio-filters flex align-center justify-center gap-1" data-aos="fade-up">
        {portfolioFilters.map((f) => (
          <button
            key={f.key}
            className={filter === f.key ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid" data-aos="fade-up">
        {visibleItems.map((item, index) => {
          if (item.category === "video") return <VideoCard key={index} item={item} />;
          if (item.category === "design") return <DesignCard key={index} item={item} />;
          return <CaseStudyCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
