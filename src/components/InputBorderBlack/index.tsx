import React, { useEffect, useState } from 'react'
import { Input, InputMasked } from './styles'
import InputMask from 'react-input-mask';

type Props = {
  placeholder?: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  id: string;
  mask?: string;
  invalid?: boolean;
  setInvalid?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputBorderBlack = ({ setValue, type, value, disabled, placeholder, id, mask, invalid, setInvalid }: Props) => {

  useEffect(() => {
    if(value.trim() && setInvalid) {
      setInvalid(false)
    }
  }, [value])

  return (
    <>
      {mask ?
        <InputMasked invalid={invalid ? invalid : false} mask={mask} id={id} onChange={(e) => setValue(e.target.value)} type={type} value={value} disabled={disabled ? disabled : false} placeholder={placeholder ? placeholder : ""}>
        </InputMasked>
        :
        <Input invalid={invalid ? invalid : false} id={id} onChange={(e) => setValue(e.target.value)} type={type} value={value} disabled={disabled ? disabled : false} placeholder={placeholder ? placeholder : ""} />
      }
    </>
  )
}
