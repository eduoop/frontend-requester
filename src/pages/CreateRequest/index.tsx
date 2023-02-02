import React, { FormEvent, useEffect, useState } from 'react'
import { Container, MainContainer, Form, Input, InputSearch, Title, StyledSelect, AddItemContainer, AddItemButton, ContainerItems, StyledTextArea, Line, ListSnacks, AddHeader, Save } from './styles'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { api } from '../../config/api';
import { SnackCard } from '../../components/SnackCard';
import { v4 as uuidv4 } from 'uuid';
import { FilterDolarToValue } from '../../utils/FilterValueToReais';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export type Snack = {
    name: string;
    price: number;
    amount: number;
    id: string;
}

type MySnack = {
    name: string;
    price: number;
}

export const CreateRequest = () => {

    const [name, setName] = useState("")
    const { width } = useWindowDimensions();
    const [status, setStatus] = React.useState('waiting');
    const [note, setNote] = React.useState("");
    const token = localStorage.getItem('authToken');
    const [mySnacks, setMySnacks] = useState<MySnack[]>([])
    const [snacks, setSnacks] = useState<Snack[]>([])
    const navigate = useNavigate()

    const [editingSnack, setEditingSnack] = useState<Snack>()

    const [currentSnackName, setCurrentSnackName] = useState("");
    const [value, setValue] = React.useState("");
    const [valueMultiplied, setValueMultiplied] = React.useState("");
    const [times, setTimes] = React.useState("");

    const [invName, setInvName] = useState(false)

    const [invSnackName, setInvSnackName] = useState(false)
    const [invSnackValue, setInvSnackValue] = useState(false)
    const [invSnackTimes, setInvSnackTimes] = useState(false)

    const [total, setTotal] = useState(0)

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setStatus(event.target.value as string);
    };

    const filterNumbersString = (fullText: string) => {
        return fullText.replace(/\D/g, '')
    }

    const getMySnacks = () => {
        api.get("/snacks", {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                setMySnacks(res.data)
            })
    }

    const addItem = async (e: FormEvent) => {
        e.preventDefault();

        if (!currentSnackName.trim()) {
            setInvSnackName(true)
        } else {
            setInvSnackName(false)
        }

        if (!value.trim()) {
            setInvSnackValue(true)
        } else {
            setInvSnackValue(false)
        }

        if (!times.trim() || Number(times) < 1) {
            setInvSnackTimes(true)
        } else {
            setInvSnackTimes(false)
        }

        if (currentSnackName && value && times && Number(times) >= 1) {
            const newSnack = {
                amount: Number(times),
                name: currentSnackName,
                price: valueMultiplied.includes(",") ? Number(valueMultiplied.replaceAll(",", ".")) : Number(valueMultiplied),
                id: uuidv4(),
            }

            await setSnacks((oldValue) => [...oldValue, newSnack]);
            setTotal(total + newSnack.price)

            setEditingSnack(undefined)
            setValue('')
            setCurrentSnackName('')
            setTimes('')
        }
    }

    const verifyNullCamps = () => {
        if (currentSnackName && currentSnackName.trim()) {
            setInvSnackName(false)
        }

        if (value.trim()) {
            setInvSnackValue(false)
        }

        if (times.trim()) {
            setInvSnackTimes(false)
        }

        if (name.trim()) {
            setInvName(false)
        }
    }

    const createRequest = (e: FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            setInvName(true)
        } else {
            setInvName(false)
        }

        if (snacks.length < 1) {
            setInvSnackName(true)
            setInvSnackValue(true)
            setInvSnackTimes(true)
        } else {
            setInvSnackName(false)
            setInvSnackValue(false)
            setInvSnackTimes(false)
        }

        if (name && snacks.length >= 1) {
            api.post("/requests", {
                name: name,
                price: total,
                status: status,
                note: note ? note : "",
                requestItems: snacks.map((snack) => {
                    return {
                        amount: snack.amount,
                        name: snack.name,
                        price: snack.price
                    }
                })
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    console.log(res.data)
                    toast.success("Pedido craido com sucesso!")
                    navigate("/requests")
                })
        }
    }

    useEffect(() => {
        getMySnacks()
    }, [])

    useEffect(() => {
        const item = mySnacks.filter(snack => snack.name === currentSnackName)[0]
        if (item) {
            setTimes("1")
            setValue(JSON.stringify(item.price))
        }
    }, [currentSnackName])

    useEffect(() => {
        if (Number(times) > 1 && Number(value) >= 1) {
            const newValue = Number(value) * Number(times)
            setValueMultiplied(JSON.stringify(newValue))
        } else {
            setValueMultiplied(value)
        }
    }, [times])

    useEffect(() => {
        if (value && !editingSnack) {
            setTimes("1")
            setValueMultiplied(value)
        } else {
            setValueMultiplied(value)
        }
    }, [value])

    useEffect(() => verifyNullCamps(), [currentSnackName, value, times, name])

    useEffect(() => {
        if (editingSnack) {
            setValue(JSON.stringify(editingSnack.price / editingSnack.amount))
            setCurrentSnackName(editingSnack.name)
            setTimes(JSON.stringify(editingSnack.amount))
        }
    }, [editingSnack])

    return (
        <Container>
            <MainContainer>
                <Form onSubmit={(e) => createRequest(e)}>
                    <AddHeader>
                        <Save>Criar pedido</Save>
                        <Title>Total: R${FilterDolarToValue(total)}</Title>
                    </AddHeader>
                    <Input value={name} onChange={(e) => setName(e.target.value)} invalid={invName} placeholder="Nome do cliente" />
                    <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        onChange={(e) => handleChange(e)}
                    >
                        <MenuItem value={"waiting"}>Em andamento</MenuItem>
                        <MenuItem value={"complete"}>Finalizado</MenuItem>
                        <MenuItem value={"canceled"}>Cancelado</MenuItem>
                    </StyledSelect>
                    <StyledTextArea onChange={(e) => setNote(e.target.value)} value={note} placeholder='Observação: (opcional)' invalid={false} />
                    <AddItemContainer>
                        <ContainerItems>
                            <div className='w-3/4'>
                                <InputSearch
                                    invalid={invSnackName}
                                    id="free-solo-demo"
                                    value={currentSnackName}
                                    freeSolo
                                    onChange={(e, select: any) => setCurrentSnackName(select)}
                                    options={mySnacks.map((option) => option.name)}
                                    renderInput={(params) => <TextField onChange={(e) => setCurrentSnackName(e.target.value)} placeholder='Lanche ou bebida' sx={{
                                        padding: 0,
                                        fontSize: 10,
                                    }} {...params} />}
                                />
                            </div>
                            <div className='w-1/4'>
                                <Input type="text" value={valueMultiplied} onChange={(e) => setValue(e.target.value)} invalid={invSnackValue} placeholder="Valor" />
                            </div>
                            <div className='w-1/4'>
                                <Input value={times} onChange={(e) => setTimes(filterNumbersString(e.target.value))} invalid={invSnackTimes} placeholder="Quantidade" />
                            </div>
                        </ContainerItems>
                        <div className={width > 600 ? 'w-1/4' : 'w-full'}>
                            <AddItemButton type='button' onClick={(e) => addItem(e)}>{!editingSnack ? "Adicionar" : "Salvar"}</AddItemButton>
                        </div>
                    </AddItemContainer>
                    <Line />
                    <ListSnacks>
                        {snacks.map((snack, index) => (
                            <SnackCard setEditingSnack={setEditingSnack} snack={snack} key={new Date().getDate() + new Date().getMilliseconds() + index} setSnacks={setSnacks} snacks={snacks} setTotal={setTotal} total={total} />
                        ))}
                    </ListSnacks>
                </Form>
            </MainContainer>
        </Container>
    )
}
