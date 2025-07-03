import './Footer.css';
import logo from '../img/LogoPai.png';
import instagram from '../img/insta.png';
import whatsapp from '../img/whats.png';
import facebook from '../img/facebook.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-coluna">
          <img src={logo} alt="Logo AlugarWeb" className="logo-footer" />
        </div>

        <div className="footer-coluna">
          <h3>NAVEGAÇÃO</h3>
          <ul>
            <li><Link to="/Home">INÍCIO</Link></li>
            <li><a href="#">CASAS</a></li>
            <li><Link to="/Login">LOGIN</Link></li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h3>CONTATO</h3>
          <p className="contato">+55 11 99944-1013</p>
          <p className="contato">beto.criativa@gmail.com</p>
          <div className="redes-sociais">
            <a href="https://www.instagram.com/beto.criativa?igsh=MXN1YjVsdXhlaGx0dw==" >
              <img src={instagram} alt="Instagram" />
            </a>
              <a href="https://wa.me/5511999441013" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a href="https://www.facebook.com/share/19RYDv8xKi/?mibextid=wwXIfr" >
                <img src={facebook} alt="Facebook" />
              </a>
          </div>
        </div>
      </footer>

      <div className="direitos">
        <p>@2025 ALUGARWEB. TODOS OS DIREITOS RESERVADOS.</p>
      </div>
    </div>
  );
}

export default Footer;
