import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      date: "Dec 2024 ~ Present",
      position: "Research Fellow in Precision Medicine",
      company: "Medcom Biotech",
    },
    {
      date: "Jul 2022 ~ Aug 2024",
      position: "Graduate Student",
      company: "National Taiwan University",
    },
    {
      date: "Aug 2020 ~ Dec 2020",
      position: "Medical Laboratory Technologist Intern",
      company: "Taipei Municipal Wanfang Hospital",
    },
    {
      date: "Jul 2018 ~ Jul 2020",
      position: "Caretaker of Laboratory Animal Center",
      company: "Taipei Medical University",
    },
    {
      date: "Jul 2018 ~ Jun 2020",
      position: "Lab intern",
      company: "Taipei Medical University",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h1 className="exp-title">Experience</h1>
      {experiences.map((exp, index) => (
        <article className="exp-item" key={index}>
          <div className="exp-left">
            <p className="exp-date">{exp.date}</p>
          </div>
          <div className="exp-right">
            <p className="exp-position">{exp.position}</p>
            <p className="exp-company">{exp.company}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Experience;
