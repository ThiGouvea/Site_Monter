import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Produtos
                </MenuLink>
                <MenuLink to="/">
                    Serviços
                </MenuLink>
                <MenuLink to="/">
                    Projetos
                </MenuLink>
                <MenuLink to="/">
                    Suporte
                </MenuLink>
                <MenuLink to="/">
                    Sobre nós
                </MenuLink>

            </nav>
        </header>
    )
}

export default Menu