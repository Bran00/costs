import style from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject() {
  return (
    <div className={style.newProject_container}>
      <h1>Criar Projeto</h1>
      <p>Cria seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar projeto"/>
    </div>
  )
}

export default NewProject
