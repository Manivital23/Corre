import './login.css';
import Casa from '../img/casa.png'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            
            <section className='login'>
                <img className="imagem" src={Casa} alt="Casinha" />
                <div className='quadrado'>
                    <h1>Login</h1>
                    <form className="formulario">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />

                        <button type="submit">Entrar</button>

                        <p className="cadastro-msg">
                            Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
                        </p>
                    </form>
                </div>
            </section>

        </>
    );
}

export default Login;