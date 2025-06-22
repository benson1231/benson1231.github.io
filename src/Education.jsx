import React from "react";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <h1 className="edu-title">Education</h1>

      <article className="edu-item">
        <h3 className="edu-left">Master's</h3>
        <div className="edu-right">
          <p>
            <strong>Toxicology Graduate Institute</strong>
          </p>
          <p>
            <strong>National Taiwan University</strong>
          </p>
          <p>2022 ~ 2024 · GPA: 3.86</p>
        </div>
      </article>

      <article className="edu-item">
        <h3 className="edu-left">Bachelor's</h3>
        <div className="edu-right">
          <p>
            <strong>Medical Laboratory Science and Biotechnology</strong>
          </p>
          <p>
            <strong>Taipei Medical University</strong>
          </p>
          <p>2017 ~ 2021 · GPA: 3.84</p>
        </div>
      </article>
    </section>
  );
}

export default Education;
