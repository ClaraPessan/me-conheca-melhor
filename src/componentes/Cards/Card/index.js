import Botao from 'componentes/Botao'
import styles from './Card.module.css'
import MenuLink from 'componentes/MenuLink'

export default function Card({titulo, descricao, to}) {
    return (
        <div className={styles.card}>
            <header className={styles.inicio}>
                <h3>{titulo}</h3>
            </header>
            <div className={styles.conteudo}> 
                <p>{descricao}</p>
            </div>
            <footer className={styles.final}>
                <MenuLink to={to}>
                    <Botao>
                        Ver
                    </Botao>
                </MenuLink>
            </footer>
        </div>
    )
} 