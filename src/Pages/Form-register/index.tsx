import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import IPerson from "../../Class/person";
import { FormButton } from "../../Components/Form-button";
import { FormField } from "../../Components/Form-field";
import './index.scss'

export const FormRegister = (props: any) => {
  const { currentUserData, setCurrentUserData, setCurrentPageList } = useContext(GlobalContext)

  const [data, setData] = useState<Array<IPerson>>([])

  return <>
    <div className="Form-register">
      <b className="List-title">Cadastrar Usuário</b>
      <div className="Button-group">
        <FormButton onClick={() => setCurrentPageList()}>Lista de Usuários</FormButton>
      </div>
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
    </div>
  </>
}