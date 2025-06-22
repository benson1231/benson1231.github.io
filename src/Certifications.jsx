import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Medical Technologist License",
    image: "/certifications/medtech.jpeg",
    description:
      "Certified by the Examination Yuan, Taiwan, demonstrating expertise in medical laboratory science, including clinical practices, diagnostic techniques, and quality assurance. Proficient in collaborating with healthcare teams and operating advanced diagnostic equipment.",
  },
  {
    title: "Genomic Data Science",
    image: "/certifications/GenomicDataScience.jpeg",
    description:
      "Advanced certification in genomic data analysis, including NGS data processing, DNA sequencing, bioinformatics tools (BWA, Samtools, Bedtools), and statistical modeling using command line tools and R.",
    link: "https://www.coursera.org/account/accomplishments/specialization/URAWDCK7SI7U",
    platform: "Coursera",
  },
  {
    title: "SAS Statistical Business Analyst",
    image: "/certifications/SAS.jpeg",
    description:
      "Demonstrates proficiency in using SAS software for statistical modeling and data analysis in a business context. Includes hypothesis testing, linear and logistic regression, and model fitting to make data-driven decisions.",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/T7YLO62RDKNR",
    platform: "Coursera",
  },
  {
    title: "Google Data Analytics",
    image: "/certifications/GoogleDataAnalytics.jpeg",
    description:
      "Covers data cleaning, visualization, and analysis using Google Sheets, SQL, Tableau, and R. Focuses on preparing and analyzing data to drive strategic decisions.",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/NT7AGA7NE9GS",
    platform: "Coursera",
  },
  {
    title: "Machine Learning/AI Engineer",
    image: "/certifications/MachineLearning.jpeg",
    description:
      "Covers machine learning, neural networks, NLP, and AI deployment using TensorFlow and scikit-learn.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/6f8e0510ca91437a847b53aa9e9aa3f1",
    platform: "Codecademy",
  },
  {
    title: "Build Deep Learning Models with TensorFlow",
    image: "/certifications/DeepLearning.jpeg",
    description:
      "Covers neural networks, CNNs, and RNNs using TensorFlow. Focuses on practical deep learning applications.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/5f85c4b9c431a800138a60e0",
    platform: "Codecademy",
  },
  {
    title: "Software Engineering for Data Scientists",
    image: "/certifications/DataScienceEngineer.jpeg",
    description:
      "Covers version control, modular code, testing, and deployment for writing scalable and maintainable data science code.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/10893677113547f7bc2ec6d950535805",
    platform: "Codecademy",
  },
  {
    title: "Data Science Foundations",
    image: "/certifications/DataScience.jpeg",
    description:
      "Introduces data manipulation, statistical analysis, visualization, and programming fundamentals for aspiring data scientists.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/738a7262ff2b4a49b062c25482dc2549",
    platform: "Codecademy",
  },
  {
    title: "R for Data Science",
    image: "/certifications/R_udemy.jpeg",
    description:
      "Covers R programming, data analysis, and data science techniques, demonstrating practical applications of R.",
    link: "https://www.udemy.com/certificate/UC-fe005206-87a5-4c1f-a879-fd74235157f2/",
    platform: "Udemy",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h1 className="certifications-title">Certifications</h1>
      <div className="certifications-list">
        {certifications.map((cert, idx) => (
          <div className="certification-item" key={idx}>
            <div className="cert-left">
              <img
                className="cert-img frame"
                src={cert.image}
                alt={cert.title}
              />
            </div>
            <div className="cert-right">
              <div className="cert-title">{cert.title}</div>
              <div className="cert-desc">
                <p>{cert.description}</p>
              </div>
              {cert.link && (
                <div className="cert-tags">
                  [
                  <a
                    className="cert-link"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{cert.platform}</strong>
                  </a>
                  ]
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
