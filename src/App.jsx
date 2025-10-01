import React, { useState, useEffect } from "react";
import "./index.css";
import profilePic from "./assets/pfp.jpg";
import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function App() {
  const [page, setPage] = useState("home");
  const [typedName, setTypedName] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const fullText = "Michele Newman :)";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setTypedName(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypedName("Michele Newman");
        }, 1000);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  const [showApproach, setShowApproach] = useState(false);

const researchRealms = [
  {
    label: "Participatory Design & Collaborative Research",
    icon: "fas fa-palette",
    description: "I co-research with youth and communities to build systems rooted in shared values and lived experience."
  },
  {
    label: "Creative Knowledge Building",
    icon: "fas fa-cubes",
    description: "I treat design as scaffolding to make knowledge modular, playful, and cutlurally resonant."
  },
  {
    label: "Interactive Media & Metadata",
    icon: "fas fa-infinity",
    description: "I explore how metadata and media can animate scholarly identity and invite remixing."
  },
  {
    label: "Understanding Digital Cultures",
    icon: "fas fa-book",
    description: "I study how people play, learn, and build meaning in digital spaces—from fandoms to file systems."
  },
  {
    label: "Playful Learning & Reflection",
    icon: "fas fa-gamepad",
    description: "I design systems that scaffold inquiry through play, reflection, and creative exploration."
  },
  {
    label: "Creativity Support & Infrastructure",
    icon: "fas fa-layer-group",
    description: "I build modular frameworks that support creative work, remixability, and shared meaning-making."
  }
];


  const publications = [
    {
      title: "I Would Not Be This Version of Myself Today: Elaborating on the Effects of Eudaimonic Gaming Experiences",
      venue: "CHI PLAY 2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:eQOLeE2rZwMC",
      tags: ["games", "supporting author"]
    },
     {
      title: "Exploring the Collaborative Co-Creation Process with AI: A Case Study in Novice Music Production",
      venue: "DIS 2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:YsMSGLbcyi4C",
      tags: ["music", "generative ai", "creativity support", "supporting author"]
    },
        {
      title: "I want it to talk like Darth Vader: Helping Children Construct Creative Self-Efficacy with Generative AI",
      venue: "CHI 2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:UeHWp8X0CEIC",
      tags: ["generative ai", "creativity support", "co-design", "youth", "lead author"]
    },
    {
      title: "You Are Tilted!: Leveraging Tabletop Gaming to Manage Tilt and Strengthen Team Dynamics in Esports",
      venue: "CHI PLAY 2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:zYLM7Y9cAGgC",
      tags: ["games", "co-design", "youth", "supporting author"]
    },
      {
      title: "Participatory Media and Game Preservation: A Taxonomy of YouTube Game‐Related Content",
      venue: "ASIS&T 2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:Tyk-4Ss8FVUC",
      tags: ["games", "digital preservation", "metadata", "lead author"]
    },
      {
      title: "Mediating Culture: Cultivating Socio-cultural Understanding of AI in Children through Participatory Design",
      venue: "DIS 2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:IjCSPb-OGe4C",
      tags: ["generative ai", "literacy", "education", "co-design", "youth", "lead author"]
    },
          {
      title: "Human-AI Music Process: A Dataset of AI-Supported Songwriting Processes from the AI Song Contest",
      venue: "ISMIR 2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:W7OEmFMy1HYC",
      tags: ["music", "creativity support", "generative ai", "supporting author"]
    },
    {
      title: "Purposeful Play: Evaluation and Co-Design of Casual Music Creation Applications with Children",
      venue: "ISMIR 2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:Y0pCki6q_DkC",
      tags: ["music", "creativity support", "co-design", "youth", "lead author"]
    },
        {
      title: "Human-AI Music Creation: Understanding the Perceptions and Experiences of Music Creators for Ethical and Productive Collaboration",
      venue: "ISMIR 2023",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:9yKSN-GCB0IC",
      tags: ["music", "creativity support", "generative ai", "lead author"]
    },
    {
      title: "What makes children's responses to creativity assessments difficult to judge reliably?",
      venue: "The Journal of Creative Behavior 2023",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:u-x6o8ySG0sC",
      tags: ["text mining", "education", "youth", "supporting author"]
    },
        {
      title: "How Do the Kids Speak? Improving Educational Use of Text Mining with Child-Directed Language Models",
      venue: "Information and Learning Sciences 2023",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:u5HHmVD_uO8C",
      tags: ["text mining", "education", "youth", "supporting author"]
    },
            {
      title: "Gender Differences in Ethical Stances for Playing AR Games: The Case of Pokémon GO",
      venue: "DiGRA 2023",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Gaj7ivAAAAAJ&sortby=pubdate&citation_for_view=Gaj7ivAAAAAJ:d1gkVwhDpl0C",
      tags: ["games", "supporting author"]
    },
  ];

const priorityTags = ["lead author", "supporting author"];

// Extract all unique tags from publications
const uniqueTags = [...new Set(publications.flatMap(p => p.tags))];

// Filter out priority tags from the rest
const secondaryTags = uniqueTags
  .filter(tag => !priorityTags.includes(tag))
  .sort((a, b) => a.localeCompare(b));

