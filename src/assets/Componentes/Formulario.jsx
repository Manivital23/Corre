import { Link } from 'react-router-dom';
import './Formulario.css';

function Formulario() {
  return (
    <section className="fundo">
      <div className="quadradinho">
        <h1 className="formula">Formulário do Inquilino</h1>

        <form className="form">
          <h2 className="pessoal">Informações Pessoais:</h2>

          <label htmlFor="nome">Nome Completo</label>
          <input type="text" id="nome" name="nome" />

          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" />

          <label htmlFor="rg">RG</label>
          <input type="text" id="rg" name="rg" />

          <label htmlFor="nascimento">Data de Nascimento</label>
          <input type="date" id="nascimento" name="nascimento" />

          <label htmlFor="estadoCivil">Estado Civil</label>
          <input type="text" id="estadoCivil" name="estadoCivil" />

          <label htmlFor="dependentes">Número de Dependentes</label>
          <input type="number" id="dependentes" name="dependentes" min="0" />

          <label htmlFor="telefoneFixo">Telefone Fixo</label>
          <input type="tel" id="telefoneFixo" name="telefoneFixo" />

          <label htmlFor="telefoneCelular">Telefone Celular</label>
          <input type="tel" id="telefoneCelular" name="telefoneCelular" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />

          <h2>Endereço Atual:</h2>

          <label htmlFor="ruaAtual">Rua/Avenida</label>
          <input type="text" id="ruaAtual" name="ruaAtual" />

          <label htmlFor="numeroAtual">Número</label>
          <input type="text" id="numeroAtual" name="numeroAtual" />

          <label htmlFor="bairroAtual">Bairro</label>
          <input type="text" id="bairroAtual" name="bairroAtual" />

          <label htmlFor="cidadeAtual">Cidade</label>
          <input type="text" id="cidadeAtual" name="cidadeAtual" />

          <label htmlFor="cepAtual">CEP</label>
          <input type="text" id="cepAtual" name="cepAtual" />

          <label htmlFor="motivoMudanca">Motivo da Mudança</label>
          <input type="text" id="motivoMudanca" name="motivoMudanca" />

          <label htmlFor="tempoMoradia">Tempo de Moradia no Endereço Atual</label>
          <input type="text" id="tempoMoradia" name="tempoMoradia" />

          <h2>Informações sobre o Emprego:</h2>

          <label htmlFor="empresa">Empresa onde trabalha</label>
          <input type="text" id="empresa" name="empresa" />

          <label htmlFor="cargo">Cargo</label>
          <input type="text" id="cargo" name="cargo" />

          <label htmlFor="tempoEmpresa">Tempo de Trabalho na Empresa</label>
          <input type="text" id="tempoEmpresa" name="tempoEmpresa" />

          <label htmlFor="comprovanteRenda">
            <input type="checkbox" id="comprovanteRenda" name="comprovanteRenda" />
            Holerite (últimos três meses)
          </label>

          <h2>Hábitos de Convivência:</h2>

          <label>Animal de estimação:</label>
          <label>
            <input type="radio" name="animal" value="sim" /> Sim
          </label>
          <label>
            <input type="radio" name="animal" value="nao" /> Não
          </label>

          <label>Fumante:</label>
          <label>
            <input type="radio" name="fumante" value="sim" /> Sim
          </label>
          <label>
            <input type="radio" name="fumante" value="nao" /> Não
          </label>

           <h2>Política de Privacidade</h2>

          <p className="privacidade-texto">
            Seus dados serão utilizados apenas para fins de análise de locação e não serão compartilhados com terceiros sem o seu consentimento.
          </p>

          <label className="privacidade-consentimento">
            <input type="checkbox" required name="termosPrivacidade" />
            Li e concordo com a <Link to="/Politica">Política de Privacidade</Link>.
          </label>

          <button type="submit">Enviar</button>

        </form>
      </div>
    </section>
  );
}

export default Formulario;
