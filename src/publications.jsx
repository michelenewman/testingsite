import React from "react";
import "./index.css"; // reuse your global styles

export default function Publications() {
  const papers = [
    {
      title: "Epistemic Play and Metadata Frameworks",
      venue: "CHI 2024",
      link: "https://example.com/paper1",
      tags: ["participatory design", "metadata", "youth co-research"],
    },
    {
      title: "Living Archives as Interface",
      venue: "iConference 2025",
      link: "https://example.com/paper2",
      tags: ["archives", "interface design", "multiverse narrative"],
    },
  ];

  return (
    <div className="container">
      <h2>Publications</h2>
      <div className="shelf">
        {papers.map((paper, i) => (
          <div key={i} className="card">
            <h3 className="title">
              <a href={paper.link} target="_blank" rel="noopener noreferrer">
                {paper.title}
              </a>
            </h3>
            <p className="abstract">{paper.venue}</p>
            <div className="tags">
              {paper.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
