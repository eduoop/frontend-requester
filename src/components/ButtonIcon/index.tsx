import React from 'react'
import { IconType } from 'react-icons/lib';
import whiteLoader from "../../assets/whiteLoader.svg";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ButtonDisabled, ButtonAble } from './styles';

type Props = {
  text?: string;
  IconRight: IconType;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}

export const ButtonIcon = ({text = 'Entrar', IconRight, onClick, type }: Props) => {

  const { height, width } = useWindowDimensions();

  return (
    <>
      <ButtonAble onClick={onClick} type={type ? type : "button"}>
        {width > 600 ? text : ""}  <IconRight fontSize={25}/>
      </ButtonAble>
    </>
  )
}
