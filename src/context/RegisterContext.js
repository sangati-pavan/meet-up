import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegitered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default RegisterContext
