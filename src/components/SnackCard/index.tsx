import React from 'react'
import { Snack } from '../../pages/CreateRequest'

type Props = {
    snack: Snack;
}

export const SnackCard = ({ snack }: Props) => {

  return (
    <div>{snack.name}</div>
  )
}
