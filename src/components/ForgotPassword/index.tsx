import React, { useState } from 'react'
import { Input } from '../InputOutlined/styles'
import { InputOutlined } from '../InputOutlined'
import { Button } from '../Button'
import { Actions, Logincard } from './styles'
import { api } from '../../config/api'
import { toast } from 'react-hot-toast'

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  setStage: React.Dispatch<React.SetStateAction<string>>;
}

export const ForgotPassword = ({ email, setEmail, setStage }: Props) => {

  const [invEmail, setInvEmail] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmailRecoverPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setInvEmail(true)
    } else {
      setInvEmail(false)
    }

    if (email.trim()) {
      setLoading(true)
      api.post('/users/forgot-password', {
        email: email,
        redirectUrl: "http://localhost:5173/recover-account",
      })
        .then(() => {
          toast.success("Email enviado")
          setLoading(false)
        })
        .catch((err) => {
          if (err.response.data.code === "E_ROW_NOT_FOUND") {
            toast.error('Email não encontrado')
            setLoading(false)
          }
        })
    }
  }

  return (
    <Logincard onSubmit={(e) => sendEmailRecoverPassword(e)}>
      <h1 className='text-white text-2xl mb-5'>Recuperar conta</h1>
      <div className='flex flex-col gap-10 w-full'>
        <InputOutlined invalid={invEmail} setInvalid={setInvEmail} id='email' setValue={setEmail} type="text" value={email} placeholder="Email" />
        <Actions>
          <Button inLoading={loading} text='Enviar'/>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('create')}>Criar conta</p>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('login')}>Entrar</p>
        </Actions>
      </div>
    </Logincard>
  )
}
