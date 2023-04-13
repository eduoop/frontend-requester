import React from 'react'
import whiteLoader from "../../assets/whiteLoader.svg";
import { ButtonDisabled, ButtonAble } from './styles';

type Props = {
  inLoading: boolean;
  text?: string;
  functionExec?: () => void;
}

export const Button = ({ functionExec, inLoading = false, text = 'Entrar' }: Props) => {
  return (
    <>
      {inLoading ?
        <ButtonDisabled disabled>
          <img className='h-14' src={whiteLoader} />
        </ButtonDisabled>
        :
        <ButtonAble onClick={() => {
          if (functionExec) {
            functionExec()
          }
        }}>
          {text}
        </ButtonAble>
      }
    </>
  )
}
