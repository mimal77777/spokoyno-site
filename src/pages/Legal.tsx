import styles from "./Legal.module.css"

interface LegalProps {
  content: any
}

export default function Legal({ content }: LegalProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="text-center mb-4">
            <span className="gradient-text">{content.legal.title}</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.content}>
            <div className="card mb-4">
              <h2 className="mb-3">{content.legal.privacy.title}</h2>
              <p className="text-secondary">{content.legal.privacy.content}</p>
            </div>
            
            <div className="card">
              <h2 className="mb-3">{content.legal.terms.title}</h2>
              <p className="text-secondary">{content.legal.terms.content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
