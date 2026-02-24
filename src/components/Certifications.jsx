import React from "react";
import "../styles/certifications.css";
import awsccpImg from "../assets/certifications/aws-ccp.png";
import awsaifImg from "../assets/certifications/aws-aif.png";
import medtechImg from "../assets/certifications/medtech.jpeg";
import genomicImg from "../assets/certifications/GenomicDataScience.jpeg";
import googleImg from "../assets/certifications/GoogleDataAnalytics.jpeg";
import nextflowImg from "../assets/certifications/nextflow.png";
import mlImg from "../assets/certifications/MachineLearning.jpeg";
import dlImg from "../assets/certifications/DeepLearning.jpeg";
import dsEngineerImg from "../assets/certifications/DataScienceEngineer.jpeg";
import dsImg from "../assets/certifications/DataScience.jpeg";
import rImg from "../assets/certifications/R_udemy.jpeg";

const certifications = [
  {
    title: "Medical Technologist License",
    image: medtechImg,
    description:
      "Certified by the Examination Yuan, Taiwan, demonstrating expertise in medical laboratory science, including clinical practices, diagnostic techniques, and quality assurance. Proficient in collaborating with healthcare teams and operating advanced diagnostic equipment.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    image: awsccpImg,
    description:
      "Foundational certification demonstrating knowledge of AWS cloud infrastructure, core services, security, and cost management. Experienced in deploying and managing scalable computing environments for bioinformatics workflows, including data storage, compute orchestration, and cloud-based analysis pipelines.",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/682eafa3cf2d4f1c9e804e9fd0acce02",
    platform: "AWS",
  },
  {
    title: "AWS Certified AI Practitioner",
    image: awsaifImg,
    description:
      "Certification focused on AI/ML fundamentals on AWS, including model deployment, data pipelines, and responsible AI practices. Applied understanding of integrating machine learning with biomedical data analysis, enabling cloud-based AI workflows for genomic and clinical research.",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/a63fd0e57d4840098476c18ebc7dc464",
    platform: "AWS",
  },
  {
    title: "Genomic Data Science",
    image: genomicImg,
    description:
      "Advanced certification in genomic data analysis, including NGS data processing, DNA sequencing, bioinformatics tools (BWA, Samtools, Bedtools), and statistical modeling using command line tools and R.",
    link: "https://www.coursera.org/account/accomplishments/specialization/URAWDCK7SI7U",
    platform: "Coursera",
  },
  {
    title: "Google Data Analytics",
    image: googleImg,
    description:
      "Covers data cleaning, visualization, and analysis using Google Sheets, SQL, Tableau, and R. Focuses on preparing and analyzing data to drive strategic decisions.",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/NT7AGA7NE9GS",
    platform: "Coursera",
  },
  {
    title: "nextflow",
    image: nextflowImg,
    description:
      "Demonstrates expertise in building and managing reproducible bioinformatics workflows using Nextflow. Experienced in orchestrating scalable NGS pipelines, containerized environments (Docker/Conda), and cloud/HPC execution for genomic data analysis.",
    link: "https://drive.google.com/file/d/1yb5CRI472s6-l-Lr3v6rHY0ttsA8iqDy/view?usp=drive_link",
    platform: "Seqera",
  },
  {
    title: "Machine Learning/AI Engineer",
    image: mlImg,
    description:
      "Covers machine learning, neural networks, NLP, and AI deployment using TensorFlow and scikit-learn.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/6f8e0510ca91437a847b53aa9e9aa3f1",
    platform: "Codecademy",
  },
  {
    title: "Build Deep Learning Models with TensorFlow",
    image: dlImg,
    description:
      "Covers neural networks, CNNs, and RNNs using TensorFlow. Focuses on practical deep learning applications.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/5f85c4b9c431a800138a60e0",
    platform: "Codecademy",
  },
  {
    title: "Software Engineering for Data Scientists",
    image: dsEngineerImg,
    description:
      "Covers version control, modular code, testing, and deployment for writing scalable and maintainable data science code.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/10893677113547f7bc2ec6d950535805",
    platform: "Codecademy",
  },
  {
    title: "Data Science Foundations",
    image: dsImg,
    description:
      "Introduces data manipulation, statistical analysis, visualization, and programming fundamentals for aspiring data scientists.",
    link: "https://www.codecademy.com/profiles/Chin-YuLee/certificates/738a7262ff2b4a49b062c25482dc2549",
    platform: "Codecademy",
  },
  {
    title: "R for Data Science",
    image: rImg,
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
