import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Create } from '../../components/Create'
import { ForgotPassword } from '../../components/ForgotPassword'
import { Login } from '../../components/Login'
import { CardContainer, CardSide, HomeContainer, ImageSide } from './styles'

export const Home = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [stage, setStage] = useState("login")

  return (
    <HomeContainer>
      <ImageSide />
      <CardSide>
        <h1 className='text-white font-bold text-4xl px-8 text-center mt-7 w-full'>Gerencie seus pedidos de uma forma que você nunca imaginou!</h1>
        <div className='h-full w-full px-8 flex justify-center'>
          <CardContainer>
            { stage === "login" &&
              <Login setStage={setStage} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
            }
            { stage === "create" &&
              <Create setStage={setStage} email={email} setEmail={setEmail} />
            }
            { stage === "forgotPassword" &&
              <ForgotPassword setStage={setStage} email={email} setEmail={setEmail} />
            }
          </CardContainer>
        </div>
      </CardSide>
    </HomeContainer>
  )
}
