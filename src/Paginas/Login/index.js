import Input from "Componentes/Input"
import styles from "./Login.module.css"

const Login = () => {
    return (
        <form className={styles.formulario}>
            <Input className={styles.campoTexto} type="text" required placeholder={"Insira seu nome"} />
            <Input className={styles.campoTexto} type="password" required placeholder="Insira a senha" />
            <button type="submit" className={styles.submit}>Entrar</button>
        </form>
    )
}

export default Login