import React from 'react'
import whiteLoader from "../../assets/whiteLoader.svg";
import { ButtonDisabled, ButtonAble } from './styles';

type Props = {
  inLoading: boolean;
  text?: string;
}

export const Button = ({ inLoading = false, text = 'Entrar' }: Props) => {
  return (
    <>
      {inLoading ?
        <ButtonDisabled disabled>
          <img className='h-14' src={whiteLoader} />
        </ButtonDisabled>
        :
        <ButtonAble>
          {text}
        </ButtonAble>
      }
    </>
  )
}
