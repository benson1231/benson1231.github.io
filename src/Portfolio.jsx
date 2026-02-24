import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "My gitbook: Computer Science & Biomedical Applications",
    img: "/project/gitbook.jpeg",
    link: "https://benson1231.gitbook.io/benson1231-docs",
    description: `A gitbook documenting my journey and insights across computer science, bioinformatics, and biomedical research. Built with GitBook and actively maintained with real-world examples, tutorials, and references.`,
  },
  {
    title: "RNAseq Analysis",
    img: "/project/NTU_Thesis.jpeg",
    link: "https://github.com/benson1231/NTU_Thesis_RNAseq",
    description: `This repository contains a collection of R scripts for bioinformatics and genomic data analysis. Key features include workflows for RNA-seq analysis, gene set enrichment analysis, transcriptional regulatory network analysis, and pathway analysis. It also includes specialized scripts for working with The Cancer Genome Atlas (TCGA) data and preprocessing genomic datasets.`,
  },
  {
    title: "Methylation Analysis",
    img: "/project/NTU_methylation.jpeg",
    link: "https://github.com/benson1231/NTU_methylation_analysis",
    description: `Scripts for processing and analyzing methylation array data using the sesame package in R. Includes heatmap generation and custom plotting for projects at National Taiwan University.`,
  },
  {
    title: "scRNA-seq Analysis",
    img: "/project/NTU_scRNA.jpeg",
    link: "https://github.com/benson1231/NTU_scRNA-seq",
    description: `Final project for a transcriptomics course using scRNA-seq data. Demonstrates creation of a custom workflow with tools like loupeR and RMarkdown.`,
  },
  {
    title: "Transcriptome Analysis Course",
    img: "/project/NTU_Transcript.jpeg",
    link: "https://github.com/benson1231/NTU_transcriptomics_course",
    description: `Assignments and scripts from NTU’s Transcriptomics course, covering heatmaps, ggplot2 visualizations, and R programming for transcriptomics.`,
  },
  {
    title: "Data Science",
    img: "/project/DataScience.jpeg",
    link: "https://github.com/benson1231/DataScience",
    description: `Comprehensive resource covering Python, ML, data visualization, OOP, and libraries like NumPy, Pandas, and scikit-learn.`,
  },
  {
    title: "Computer Science",
    img: "/project/ComputerScience.jpeg",
    link: "https://github.com/benson1231/ComputerScience",
    description: `Covers core concepts in computer science including Bash, Docker, Git, and HTML through practical examples.`,
  },
  {
    title: "NGS",
    img: "/project/NGS.jpeg",
    link: "https://github.com/benson1231/NGS",
    description: `Focuses on Next-Generation Sequencing data analysis, with tools like BCFtools, BEDtools, and SAMtools, and a WES practice script.`,
  },
  {
    title: "Deep Learning",
    img: "/project/Deeplearning.jpeg",
    link: "https://github.com/benson1231/DeepLearning",
    description: `Hands-on resources for deep learning, including notebooks on neural networks and image classification.`,
  },
  {
    title: "My personal website",
    img: "/project/web.jpeg",
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
