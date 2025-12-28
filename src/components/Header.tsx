import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import styles from "./Header.module.css"

interface HeaderProps {
  content: any
  lang: string
  onLangChange: (lang: string) => void
}

export default function Header({ content, lang, onLangChange }: HeaderProps) {
  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true" />
            <span className={styles.logoText}>Spokoyno</span>
          </Link>
          
          <nav className={styles.nav}>
            <Link to="/">{content.nav.home}</Link>
            <Link to="/about">{content.nav.about}</Link>
            <Link to="/how-it-works">{content.nav.howItWorks}</Link>
            
            <motion.button 
              className={styles.langSwitch}
              onClick={() => onLangChange(lang === "ru" ? "en" : "ru")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === "ru" ? "EN" : "RU"}
            </motion.button>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
