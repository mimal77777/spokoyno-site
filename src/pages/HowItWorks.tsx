import { motion } from "framer-motion"
import styles from "./HowItWorks.module.css"

interface HowItWorksProps {
  content: any
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function HowItWorks({ content }: HowItWorksProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="gradient-text">{content.howItWorks.title}</span>
          </motion.h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.steps}>
            {content.howItWorks.steps.map((step: any, i: number) => (
              <motion.div 
                key={i} 
                className="card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className={styles.stepNumber}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div className="container">
          <motion.div 
            className="card" 
            style={{ maxWidth: "800px", margin: "0 auto" }}
            {...fadeInUp}
            whileHover={{ y: -8 }}
          >
            <h2 className="mb-3">Что входит в практики</h2>
            <ul className={styles.list}>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Дыхательные упражнения (от 2 минут)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Медитации и визуализации (5-10 минут)
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Простые физические упражнения
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Ритуалы для расслабления
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Аудио-сопровождение
              </motion.li>
            </ul>
            
            <p className="text-secondary mt-4" style={{ fontSize: "14px" }}>
              * Spokoyno не является медицинским сервисом и не заменяет консультацию специалиста.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Попробуй прямо сейчас</h2>
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