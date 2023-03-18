import { Link } from 'react-router-dom'

import Container from './Container'
import style from "./Navbar.module.css"
import logo from '../../assets/costs_logo.png'

function Navbar() {
 return (
   <nav class={style.navbar}>
     <Container>
         <Link to="/">
           <img src={logo} alt="Pagina inicial" />
         </Link>
       <ul className={style.list}>
         <li className={style.item}>
           <Link to="/">Home</Link>
         </li>
         <li className={style.item}>
           <Link to="/projects">Projects</Link>
         </li>
         <li className={style.item}>
           <Link to="/company">Company</Link>
         </li>
         <li className={style.item}>
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
     </Container>
   </nav>
 )
}

export default Navbar