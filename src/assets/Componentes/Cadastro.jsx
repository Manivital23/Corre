import './Cadastro.css';
import Maos from '../img/maos.png'
import { Link } from 'react-router-dom';

function Cadastro() {
    return (
        <>
            
            <section className='preto'>
                <img className="imagem" src={Maos} alt="Maos" />
                <div className='quadrado'>
                    <h1 className='cada'>Cadastro</h1>
                    <form className="formu">
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="name" id="nome" name="nome" placeholder="Nome Completo" />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />

                        <button type="submit">Entrar</button>

                        <p className="login-msg">
                            Já tem uma conta? <li><Link to="/Login">Login</Link></li>
                        </p>
                    </form>
                </div>
            </section>

        </>
    );
}

export default Cadastro;