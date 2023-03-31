import styles from './Cards.module.css'
import Card from './Card'

export default function Cards() {
    return (
        <div className={styles.cards}>
            <Card
                titulo="Contato"
                descricao="Meios de entrar em contato comigo."
                to='/contato'
            />
            <Card
                titulo="Sobre mim"
                descricao="Me conheça um pouco melhor."
                to='/sobremim'
            />
        </div>
    )

}