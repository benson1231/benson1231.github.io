import React from "react";
import "../styles/portfolio.css";
import gitbookImg from "../assets/projects/gitbook.jpeg";
import toolsImg from "../assets/projects/tools.png";
import rnaseqImg from "../assets/projects/snakemake-rnaseq.png";
import scrnaImg from "../assets/projects/NTU_scRNA.jpeg";
import webImg from "../assets/projects/web.jpeg";

const projects = [
  {
    title: "My gitbook: Computer Science & Biomedical Applications",
    img: gitbookImg,
    link: "https://benson1231.gitbook.io/benson1231-docs",
    description: `A gitbook documenting my journey and insights across computer science, bioinformatics, and biomedical research. Built with GitBook and actively maintained with real-world examples, tutorials, and references.`,
  },
  {
    title: "My tools",
    img: toolsImg,
    link: "https://benson1231.github.io/tools/",
    description: `A curated platform documenting bioinformatics tools, NGS workflows, and computational resources. Built as a centralized knowledge hub for pipeline development, reproducible research, and engineering practices in biomedical data analysis.`,
  },
  {
    title: "RNAseq Analysis using Snakemake",
    img: rnaseqImg,
    link: "https://benson1231.github.io/snakemake-rnaseq/",
    description: `An end-to-end RNA-seq analysis platform built with Snakemake, integrating reproducible bioinformatics pipelines with an interactive frontend UI for visualization and reporting. Includes workflow automation, gene expression analysis, enrichment analysis, and structured outputs for downstream exploration.`,
  },
  {
    title: "scRNA-seq Analysis",
    img: scrnaImg,
    link: "https://github.com/benson1231/NTU_scRNA-seq",
    description: `Final project for a transcriptomics course using scRNA-seq data. Demonstrates creation of a custom workflow with tools like loupeR and RMarkdown.`,
  },
  {
    title: "My personal website",
    img: webImg,
    link: "https://github.com/benson1231/benson1231.github.io",
    description: `A personal site built with HTML/CSS and hosted on GitHub Pages. Includes visualizations and portfolio highlights.`,
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-list">
        {projects.map((proj, idx) => (
          <div className="portfolio-item" key={idx}>
            <div className="portfolio-left">
              <img
                className="portfolio-img frame"
                src={proj.img}
                alt={proj.title}
              />
            </div>
            <div className="portfolio-right">
              <div className="portfolio-project-title">{proj.title}</div>
              <div className="portfolio-desc">
                <p>{proj.description}</p>
              </div>
              <div className="portfolio-tags">
                [
                <a
                  className="portfolio-link"
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Link</strong>
                </a>
                ]
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
