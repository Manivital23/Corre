import './Home.css';
import Chave from '../img/chave.png';
import Escola from '../img/escola.png';
import Estacao from '../img/estacao.png';
import Posto from '../img/posto.png';
import Mercado from '../img/mercado.png';
import Padaria from '../img/padaria.png';
import Igreja from '../img/igreja.png';
import Barbearia from '../img/salao.png';
import Deposito from '../img/deposito.png';
import Oficina from '../img/oficina.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section className="cima">
                <div className="texto-box">
                    <h2 className="boas-vindas">BEM-VINDO AO ALUGARWEB</h2>
                    <p className="slogan">"MAIS QUE UMA CASA, UM LUGAR PARA VIVER HISTÓRIAS."</p>
                </div>
                <img className="imagem" src={Chave} alt="Chave" />
            </section>

            <section className="arredores">
                <h2 className="titulo-arredores">O QUE TEM NOS ARREDORES?</h2>
                <div className="grid-arredores">
                    {[
                        { img: Escola, nome: 'ESCOLA' },
                        { img: Estacao, nome: 'ESTAÇÃO' },
                        { img: Posto, nome: 'POSTO DE SAÚDE' },
                        { img: Mercado, nome: 'MERCADO' },
                        { img: Padaria, nome: 'PADARIA' },
                        { img: Igreja, nome: 'IGREJA' },
                        { img: Barbearia, nome: 'BARBEARIA' },
                        { img: Deposito, nome: 'DEPÓSITO' },
                        { img: Oficina, nome: 'OFICINA MECÂNICA' },
                    ].map((item, index) => (
                        <div key={index} className="item-arredor">
                            <img src={item.img} alt={item.nome} className="icone-arredor" />
                            <p className="nome-arredor">{item.nome}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="localizacao">
                <h2 className="titulo-localizacao">LOCALIZAÇÃO</h2>
                <div className="conteudo-localizacao">
                    <div className="info-endereco">
                        <p><strong>Rua Lourenço de Mattos, 34</strong></p>
                        <p>Bairro: Jardim Iporanga</p>
                        <p>Ponto de referência: Assaí Atacadista</p>
                        <p>CEP: 04830-090</p>
                    </div>
                    <iframe
                        title="Mapa Localização"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.319386758042!2d-46.6477153236813!3d-23.59219796229683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3b1d10b78d%3A0x3342ddc83dc04f76!2sRua%20Louren%C3%A7o%20de%20Matos%2C%2034%20-%20Jardim%20Iporanga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004830-090!5e0!3m2!1spt-BR!2sbr!4v1717865227775!5m2!1spt-BR!2sbr"
                        width="700"
                        height="400"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

        </>
    );
}

export default Home;
