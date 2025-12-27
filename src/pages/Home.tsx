import { motion } from "framer-motion"
import styles from "./Home.module.css"

interface HomeProps {
  content: any
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home({ content }: HomeProps) {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 className={styles.title} variants={fadeInUp}>
              <span className="gradient-text">{content.hero.title}</span>
            </motion.h1>
            <motion.p className={styles.subtitle} variants={fadeInUp}>
              {content.hero.subtitle}
            </motion.p>
            <motion.p className={styles.description} variants={fadeInUp}>
              {content.hero.description}
            </motion.p>
            
            <motion.div className={styles.cta} variants={fadeInUp}>
              <motion.a 
                href={content.common.botLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {content.common.cta}
              </motion.a>
              <motion.button 
                onClick={scrollToHowItWorks}
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {content.common.ctaSecondary}
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.mockup}>
              <div className={styles.mockupInner}>
                <p> UI Preview</p>
                <p className="text-secondary" style={{ fontSize: "14px" }}>
                  Р—Р°РјРµРЅРё РЅР° СЃРєСЂРёРЅС€РѕС‚ РїСЂРёР»РѕР¶РµРЅРёСЏ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.problem}>
        <div className="container">
          <motion.h2 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.problem.title}
          </motion.h2>
          
          <motion.div 
            className={styles.problemGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {content.problem.items.map((item: string, i: number) => (
              <motion.div 
                key={i} 
                className="card"
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(106, 218, 209, 0.2)" }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.solution}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>{content.problem.solution}</p>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {content.benefits.title}
          </motion.h2>
          
          <motion.div 
            className={styles.benefits}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {content.benefits.items.map((item: any, i: number) => (
              <motion.div 
                key={i} 
                className="card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -12, 
                  boxShadow: "0 24px 48px rgba(106, 218, 209, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {content.howItWorks.title}
          </motion.h2>
          
          <motion.div 
            className={styles.steps}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {content.howItWorks.steps.map((step: any, i: number) => (
              <motion.div 
                key={i} 
                className={styles.step}
                variants={fadeInUp}
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
          </motion.div>
        </div>
      </section>

      <section className={styles.founder}>
        <div className="container">
          <motion.div 
            className={styles.founderCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.founderPhoto}>
              <div className={styles.photoPlaceholder}>
                <p></p>
                <p className="text-secondary" style={{ fontSize: "14px" }}>
                  Фото основателя
                </p>
              </div>
            </div>
            <div className={styles.founderText}>
              <h2 className="mb-3">О создателе</h2>
              <p className="text-secondary mb-3">
                Spokoyno создан для того, чтобы каждая женщина могла заботиться о своём ментальном здоровье просто и без стресса.
              </p>
              <p className="text-secondary">
                Мы верим, что забота о себе не должна быть сложной или дорогой.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.roadmap}>
        <div className="container">
          <motion.div 
            className="card" 
            style={{ maxWidth: "800px", margin: "0 auto" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <h2 className="mb-3">{content.roadmap.title}</h2>
            <p className="mb-3">{content.roadmap.description}</p>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              {content.roadmap.note}
            </p>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container">
          <motion.h2 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {content.faq.title}
          </motion.h2>
          
          <motion.div 
            className={styles.faq}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {content.faq.items.map((item: any, i: number) => (
              <motion.div 
                key={i} 
                className="card"
                variants={fadeInUp}
                whileHover={{ x: 4 }}
              >
                <h3 className="mb-2" style={{ fontSize: "1.125rem" }}>{item.q}</h3>
                <p className="text-secondary">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3">Попробуй прямо сейчас</h2>
            <p className="text-secondary mb-4">
              Бесплатно. Без регистрации. Всего 5 минут.
            </p>
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