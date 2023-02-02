import React from 'react'
import { MdEdit } from 'react-icons/md';
import { IoTrash } from 'react-icons/io5';
import { Snack } from '../../pages/CreateRequest'
import { FilterDolarToBr } from '../../utils/FilterDolarToBr';
import { Actions, Amount, Card, DeleteButton, EditButton, Name, NameContainer, PriceEndAmount } from './styles';

type Props = {
  snack: Snack;
  setSnacks: React.Dispatch<React.SetStateAction<Snack[]>>;
  snacks: Snack[];
  setEditingSnack: React.Dispatch<React.SetStateAction<Snack | undefined>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}

export const SnackCard = ({ snack, setSnacks, snacks, setEditingSnack, setTotal, total }: Props) => {

  const deleteSnack = () => {
    setTotal(total - snack.price)
    setSnacks(snacks.filter(snackMap => snackMap.id !== snack.id));
  }

  const editSnack = async () => {
    await setEditingSnack(snack)
    setTotal(total - snack.price)
    setSnacks(snacks.filter(snackMap => snackMap.id !== snack.id));
  }

  return (
    <Card>
      <NameContainer>
        <Name>{snack.name}</Name>
        <PriceEndAmount>
          <Amount>Quantidade: <span style={{ color: "rgb(214,35,0)" }}>{snack.amount}x</span></Amount>
        </PriceEndAmount>
        <PriceEndAmount>
          <Amount>Total: <span style={{ color: "rgb(214,35,0)" }}>R${FilterDolarToBr(snack.price)}</span></Amount>
        </PriceEndAmount>
        <Actions>
          <EditButton onClick={editSnack} type='button'>
            <MdEdit fontSize={25} color="white" />
          </EditButton>
          <DeleteButton onClick={deleteSnack} type='button'>
            <IoTrash fontSize={25} color="white" />
          </DeleteButton>
        </Actions>
      </NameContainer>
    </Card>
  )
}
