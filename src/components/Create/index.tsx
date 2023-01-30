import React, { useState } from 'react'
import { Input } from '../InputOutlined/styles'
import { InputOutlined } from '../InputOutlined'
import { Button } from '../Button'
import { Actions, Logincard } from './styles'
import { Link } from 'react-router-dom'
import { api } from '../../config/api'
import toast, { Toaster } from 'react-hot-toast';

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  setStage: React.Dispatch<React.SetStateAction<string>>;
}

export const Create = ({ email, setEmail, setStage }: Props) => {

  const [loading, setLoading] = useState(false)

  const [invEmail, setInvEmail] = useState(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!email.trim()) {
      setInvEmail(true)
    } else {
      setInvEmail(false)
    }

    if (email.trim()) {
      setLoading(true)
      api.post('/users/register', {
        email: email,
        redirectUrl: "http://localhost:5173/finish-create",
        type: "company"
      })
      .then(() => {
        toast.success("Email enviado")
        setLoading(false)
      })
      .catch((err) => {
        if(err.response.data.errors[0].rule === 'unique' && err.response.data.errors[0].field === 'email') {
          toast.error('Email em uso')
          setLoading(false)
        }
      })
    }
  }

  return (
    <Logincard onSubmit={(e) => sendEmail(e)}>
      <h1 className='text-white text-2xl mb-5'>Criação de conta</h1>
      <div className='flex flex-col gap-10 w-full'>
        <InputOutlined invalid={invEmail} setInvalid={setInvEmail} id='email' setValue={setEmail} type="text" value={email} placeholder="Email" />
        <Actions>
          <Button inLoading={loading} text='Enviar'></Button>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('login')}>Entrar</p>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('forgotPassword')}>Esqueceu sua senha?</p>
        </Actions>
      </div>
    </Logincard>
  )
}
