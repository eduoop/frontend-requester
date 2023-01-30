import React, { useEffect, useState } from 'react'
import { Input } from '../InputOutlined/styles'
import { InputOutlined } from '../InputOutlined'
import { Button } from '../Button'
import { Actions, Logincard } from './styles'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../config/api'
import toast, { Toaster } from 'react-hot-toast';


export const CompleteCreate = () => {

  // Others
  const [loading, setLoading] = useState(false)
  const { key } = useParams()

  // Fields
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")


  // Change invalid fields
  const [invName, setInvName] = useState(false)
  const [invPhone, setInvPhone] = useState(false)
  const [invPassword, setInvPassword] = useState(false)
  const [invPasswordConfirmation, setInvPasswordConfirmation] = useState(false)

  // Functions
  const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // set invalid fields
    if (!name.trim()) {
      setInvName(true)
    } else {
      setInvName(false)
    }
    if (!phone.trim()) {
      setInvPhone(true)
    } else {
      setInvPhone(false)
    }
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

    if (name && password && phone && passwordConfirmation && passwordConfirmation === password) {
      alert("ok")
    }
  }

  // Effects
  useEffect(() => {
    api.get(`/users/register/${key}`).then((res) => setEmail(res.data.email))
  }, [key])

  return (
    <Logincard onSubmit={(e) => createAccount(e)}>
      <h1 className='text-white text-2xl mb-5'>Criação de conta</h1>
      <div className='flex flex-col gap-10 w-full'>
        <InputOutlined id='email' setValue={setEmail} type="text" value={email} placeholder="Email" disabled={true} />
        <InputOutlined invalid={invName} setInvalid={setInvName} id='name' setValue={setName} type="text" value={name} placeholder="Nome" />
        <InputOutlined invalid={invPhone} setInvalid={setInvPhone} id='phone' setValue={setPhone} type="text" value={phone} placeholder="Telefone" mask='(99) 99999-9999' />
        <InputOutlined invalid={invPassword} setInvalid={setInvPassword} id='password' setValue={setPassword} type="password" value={password} placeholder="Senha" />
        <InputOutlined invalid={invPasswordConfirmation} setInvalid={setInvPasswordConfirmation} id='password-confirmation' setValue={setPasswordConfirmation} type="password" value={passwordConfirmation} placeholder="Confirmar senha" />
        <Actions>
          <Button inLoading={loading} text='Enviar'></Button>
          <Link to="/" style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }}>Entrar</Link>
        </Actions>
      </div>
    </Logincard>
  )
}
