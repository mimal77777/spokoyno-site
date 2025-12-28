import { motion } from "framer-motion"
import styles from "./About.module.css"

interface AboutProps {
  content: any
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function About({ content }: AboutProps) {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">{content.about.title}</span>
          </motion.h1>
        </div>
      </section>

      <motion.section {...fadeInUp}>
        <div className="container">
          <motion.div 
            className="card" 
            style={{ maxWidth: "800px", margin: "0 auto" }}
            whileHover={{ y: -8 }}
          >
            <h2 className="mb-3">{content.about.missionTitle}</h2>
            <p style={{ fontSize: "1.125rem" }}>{content.about.mission}</p>
          </motion.div>
        </div>
      </motion.section>

      <section className={styles.why}>
        <div className="container">
          <motion.h2 
            className="text-center mb-3"
            {...fadeInUp}
          >
            {content.about.whyTitle}
          </motion.h2>
          <motion.p 
            className="text-center text-secondary mb-5" 
            style={{ maxWidth: "600px", margin: "0 auto 48px" }}
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {content.about.why}
          </motion.p>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            {...fadeInUp}
          >
            {content.about.principlesTitle}
          </motion.h2>
          
          <div className={styles.principles}>
            {content.about.principles.map((item: any, i: number) => (
              <motion.div 
                key={i} 
                className="card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12, boxShadow: "0 24px 48px rgba(106, 218, 209, 0.25)" }}
              >
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">{content.about.ctaTitle}</h2>
            <motion.a 
              href={content.common.botLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: "1.125rem", padding: "18px 48px" }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {content.common.cta}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
