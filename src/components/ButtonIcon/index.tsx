import React from 'react'
import { IconType } from 'react-icons/lib';
import whiteLoader from "../../assets/whiteLoader.svg";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ButtonDisabled, ButtonAble } from './styles';

type Props = {
  text?: string;
  IconRight: IconType;
  onClick: () => void;
}

export const ButtonIcon = ({text = 'Entrar', IconRight, onClick }: Props) => {

  const { height, width } = useWindowDimensions();

  return (
    <>
      <ButtonAble onClick={onClick}>
        {width > 600 ? text : ""}  <IconRight fontSize={25}/>
      </ButtonAble>
    </>
  )
}
