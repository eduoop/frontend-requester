import React, { useEffect, useState } from 'react'
import { ButtonIcon } from '../../components/ButtonIcon'
import { SearchBar } from '../../components/SearchBar'
import { RequestsContainer, MainContainer, CreateEndSearch, PopContainer, Title, Line, ListRequests } from './styles'
import { MdOutlineAdd } from "react-icons/md"
import { Dialog } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Request } from '../../models/request.model'
import { api } from '../../config/api'
import { RequestCard } from '../../components/RequestCard'

export const Requests = () => {

  const [search, setSearch] = useState("")
  const [requests, setRequests] = useState<Request[]>([]);
  const token = localStorage.getItem("authToken")

  const navigate = useNavigate()

  const getAllRequests = () => {
    api.get("/requests", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setRequests(res.data)
      })
  }

  useEffect(() => {
    getAllRequests()
  }, [])

  const searchRequest = () => {
    if (search.trim()) {
      api.get(`/requests?search=${search.toLowerCase()}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setRequests(res.data))
    } else {
      getAllRequests()
    }

  }

  useEffect(() => {
    searchRequest()
  }, [search])

  return (
    <RequestsContainer>
      <MainContainer>
        <CreateEndSearch>
          <ButtonIcon IconRight={MdOutlineAdd} text="Adicionar" onClick={() => navigate("/new-request")} />
          <SearchBar search={search} setSearch={setSearch} />
        </CreateEndSearch>
        {/* <Line /> */}
        {requests.length >= 1 &&
          <>
            <Title>Pedidos:</Title>
            <ListRequests>
              {requests.map((request) => (
                <RequestCard key={request.id} request={request} requests={requests} setRequests={setRequests} />
              ))}
            </ListRequests>
          </>
        }
      </MainContainer>
    </RequestsContainer>
  )
}
