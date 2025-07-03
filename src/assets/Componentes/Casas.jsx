import React, { useState, useEffect } from 'react';
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import andando from "../img/Andando.png";
import { Link } from 'react-router-dom';

import './Casas.css';

const casasData = [
  {
    id: 1,
    nome: 'Casa 1',
    imagens: [img3, img2, img4, img5, img6, img7, img8, img9, img10, img11],
  },
  {
    id: 2,
    nome: 'Casa 2',
    imagens: [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11],
  },
  {
    id: 3,
    nome: 'Casa 3',
    imagens: [img4, img3, img2, img5, img6, img7, img8, img9, img10, img11],
  }
];

export default function Casas() {
  const [casaAberta, setCasaAberta] = useState(null);

  return (
    <>
      
      <section className="cima">
        <h1 className="frase">
          <span className="parte1">“Descubra casas acessíveis, bem localizadas</span>
          <span className="parte2"> e com tudo o que você precisa para viver com qualidade.”</span>
        </h1>
        <img className="imagem" src={andando} alt="Mulher Andando" />
      </section>

      
      <div className="container-casas">
        <h2 className="titulo-casas">Casas</h2>
        {casasData.map((casa) => (
          <Casa
            key={casa.id}
            casa={casa}
            expandida={casaAberta === casa.id}
            aoClicar={() =>
              setCasaAberta(casaAberta === casa.id ? null : casa.id)
            }
          />
        ))}
      </div>

    
      <section className="secao-regras">
        <h2 className="titulo-regras">REGRAS</h2>
        <div className="grid-regras">
          <div className="regra">
            <span className="numero">1.</span>
            <p>É proibido qualquer tipo de animal doméstico que perturbe os vizinhos com mau cheiro e barulho.</p>
          </div>
          <div className="regra">
            <span className="numero">2.</span>
            <p>É proibido som alto em qualquer horário, devendo respeitar a lei do PSIU após 22:00 horas até 9:00 horas do dia seguinte (art. 42 da Lei de Contravenções Penais).</p>
          </div>
          <div className="regra">
            <span className="numero">3.</span>
            <p>É proibido deixar sacos de lixo ou outros afins, nos corredores e garagem para que não impeça a passagem dos moradores.</p>
          </div>


          <div className="regra-central">
            <div className="regra">
              <span className="numero">4.</span>
              <p>É proibido o uso da garagem para festas ou qualquer tipo de evento ou reuniões de inquilinos, deixando livre sempre com atenção a movimentação dos carros e moradores.</p>
            </div>
            <div className="regra">
              <span className="numero">5.</span>
              <p>É proibido o uso de qualquer tipo de entorpecentes, cigarro etc, nas dependências da casa e quintal.
              </p>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}

function Casa({ casa, expandida, aoClicar }) {
  const [indexImagem, setIndexImagem] = useState(0);

  const avancar = (e) => {
    e.stopPropagation();
    if (indexImagem < casa.imagens.length - 1) {
      setIndexImagem(indexImagem + 1);
    }
  };

  const voltar = (e) => {
    e.stopPropagation();
    if (indexImagem > 0) {
      setIndexImagem(indexImagem - 1);
    }
  };

  useEffect(() => {
    if (expandida) setIndexImagem(0);
  }, [expandida]);

  return (
    <div
      className={`casa ${expandida ? 'expandida' : ''}`}
      onClick={aoClicar}
    >
      {!expandida ? (
        <img
          src={casa.imagens[0]}
          alt={casa.nome}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div className="conteudo-casa">
          <h2>{casa.nome}</h2>
          <div className="carrossel">
            <button className="seta esquerda" onClick={voltar}>
              &#10094;
            </button>
            <img
              src={casa.imagens[indexImagem]}
              alt={`Imagem ${indexImagem + 1}`}
            />
            <button className="seta direita" onClick={avancar}>
              &#10095;
            </button>
          </div>
          <p className="contador">
            {indexImagem + 1} de {casa.imagens.length}
          </p>

          <div className="bloco-informacoes-interna">
            <div className="bloco-lista">
              <h3>INFORMAÇÕES</h3>
              <ul className='texto'>
                <li>Quarto</li>
                <li>Cozinha</li>
                <li>Banheiro</li>
                <li>Lavanderia</li>
                <li>Sala</li>
              </ul>
            </div>

            <div className="bloco-card">
              <p>Água e luz é independente</p>
              <p>1 Mês de depósito + o Aluguel</p>
              <a
                href="https://wa.me/5511999441013"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="botao-alugar">
                  Alugar via WhatsApp
                </button>
              </a>
              <p style={{ color: 'red' }}>Casa Indisponível</p>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

