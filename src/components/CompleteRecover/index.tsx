import React, { useEffect, useState } from 'react'
import { Input } from '../InputOutlined/styles'
import { InputOutlined } from '../InputOutlined'
import { Button } from '../Button'
import { Actions, Logincard } from './styles'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { api } from '../../config/api'
import toast, { Toaster } from 'react-hot-toast';


export const CompleteRecover = () => {

  // Others
  const [loading, setLoading] = useState(false)
  const { key } = useParams()
  const navigate = useNavigate()

  // Fields
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")


  // Change invalid fields
  const [invPassword, setInvPassword] = useState(false)
  const [invPasswordConfirmation, setInvPasswordConfirmation] = useState(false)

  // Functions
  const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // set invalid fields
    if (!password.trim()) {
      setInvPassword(true)
    } else {
      setInvPassword(false)
    }
    if (!passwordConfirmation.trim()) {
      setInvPasswordConfirmation(true)
    } else {
      setInvPasswordConfirmation(false)
    }
    if (password.length < 5) {
      setInvPassword(true)
    }
    if (passwordConfirmation.length < 5) {
      setInvPasswordConfirmation(true)
      toast.error("A senha precisa de no mínimo 5 caracters")
      return false
    }
    if (password !== passwordConfirmation) {
      toast.error("As senhas estão diferentes")
      setInvPassword(true)
      setInvPasswordConfirmation(true)
    } else {
      if (passwordConfirmation.length >= 5 && password.length >= 5) {
        setInvPasswordConfirmation(false)
        setInvPassword(false)
      }
    }

    if (password && passwordConfirmation && passwordConfirmation === password) {
      setLoading(true)
      api.put(`/users/forgot-password`, {
        key: key,
        password: password,
        passwordConfirmation: passwordConfirmation,
      })
        .then(() => {
          toast.success("Senha alterada com sucesso!")
          navigate("/")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  // Effects

  return (
    <Logincard onSubmit={(e) => createAccount(e)}>
      <h1 className='text-white text-2xl mb-5'>Recuparar conta</h1>
      <div className='flex flex-col gap-10 w-full'>
        <InputOutlined invalid={invPassword} setInvalid={setInvPassword} id='password' setValue={setPassword} type="password" value={password} placeholder="Nova senha" />
        <InputOutlined invalid={invPasswordConfirmation} setInvalid={setInvPasswordConfirmation} id='password-confirmation' setValue={setPasswordConfirmation} type="password" value={passwordConfirmation} placeholder="Confirmar senha" />
        <Actions>
          <Button inLoading={loading} text='Enviar'></Button>
          <Link to="/" style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }}>Entrar</Link>
        </Actions>
      </div>
    </Logincard>
  )
}
