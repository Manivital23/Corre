import React, { useState, useEffect } from 'react';
import Casa2 from "../img/Casa2.jpg";
import Casa3 from "../img/Casa3.jpg";
import Casa4 from "../img/Casa4.jpg";
import Casa5 from "../img/Casa5.jpg";
import Casa6 from "../img/Casa6.jpg";
import Casa7 from "../img/Casa7.jpg";
import Casa8 from "../img/Casa8.jpg";
import Casa9 from "../img/Casa9.jpg";
import casinha from '../img/casinha.png'
import { Link } from 'react-router-dom';

import './CasaDois.css';

const casasData = [
  {
    id: 1,
    nome: 'Casa 4',
    imagens: [Casa2, Casa3, Casa4, Casa5, Casa6, Casa7, Casa8, Casa9],
  },
  {
    id: 2,
    nome: 'Casa 5',
    imagens: [Casa2, Casa3, Casa4, Casa5, Casa6, Casa7, Casa8, Casa9],
  },
];

export default function Casas() {
  const [casaAberta, setCasaAberta] = useState(null);

  return (
    <>
      {/* Bloco com imagem e frase */}
      <section className="cima">
        <h1 className="frase">
          <span className="parte1">“Encontre o lar ideal para você e sua família com apenas alguns cliques.”</span>
          <br /> <br />
          <span className="parte2"> “Mais que uma casa, um lar.”</span>
        </h1>
        <img className="imagem" src={casinha} alt="Casinha" />
      </section>

      {/* Lista de casas */}
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

      {/* Bloco de Regras - fora do componente Casa */}
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
