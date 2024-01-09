import Banner from 'Componentes/Banner'
import styles from './PaginaPadrao.module.css'
import { Outlet } from 'react-router-dom'

const PaginaPadrao = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default PaginaPadrao