import { motion } from "framer-motion"
import styles from "./Home.module.css"
import respectPerson from "../assets/images/respect-person.jpg";

interface HomeProps {
  content: any
}

const fadeInUp = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
}

export default function Home({ content }: HomeProps) {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div className={styles.badge} variants={fadeInUp}>
                <span className={styles.badgeDot} />
                <span>{content?.hero?.badge ?? "ИИ-помощник для спокойствия"}</span>
              </motion.div>

              <motion.h1 className={styles.title} variants={fadeInUp}>
                <span className="gradient-text">{content?.hero?.title}</span>
              </motion.h1>

              <motion.p className={styles.subtitle} variants={fadeInUp}>
                {content?.hero?.subtitle}
              </motion.p>

              <motion.p className={styles.description} variants={fadeInUp}>
                {content?.hero?.description}
              </motion.p>

              <motion.div className={styles.cta} variants={fadeInUp}>
                <motion.a
                  href={content?.common?.botLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {content?.common?.cta}
                </motion.a>

                <motion.button
                  onClick={scrollToHowItWorks}
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {content?.common?.ctaSecondary}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* VISUAL (свой, без чужих фото) */}
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className={styles.device} aria-label="Spokoyno app preview mockup">
                <div className={styles.deviceTop}>
                  <div className={styles.logo}>
                    <img className={styles.logoImg} src="/brand.svg" alt="Spokoyno" />
                    <span className={styles.logoText}>SPOKOYNO</span>
                  </div>
                  <div className={styles.pill}>{content?.hero?.pill ?? "7 дней бесплатно"}</div>
                </div>

                <div className={styles.deviceMid}>
                  <div className={styles.chatCard}>
                    <div className={styles.chatRow}>
                      <div className={styles.bubble}>
                        {content?.hero?.mock1 ?? "Как ты сейчас себя чувствуешь?"}
                      </div>
                      <div className={`${styles.bubble} ${styles.bubbleAlt}`}>
                        {content?.hero?.mock2 ?? "Хочу меньше тревожиться и лучше спать."}
                      </div>
                      <div className={styles.bubble}>
                        {content?.hero?.mock3 ?? "Давай начнём с короткой практики на 2 минуты."}
                      </div>
                    </div>
                  </div>

                  <div className={styles.tags}>
                    {(content?.hero?.tags ?? ["Тревога", "Сон", "Отношения", "Самооценка"]).map((t: string, i: number) => (
                      <div key={i} className={styles.tag}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className={styles.problem}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionKicker}>{content?.problem?.kicker ?? "Почему это важно"}</div>
            <h2>{content?.problem?.title}</h2>
          </div>

          <motion.div
            className={styles.grid3}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {(content?.problem?.items ?? []).map((item: string, i: number) => (
              <motion.div
                key={i}
                className="card"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <p style={{ color: "rgba(19,22,23,0.78)", fontWeight: 700 }}>{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.solution}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: "rgba(19,22,23,0.78)", fontWeight: 800, fontSize: "1.05rem" }}>
              {content?.problem?.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionKicker}>{content?.benefits?.kicker ?? "Что вы получите"}</div>
            <h2>{content?.benefits?.title}</h2>
          </div>

          <motion.div
            className={styles.benefitsGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {(content?.benefits?.items ?? []).map((item: any, i: number) => (
              <motion.div key={i} className="card" variants={fadeInUp} whileHover={{ y: -10 }}>
                <h3 className="mb-2" style={{ color: "rgba(19,22,23,0.9)" }}>{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionKicker}>{content?.howItWorks?.kicker ?? "Как это работает"}</div>
            <h2>{content?.howItWorks?.title}</h2>
          </div>

          <motion.div
            className={styles.steps}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {(content?.howItWorks?.steps ?? []).map((step: any, i: number) => (
              <motion.div
                key={i}
                className={styles.step}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className="mb-2" style={{ color: "rgba(19,22,23,0.9)" }}>{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDER / TRUST (без фото — нейтральная абстракция) */}
      <section>
        <div className="container">
          <motion.div
            className={styles.founderCard}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.founderAvatar}>
</div>
            <div>
              <h2 className="mb-2">{content?.founder?.title ?? "Создано с уважением к вашему состоянию"}</h2>
              <div className={styles.respectBlock}>
  <div className={styles.respectText}>
    Мы проектировали Spokoyno с вниманием к человеческому состоянию —
    бережно, без давления и с уважением к личным границам.
  </div>
</div>

              <p className="mb-3">{content?.founder?.description ?? "Spokoyno помогает навести порядок в мыслях и закрепить полезные привычки — мягко, без давления, в вашем темпе."}</p>
              <div className={styles.cta}>
                <a className="btn btn-primary" href={content?.common?.botLink} target="_blank" rel="noopener noreferrer">
                  {content?.common?.cta}
                </a>
                <button className="btn btn-secondary" onClick={scrollToHowItWorks}>
                  {content?.common?.ctaSecondary}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionKicker}>{content?.faq?.kicker ?? "FAQ"}</div>
            <h2>{content?.faq?.title ?? "Часто задаваемые вопросы"}</h2>
          </div>

          <div className={styles.faq}>
            {(content?.faq?.items ?? []).map((item: any, i: number) => (
              <details key={i} className={styles.faqItem}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className="mb-2">{content?.finalCta?.title ?? "Попробуйте Spokoyno сегодня"}</h2>
            <p className="mb-4">{content?.finalCta?.description ?? "2 минуты — и вы почувствуете, как становится спокойнее."}</p>
            <a className="btn btn-primary" href={content?.common?.botLink} target="_blank" rel="noopener noreferrer">
              {content?.finalCta?.button ?? content?.common?.cta}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}




