import React from 'react'
import { Input } from '../InputOutlined/styles'
import { InputOutlined } from '../InputOutlined'
import { Button } from '../Button'
import { Actions, Logincard } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  setStage: React.Dispatch<React.SetStateAction<string>>;
}

export const ForgotPassword = ({ email, setEmail, setStage }: Props) => {
  return (
    <Logincard>
      <h1 className='text-white text-2xl mb-5'>Recuperar conta</h1>
      <div className='flex flex-col gap-10 w-full'>
        <InputOutlined id='email' setValue={setEmail} type="text" value={email} placeholder="Email" />
        <Actions>
          <Button inLoading={false} text='Enviar'></Button>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('create')}>Criar conta</p>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('login')}>Entrar</p>
        </Actions>
      </div>
    </Logincard>
  )
}
