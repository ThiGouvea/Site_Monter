import styles from './Banner.module.css'
// criar banner rotativo

const Banner = () => {
    return (
        <div className={styles.carroussel}>
            <div className={styles.item}>
                <div className={styles.imagem}>
                    <img src='assets/img/Banner1.png' alt='produto' />
                </div>
                <div className={styles.imagem}>
                    <img src='assets/img/Banner2.png' alt='produto' />
                </div>
            </div>
        </div>
    )
}

export default Banner