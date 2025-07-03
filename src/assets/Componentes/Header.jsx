import './Header.css';
import logo from '../img/LogoPai.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="LogoPai" className="LogoPai" />
      </div>
      <nav>
        <ul>
          <li><Link to="/Inicio">Início</Link></li>

          <li className="dropdown">
            <a className="borda" href="#">Casas</a>
            <ul className="dropdown-menu">
              <li><Link to="/Casas">3 Cômodos</Link></li>
              <li><Link to="/CasaDois">2 Cômodos</Link></li>
              <li><Link to="/CasaTres">Kit Net</Link></li>
              <li><Link to="/CasaQuatro">5 Cômodos</Link></li>
            </ul>
          </li>
          <li><Link to="/Formulario">Formulário</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
