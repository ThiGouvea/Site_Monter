import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas aos eventos
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido} 
                    aria-hidden={true}
                />
            </div>
        </div>
    )
}

export default Banner