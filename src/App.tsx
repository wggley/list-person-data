import './App.scss';
import './Components/Form-field/index.scss';
import './Components/Form-button/index.scss';
import { FormButton } from './Components/Form-button';
import { FormField } from './Components/Form-field';
import { useState } from 'react';
import { FormList } from './Pages/Form-list';
import IPerson from './Class/person';
import React from 'react';
import { FormRegister } from './Pages/Form-register';

interface IGlobalContext {
  currentUserData: IPerson,
  setCurrentUserData: React.Dispatch<React.SetStateAction<IPerson>>,
  setCurrentPageList: () => void
  setCurrentPageRegister: () => void
}

export const GlobalContext = React.createContext<IGlobalContext>(
  {} as IGlobalContext
)

export const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('list')
  const [currentUserData, setCurrentUserData] = useState<IPerson>({} as IPerson)

  const setCurrentPageList = () => {
    setCurrentPage('list')
  }

  const setCurrentPageRegister = () => {
    setCurrentPage('register')
  }

  return (
    <GlobalContext.Provider
      value={{
        currentUserData,
        setCurrentUserData,
        setCurrentPageList,
        setCurrentPageRegister
      }}
    >
      <div className="App">
        {currentPage === 'list' && (
          <FormList></FormList>
        )}
        {currentPage === 'register' && (
          <FormRegister></FormRegister>
        )}
      </div>
    </GlobalContext.Provider>
  )
}

export default App
