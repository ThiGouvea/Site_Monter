import styles from "./SobreMim.module.css"
import PostModelo from "Componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

const SobreNos = () => {
    return (
        <PostModelo
            titulo="Sobre nós"
        >
            <h3 className={styles.subtitulo}>
                Ola somos a Monter
            </h3>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
        </PostModelo>
    )
}

export default SobreNos