import "./profilecard.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ProfileCard() {
  return (
    <section id ="profile" className="profile-card">
      <div className="profile-left">
        <img src="./profile.jpeg" alt="Chin-Yu Lee" className="profile-photo" />
      </div>
      <div className="profile-right">
        <h1 className="profile-name">Chin-Yu Lee (李清宇)</h1>
        <p className="profile-title">
          Research Fellow in Precision Medicine
          <br />
          Bioinformatics Engineer
          <br />
          Medical Technologist
        </p>
        <div className="profile-social">
          <a
            href="https://github.com/benson1231"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub"
          >
            <AiFillGithub size={48} />
          </a>
          <a
            href="https://www.linkedin.com/in/chin-yu-lee-471109294"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={48} />
          </a>
          <a
            href="https://benson1231.gitbook.io/benson1231-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link gitbook"
            aria-label="Gitbook"
          >
            <FaBookOpen size={48} />
          </a>
          <a
            href="mailto:benson106075@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link email"
            aria-label="Email"
          >
            <MdEmail size={48} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
