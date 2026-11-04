import { personal } from "@/content/personal";

const ExternalArrow = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
    <path
      d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nameplate">
          <p className="footer-nameplate-text">{personal.name}</p>
        </div>

        <div className="footer-bottom">
          <span className="footer-year">© 2026</span>

          <ul className="footer-links" role="list">
            <li>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
                <ExternalArrow />
              </a>
            </li>
            {personal.linkedin && (
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                  <ExternalArrow />
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${personal.email}`} className="footer-link">
                {personal.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
