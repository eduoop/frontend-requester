import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { CreateEndSearch, CreateSnack, InputBorderBlack, ListSnacks, SnacksContainer, SnacksMain } from './styles'
import { MdOutlineAdd } from "react-icons/md"
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigate } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar'
import { InputOutlined } from '../../components/InputOutlined'
import { Line } from '../Requests/styles'
import { api } from '../../config/api'
import { Snack } from '../../models/snack.model'
import { v4 as uuidv4 } from 'uuid';
import { FilterBrToDolar } from '../../utils/FilterBrToDolar'
import { SnackCard } from '../../components/SnackCard'
import { SnackCardWithoutAmount } from '../../components/SnackCardWithoutAmount'
import { FilterDolarToBr } from '../../utils/FilterDolarToBr'
import { toast } from 'react-hot-toast'

export const Snacks = () => {

  const [search, setSearch] = useState("")
  const [snackName, setSnackName] = useState("")
  const [invSnackName, setInvSnackName] = useState(false)
  const token = localStorage.getItem("authToken")
  const snackNameRef = useRef<any>(null)
  const [editingSnack, setEditingSnack] = useState<{
    name: string,
    id: string,
    price: number,
  }>()

  const [snacks, setSnacks] = useState<{
    name: string,
    id: string,
    price: number,
  }[]>([])

  const [snackPrice, setSnackPrice] = useState("")
  const [invSnackPrice, setInvSnackPrice] = useState(false)
  const navigate = useNavigate()

  const verifyNullCamps = () => {
    if (snackName) {
      setInvSnackName(false)
      return true
    }

    if (snackPrice) {
      setInvSnackPrice(false)
      return true
    }
  }

  const addSnack = (e: FormEvent) => {
    e.preventDefault();

    if (!snackName.trim()) {
      setInvSnackName(true)
    } else {
      setInvSnackName(false)
    }

    if (!snackPrice.trim()) {
      setInvSnackPrice(true)
    } else {
      setInvSnackPrice(false)
    }

    if (snackName && snackPrice) {
      api.post("/snacks", {
        name: snackName,
        price: snackPrice.includes(",") ? Number(snackPrice.replaceAll(",", ".")) : Number(snackPrice),
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setSnacks((oldSnacks) => [...oldSnacks, { name: res.data.name, price: res.data.price, id: res.data.id, }])
          setSnackName("")
          setSnackPrice("")
          snackNameRef.current.focus()
        })
        .catch((err) => {
          console.log(err.response.data.errors[0])
          if (err.response.data.errors[0].rule === "number" && err.response.data.errors[0].field === "price") {
            setInvSnackPrice(true)
            toast.error("O preço deve ser um numéro")
          }
        })
    }
  }

  const getSnacks = () => {
    api.get("/snacks", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => { setSnacks(res.data) })
  }

  useEffect(() => {
    verifyNullCamps()
  }, [snackName, snackPrice])

  useEffect(() => {
    getSnacks()
  }, [])

  useEffect(() => {
    if (editingSnack) {
      setSnackName(editingSnack.name)
      setSnackPrice(FilterDolarToBr(editingSnack.price))
      snackNameRef.current.focus()
    }
  }, [editingSnack])

  const searchRequest = () => {
    if (search.trim()) {
      api.get(`/snacks?search=${search.toLowerCase()}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setSnacks(res.data))
    } else {
      getSnacks()
    }

  }

  useEffect(() => {
    searchRequest()
  }, [search])

  return (
    <SnacksContainer>
      <SnacksMain>
        <CreateEndSearch>
          <SearchBar search={search} setSearch={setSearch} />
          <Line />
          <CreateSnack onSubmit={(e) => addSnack(e)}>
            <InputBorderBlack ref={snackNameRef} invalid={invSnackName} placeholder="Nome" value={snackName} onChange={(e) => setSnackName(e.target.value)} />
            <InputBorderBlack invalid={invSnackPrice} placeholder="Preço" value={snackPrice} onChange={(e) => setSnackPrice(e.target.value)} />
            <ButtonIcon IconRight={MdOutlineAdd} text="Adicionar" type='submit' />
          </CreateSnack>
        </CreateEndSearch>

        <ListSnacks>
          {snacks.map((snack, i) => (
            <SnackCardWithoutAmount setEditingSnack={setEditingSnack} setSnacks={setSnacks} snack={snack} snacks={snacks} key={snack.id + i} />
          ))}
        </ListSnacks>
      </SnacksMain>
    </SnacksContainer>
  )
}
