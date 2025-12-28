import { motion } from "framer-motion"
import styles from "./AppScreenshots.module.css"

interface AppScreenshotsProps {
  content: any
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function AppScreenshots({ content }: AppScreenshotsProps) {
  const screenshots = [
    { 
      src: "/screenshots/screen1.jpg", 
      alt: content?.screenshots?.screen1Alt || "Главный экран Spokoyno",
      title: content?.screenshots?.screen1Title || "Главный экран",
      description: content?.screenshots?.screen1Description || "Начни день с простого вопроса"
    },
    { 
      src: "/screenshots/screen2.jpg", 
      alt: content?.screenshots?.screen2Alt || "Ситуативная помощь",
      title: content?.screenshots?.screen2Title || "Выбери ситуацию",
      description: content?.screenshots?.screen2Description || "Укажи, что ты чувствуешь сейчас"
    },
    { 
      src: "/screenshots/screen3.jpg", 
      alt: content?.screenshots?.screen3Alt || "Профиль пользователя",
      title: content?.screenshots?.screen3Title || "Твой профиль",
      description: content?.screenshots?.screen3Description || "Отслеживай прогресс и баланс"
    },
    { 
      src: "/screenshots/screen4.jpg", 
      alt: content?.screenshots?.screen4Alt || "Трекер состояния",
      title: content?.screenshots?.screen4Title || "Трекер баланса",
      description: content?.screenshots?.screen4Description || "Смотри, как улучшается твоё самочувствие"
    },
    { 
      src: "/screenshots/screen5.jpg", 
      alt: content?.screenshots?.screen5Alt || "Музыка для настроения",
      title: content?.screenshots?.screen5Title || "Музыка для настроения",
      description: content?.screenshots?.screen5Description || "Найди подходящий саундскейп"
    },
  ]

  return (
    <section className={styles.screenshots}>
      <div className="container">
        <motion.div className={styles.header} {...fadeInUp}>
          <div className={styles.kicker}>
            {content?.screenshots?.kicker || "Приложение"}
          </div>
          <h2>{content?.screenshots?.title || "Как выглядит Spokoyno"}</h2>
          <p className="text-secondary">
            {content?.screenshots?.description || "Простой и понятный интерфейс, разработанный с заботой о твоём комфорте"}
          </p>
        </motion.div>

        <div className={styles.carousel}>
          {screenshots.map((screen, i) => (
            <motion.div
              key={i}
              className={styles.phoneFrame}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className={styles.phone}>
                <div className={styles.phoneNotch}></div>
                <div className={styles.phoneScreen}>
                  <img src={screen.src} alt={screen.alt} />
                </div>
              </div>
              <div className={styles.caption}>
                <h4>{screen.title}</h4>
                <p>{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
