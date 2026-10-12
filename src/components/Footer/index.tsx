import styles from './index.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>© 2026 Weather Website.</p>
            <p>Разработка и дизайн — Михаил Воробьев.</p>
            <p>Иконки погоды предоставлены проектом Meteocons</p>
        </div>
    )
}

export default Footer