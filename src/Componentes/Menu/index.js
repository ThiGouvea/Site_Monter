import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <header>
            <img></img>
            <nav className={styles.navegacao}>
                <MenuLink to = "/produtos">
                    Produtos
                </MenuLink>
                <MenuLink to = "/servicos">
                    Serviços
                </MenuLink>
                <MenuLink to = "/projetos">
                    Projetos
                </MenuLink>
                <MenuLink to = "/suporte">
                    Suporte
                </MenuLink>
                <MenuLink to = "/sobrenos">
                    Sobre nós
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu