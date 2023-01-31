import React, { useState } from 'react'
import { ButtonIcon } from '../../components/ButtonIcon'
import { SearchBar } from '../../components/SearchBar'
import { RequestsContainer, MainContainer, CreateEndSearch, PopContainer, Title, Line } from './styles'
import { MdOutlineAdd } from "react-icons/md"
import { Dialog } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Requests = () => {

  const [search, setSearch] = useState("")
  
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <RequestsContainer>
      <MainContainer>
        <CreateEndSearch>
          <ButtonIcon IconRight={MdOutlineAdd} text="Adicionar" onClick={() => navigate("/new-request")}/>
          <SearchBar search={search} setSearch={setSearch} />
        </CreateEndSearch>
      </MainContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <PopContainer>
          <Title>Adicionar novo pedido</Title>
          <Line />
         
        </PopContainer>
      </Dialog>
    </RequestsContainer>
  )
}
