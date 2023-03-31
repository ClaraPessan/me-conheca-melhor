import fotoSobreMim from 'assets/minha_foto.png'
import styles from './SobreMim.module.css'
import Banner from 'componentes/Banner'

export default function SobreMim() {
    return (
        <main>
            <Banner/>
            <h3 className={styles.titulo}>
                Olá, me chamo Clara!
            </h3>
            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Foto Clara Pessan"
            />
            <p className={styles.paragrafo}>
            Minha história com programação começou em 2021, na ETEC Prof Aprígio Gonzaga, quando fiz o técnico de Desenvolvimento de Sistemas. Eu aprendi lógica de programação e o básico de várias tecnologias, como HTML, CSS, PHP, MySQL, Java, Ionic... mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação e fui me encantando principalmente por Front-End.
            </p>

            <p className={styles.paragrafo}>
            Meu TCC foi um aplicativo de Pet Shop, eu fiz com Angular, Ionic, MySQL e PHP. Eu aprendi muita coisa com ele, foi o primeiro projeto que fiz sozinha e confesso que deu muito trabalho. Fiz um sistema de cadastro, verificações. Também dava para adicionar ao carrinho, adicionar quantos produtos você quisesse. Na parte da administração dava para ver o estoque (excluir, adicionar ou alterar produtos). 
            </p>

            <p className={styles.paragrafo}>
                Assim que me formei na ETEC (29/06/2022), eu terminei meu ensino médio e entrei na Universidade Cidade de São Paulo - UNICID, onde ainda estou estudando. Além do ensino superior, eu faço muitos cursos na Alura, onde eu aprendo muita coisa. Sempre busco fazer cursos ligados a Front-End. Para fixar mais meus aprendizados, sempre estou fazendo projetos pessoais para ficar cada dia melhor. Hoje eu estou em busca da minha primeira oportunidade na área de TI.
            </p>

            <p className={styles.paragrafo}>
                Bom, esta foi a minha história, eu espero que você tenha gostado!
            </p>
        </main>

    )
}