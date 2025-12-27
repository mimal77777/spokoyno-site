import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

interface FooterProps {
  content: any
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className="gradient-text" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
              Spokoyno
            </span>
          </div>
          
          <div className={styles.links}>
            <Link to="/legal">{content.footer.privacy}</Link>
            <Link to="/legal">{content.footer.terms}</Link>
          </div>
          
          <div className={styles.copy}>
            {content.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  )
}
