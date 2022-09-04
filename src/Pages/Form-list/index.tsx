import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import IPerson from "../../Class/person";
import { FormButton } from "../../Components/Form-button";
import './index.scss'

export const FormList = (props: any) => {
  const { currentUserData, setCurrentUserData, setCurrentPageRegister } = useContext(GlobalContext)

  const [data, setData] = useState<Array<IPerson>>([])

  useEffect(() => {
    getData()
      .then(response => {
        setData(response)
      })
    return () => {
    }
  }, []);

  const getData = async () => {
    let userData = localStorage.getItem('user-data')
    if (!userData) {
      const response = await fetch('https://private-847f5-ivangenesis.apiary-mock.com/users')
      const data: Array<IPerson> = await response.json()
      return data
    }
    const data = JSON.parse(userData)
    return data
  }

  const handleEditClick = (item: IPerson) => {
    setCurrentUserData(item)
    setCurrentPageRegister()
  }

  const handleRemoveClick = (index: number) => {
    data.splice(index, 1)
    setData([...data])
  }

  return <>
    <div className="Form-list">
      <b className="List-title">Lista de Usuários</b>
      <div className="Button-group">
        <FormButton onClick={() => setCurrentPageRegister()}>Cadastrar</FormButton>
      </div>
      {data?.map((item, index) => (
        <div key={index} className="List-row">
          <div className="List-field">
            <label>Nome</label> <span>{item.name}</span>
          </div>
          <div className="List-field">
            <label>CPF</label> <span>{item.cpf}</span>
          </div>
          <div className="List-field">
            <label>Telefone</label> <span>{item.phone}</span>
          </div>
          <div className="List-field">
            <label>Email</label> <span>{item.email}</span>
          </div>
          <div className="Button-group">
            <FormButton onClick={() => handleEditClick(item)}>Editar</FormButton>
            <FormButton onClick={() => handleRemoveClick(index)}>Excluir</FormButton>
          </div>
        </div>
      ))}
    </div>
  </>
}