import "../scss/PageLayout.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <a href="/impressum">Impressum</a>
        </div>
        <div className="footer-column">
          <a href="/datapolicy">Datenschutz</a>
        </div>
        <div className="footer-column">
          <p>© 2024</p>
        </div>
      </div>
    </footer>
  );
}