// Final tag list: priority first, then sorted secondary
const allTags = [...priorityTags, ...secondaryTags];

// Normalize tag matching for filtering
const filteredPubs = activeTag
  ? publications.filter(p =>
      p.tags.some(tag => tag.trim().toLowerCase() === activeTag.trim().toLowerCase())
    )
  : publications;


  return (
    <>
      <nav className="top-nav">
        <button className="nav-link" onClick={() => setPage("home")}>Home</button>
        <button className="nav-link" onClick={() => setPage("research")}>Research</button>
        <button className="nav-link" onClick={() => setPage("publications")}>Publications</button>

      </nav>

      <div className="container">
      
        {page === "home" && (
          <section className="bio">
            <img src={profilePic} alt="Michele Newman portrait" className="profile" />
            <h1 className="typewriter">{typedName}</h1>
            <p className="tagline">PhD Candidate | University of Washington iSchool</p>
            <p>
           <p className="identity-line">
            I’m a <span className="identity librarian">librarian,</span>{' '}
          <span className="identity researcher">researcher,</span>{' '}
          <span className="identity creative">creative,</span> {'and '}
          <span className="identity educator">educator</span>{' '}
          working across library science, human–computer interaction, and media studies.
</p>

            </p>
            <p> At UW, I work with...</p>
            <ul className="affiliations">
              <li>
                <a href="https://gamer.ischool.uw.edu/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-gamepad"></i> UW Gamer Group
                </a>
              </li>
              <li>
              <a href="https://www.kidsteam.ischool.uw.edu/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-users"></i> KidsTeam UW
                </a>
              </li>
            </ul>
          </section>
        )}


       {page === "research" && (
  <section className="interests">
    <h2>Research Realms</h2>

    <p className="realms-intro">
  Welcome to my research realms—a living archive of the values, questions, and communities that shape my scholarly journey. Here, I highlight both the topics I explore and the identity I bring to them: librarian, co-designer, creative knowledge-builder. This space reflects my commitment to participatory design, care-centered inquiry, and playful, creative scholarship.   </p>

<button
  className="approach-toggle"
  onClick={() => setShowApproach(!showApproach)}
>
  {showApproach ? "Hide My Approach" : "More About My Approach"}
</button>

   {showApproach && (
  <section className="approach-section">
    <p className="approach-intro">
      I approach research as a librarian, designer, and co-creator. My work centers care, access, and community—treating design as epistemic scaffolding for inquiry, reflection, and shared meaning-making. I collaborate with youth and communities to build systems that feel modular, playful, and alive.
    </p>
    <div className="approach-tracks">
      {[
        {
          title: "Librarian First",
          description: "I foreground LIS in every decision—centering care, access, and community in scholarly design."
        },
        {
          title: "Participatory Designer",
          description: "I co-research with youth and communities, building systems that reflect shared values and lived experience."
        },
        {
          title: "Creative Knowledge-Builder",
          description: "I remix scholarly communication into interactive media, modular metaphors, and playful archives."
        }
      ].map((track, i) => (
        <div className="approach-card" key={i}>
          <h4>{track.title}</h4>
          <p>{track.description}</p>
        </div>
      ))}
    </div>
  </section>
)}

<hr className="section-divider" />

    <div className="interest-grid">
  {researchRealms.map((realm, i) => (
    <div className="interest-card" key={i}>
      <i className={`interest-icon ${realm.icon}`} aria-hidden="true"></i>
      <span className="interest-label">{realm.label}</span>
      <p className="interest-description">{realm.description}</p>
    </div>
  ))}
</div>

  </section>
)}

        {page === "publications" && (
          <section className="interests">
            <h2>Publications</h2>
  <p>
  For a complete and up-to-date list of my scholarly work, please visit my
  <a href="https://scholar.google.com/citations?user=Gaj7ivAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="cv-link">
    Google Scholar profile
  </a>
  or
  <a href="/MicheleNewman_CV.pdf" download class="cv-link">
    download my CV
  </a>.
</p>


            <div className="special-button">
              <button
                className={`tag-button show-all-button ${activeTag === null ? "active" : ""}`}
                onClick={() => setActiveTag(null)}
              >
                <i className="fas fa-book"></i> Show All Papers
              </button>
            </div>
            <div className="tag-filter">
              {allTags.map((tag, i) => (
                <button
                  key={i}
                  className={`tag-button ${activeTag === tag ? "active" : ""}`}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="shelf">
              {filteredPubs.map((paper, i) => (
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
          </section>
        )} 
      </div>

      <footer className="footer">
        <div className="footer-icons">
          <a href="mailto:michele.newman@example.com" target="_blank" className="footer-link"><i className="fas fa-envelope"></i></a>
          <a href="https://scholar.google.com/citations?user=Gaj7ivAAAAAJ&hl=en" target="_blank" className="footer-link"><i className="fas fa-graduation-cap"></i></a>
          <a href="https://orcid.org/0000-0002-5293-7992" target="_blank" className="footer-link"><i className="fab fa-orcid"></i></a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Michele Newman. All rights reserved.
        </div>
      </footer>
    </>
  );
}
