import React, { useContext, useState } from 'react'
import { Input } from '../InputOutlined/styles'
import { InputOutlined } from '../InputOutlined'
import { Button } from '../Button'
import { Actions, Logincard } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/auth/AuthContext'

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;

  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  setStage: React.Dispatch<React.SetStateAction<string>>;
}

export const Login = ({ email, setEmail, password, setPassword, setStage }: Props) => {

  const auth = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [invEmail, setInvEmail] = useState(false)
  const [invPassword, setInvPassword] = useState(false)

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setInvEmail(true)
    } else {
      setInvEmail(false)
    }

    if (!password.trim()) {
      setInvPassword(true)
    } else {
      setInvPassword(false)
    }

    if (email.trim() && password.trim()) {
      setLoading(true);
      const isLogged = await auth.signin(email, password)
        .catch((err) => {
          console.log(err)
          toast.error("Email ou senha incorretos");
          setLoading(false)
        });
      if (isLogged) {
        navigate("/requests");
        setLoading(false)
      }
    }
  }

  return (
    <Logincard onSubmit={(e) => login(e)}>
      <h1 className='text-white text-2xl mb-5'>Login</h1>
      <div className='flex flex-col gap-10 w-full'>
        <InputOutlined invalid={invEmail} setInvalid={setInvEmail} id='email' setValue={setEmail} type="text" value={email} placeholder="Email" />
        <InputOutlined invalid={invPassword} setInvalid={setInvPassword} id='password' setValue={setPassword} type="password" value={password} placeholder="Senha" />
        <Actions>
          <Button inLoading={loading} text='Entrar'></Button>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('create')}>Criar conta</p>
          <p style={{ color: "rgb(214,35,0)", marginTop: "1em", cursor: "pointer" }} onClick={() => setStage('forgotPassword')}>Esqueceu sua senha?</p>
        </Actions>
      </div>
    </Logincard>
  )
}
