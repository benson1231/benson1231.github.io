import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-content">
        <div className="skills-description">
          <p>
            My expertise spans across diverse domains including{" "}
            <strong>Bioinformatics</strong>, specializing in techniques such as{" "}
            <strong>RNA-seq</strong>, <strong>scRNA-seq</strong>,{" "}
            <strong>Methylation array</strong>, and <strong>NGS</strong>. I am
            proficient in bioinformatics tools like <strong>GATK4</strong>,{" "}
            <strong>BWA</strong>, <strong>Samtools</strong>,{" "}
            <strong>Bedtools</strong>, <strong>FastQC</strong>, and{" "}
            <strong>MultiQC</strong>.
          </p>
          <p>
            Additionally, I have extensive experience with programming languages
            and computational frameworks, including <strong>R</strong>,{" "}
            <strong>Linux</strong>, <strong>Docker</strong>,{" "}
            <strong>Git</strong>, <strong>Bash</strong>, and{" "}
            <strong>Python</strong>. My skillset also extends to{" "}
            <strong>AI</strong>, with a strong focus on{" "}
            <strong>Machine Learning</strong> and <strong>Deep Learning</strong>
            .
          </p>
        </div>
        <img className="skills-image" src="worldcloud.png" alt="WordCloud" />
        <p className="skills-source">
          (Created using{" "}
          <a
            href="https://github.com/amueller/word_cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordCloud
          </a>
          ,{" "}
          <a
            href="https://matplotlib.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matplotlib
          </a>
          ,{" "}
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python
          </a>
          )
        </p>
      </div>
    </section>
  );
}

export default Skills;