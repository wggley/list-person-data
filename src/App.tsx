import './App.scss';
import './Components/Form-field/index.scss';
import './Components/Form-button/index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Form-field">
          <label>Nome Completo (sem abreviações)</label>
          <input type="text" className=""></input>
          <span className="error">Campo deve conter 3 caracteres ou mais</span>
        </div>
        <div className="Form-field">
          <label>Nome Completo (sem abreviações)</label>
          <input type="text" className="invalid"></input>
          <span className="error on">Campo deve conter 3 caracteres ou mais</span>
        </div>
        <button className="Form-button">Cadastrar</button>
        <button className="Form-button" disabled>Cadastrar</button>
        <button className="Form-button">
          <div className="loading"></div>
        </button>
      </header>
    </div>
  );
}

export default App;
