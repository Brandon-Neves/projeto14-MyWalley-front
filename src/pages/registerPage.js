import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import styled from 'styled-components'
import { useState } from 'react'
import StyledLink from '../components/StyledLink'
import StyledInput from '../components/StyledInput'
import StyledButton from '../components/StyledButton'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function createAccount(e) {
    e.preventDefault()
    const body = {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword
    }

    if (password !== confirmPassword) {
      alert('Senhas não conferem')
    } else {
      const promise = api.signUp(body)
      promise.then(res => {
        console.log(res.data)
      })
      promise.catch(() => {
        alert('Erro inesperado tente novamente mais tarde')
      })
    }
  }
  return (
    <RegisterPage>
      <h1>MyWallet</h1>
      <form onSubmit={createAccount} action="">
        <StyledInput
          type="name"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <StyledInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          value={password}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          value={confirmPassword}
          placeholder="Confirme a senha"
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <StyledButton>Cadastrar</StyledButton>
      </form>
      <StyledLink to="/">Já possuí uma conta? Entre</StyledLink>
    </RegisterPage>
  )
}

const RegisterPage = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    font-size: 14px;
  }
  h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #fff;
    margin-bottom: 28px;
  }
`
