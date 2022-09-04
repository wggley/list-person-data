import './App.scss';
import './Components/Form-field/index.scss';
import './Components/Form-button/index.scss';
import { FormButton } from './Components/Form-button';
import { FormField } from './Components/Form-field';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormField
          label={'Nome Completo (sem abreviações)'}
        >
        </FormField>
        <FormField
          label={'Nome Completo (sem abreviações)'}
          invalid
          errorMessage={'Campo deve conter 3 caracteres ou mais'}
        >
        </FormField>
        <FormButton>Cadastrar</FormButton>
        <FormButton disabled>Cadastrar</FormButton>
        <FormButton loading>Cadastrar</FormButton>
      </header>
    </div>
  );
}

export default App;
