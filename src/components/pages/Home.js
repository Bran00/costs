import styles from './Home.module.css';
import savings from '../../assets/savings.svg'

function Home() {
  return (
    <section> 
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <a href="/">Criar Projeto</a>
      <img src={savings} alt="savings" />
    </section>
  );
}

export default Home;