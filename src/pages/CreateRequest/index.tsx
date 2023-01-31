import React, { FormEvent, useEffect, useState } from 'react'
import { Container, MainContainer, Form, Input, InputSearch, Title, StyledSelect, AddItemContainer, AddItemButton, ContainerItems, StyledTextArea, Line, ListSnacks } from './styles'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { api } from '../../config/api';
import { SnackCard } from '../../components/SnackCard';

export type Snack = {
    name: string;
    price: number;
    amount: number;
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

    const [currentSnackName, setCurrentSnackName] = useState("");
    const [value, setValue] = React.useState("");
    const [valueMultiplied, setValueMultiplied] = React.useState("");
    const [times, setTimes] = React.useState("");

    const [invName, setInvName] = useState(false)

    const [invSnackName, setInvSnackName] = useState(false)
    const [invSnackValue, setInvSnackValue] = useState(false)
    const [invSnackTimes, setInvSnackTimes] = useState(false)

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

        if (!times.trim()) {
            setInvSnackTimes(true)
        } else {
            setInvSnackTimes(false)
        }

        if (currentSnackName && value && times) {
            const newSnack = {
                amount: Number(times),
                name: currentSnackName,
                price: Number(value),
            }

            await setSnacks((oldValue) => [...oldValue, newSnack]);

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
    }

    useEffect(() => {
        getMySnacks()
    }, [])

    useEffect(() => {
        const item = mySnacks.filter(snack => snack.name === currentSnackName)[0]
        if (item) {
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
        if (value) {
            setTimes("1")
            setValueMultiplied(value)
        }
    }, [value])

    useEffect(() => verifyNullCamps(), [currentSnackName, value, times])

    return (
        <Container>
            <MainContainer>
                <Title>Criar pedido</Title>
                <Form>
                    <Input value={name} onChange={(e) => setName(e.target.value)} invalid={false} placeholder="Nome do cliente" />
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
                                <Input type="number" value={valueMultiplied} onChange={(e) => setValue(e.target.value)} invalid={invSnackValue} placeholder="Valor" />
                            </div>
                            <div className='w-1/4'>
                                <Input value={times} onChange={(e) => setTimes(filterNumbersString(e.target.value))} invalid={invSnackTimes} placeholder="Quantidade" />
                            </div>
                        </ContainerItems>
                        <div className={width > 600 ? 'w-1/4' : 'w-full'}>
                            <AddItemButton type='button' onClick={(e) => addItem(e)}>Adicionar</AddItemButton>
                        </div>
                    </AddItemContainer>
                    <Line />
                    <ListSnacks>
                        {snacks.map((snack, index) => (
                            <SnackCard snack={snack} key={new Date().getDate() + new Date().getMilliseconds() + index}/>
                        ))}
                    </ListSnacks>
                </Form>
            </MainContainer>
        </Container>
    )
}
