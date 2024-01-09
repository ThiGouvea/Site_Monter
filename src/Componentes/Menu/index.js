import styles from './Menu.module.css'
import MenuLink from '../MenuLink';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/'>
                <img className={styles.logo} src='/assets/img/logo_monter_colorido.png' />
            </NavLink>
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