import React from 'react'
import { MdEdit } from 'react-icons/md';
import { IoTrash } from 'react-icons/io5';
import { Snack } from '../../models/snack.model'
import { FilterDolarToBr } from '../../utils/FilterDolarToBr';
import { Actions, Amount, Card, DeleteButton, EditButton, Name, NameContainer, PriceEndAmount } from './styles';
import { api } from '../../config/api';

type Props = {
  snack: {
    name: string;
    id: string;
    price: number;
  };
  setSnacks: React.Dispatch<React.SetStateAction<{
    name: string;
    id: string;
    price: number;
  }[]>>;
  snacks: {
    name: string;
    id: string;
    price: number;
  }[];
  setEditingSnack: React.Dispatch<React.SetStateAction<{
    name: string;
    id: string;
    price: number;
  } | undefined>>;
}

export const SnackCardWithoutAmount = ({ snack, setSnacks, snacks, setEditingSnack }: Props) => {

  const token = localStorage.getItem("authToken")

  const deleteSnack = () => {
    api.delete(`/snacks/${snack.id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      setEditingSnack(undefined)
      setSnacks(snacks.filter(snackMap => snackMap.id !== snack.id));
    })
  }

  const editSnack = async () => {
    setEditingSnack(undefined)

    await setEditingSnack(snack)
    deleteSnack()
  }

  return (
    <Card>
      <NameContainer>
        <Name>{snack.name}</Name>
        <PriceEndAmount>
          <Amount>Preço: <span style={{ color: "rgb(214,35,0)" }}>R${FilterDolarToBr(snack.price)}</span></Amount>
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
