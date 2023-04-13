import { MenuItem, SelectChangeEvent } from '@mui/material'
import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import { InputBorderBlack } from '../../components/InputBorderBlack'
import { api } from '../../config/api'
import { Input, StyledSelect } from '../../pages/CreateRequest/styles'
import { MainContainer } from '../CreateRequest/styles'
import { Line } from '../Requests/styles'
import { DobleFields, EditProfileForm, ProfileContainer, TextProfile } from './styles'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../components/Button'
import { toast } from 'react-hot-toast'

export const Profile = () => {

    const [statesApi, setStatesApi] = useState<{
        nome: string;
        id: number;
    }[]>([])

    const [citiesApi, setCitiesApi] = useState<{
        nome: string;
        id: number;
    }[]>([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [city, setCity] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [address, setAddress] = useState("")

    const [currentState, setCurrentState] = useState(12)
    const [currentCity, setCurrentCity] = useState(12)
    const [loadingCities, setLoadingCities] = useState(false)

    const [invName, setInvName] = useState(false)
    const [invEmail, setInvEmail] = useState(false)
    const [invPhone, setInvPhone] = useState(false)
    const [invPassword, setInvPassword] = useState(false)
    const [invPasswordConfirmation, setInvPasswordConfirmation] = useState(false)

    const token = localStorage.getItem("authToken")

    const submit = (e: FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            setInvName(true)
        } else {
            setInvName(false)
        }
        if (!email.trim()) {
            setInvEmail(true)
        } else {
            setInvEmail(false)
        }
        if (!phone.trim()) {
            setInvPhone(true)
        } else {
            setInvPhone(false)
        }

        if (password && password.length < 5) {
            setInvPassword(true)
        }
        if (password && passwordConfirmation.length < 5) {
            setInvPasswordConfirmation(true)
            toast.error("A senha precisa de no mínimo 5 caracters")
            return false
        }
        if (passwordConfirmation && !password) {
            setInvPassword(true)
        }
        if (password && password !== passwordConfirmation) {
            toast.error("As senhas estão diferentes")
            setInvPassword(true)
            setInvPasswordConfirmation(true)
        } else {
            if (password && passwordConfirmation.length >= 5 && password.length >= 5) {
                setInvPasswordConfirmation(false)
                setInvPassword(false)
            }

            if (name && email && phone) {
                const stateName = statesApi.filter((state) => state.id === currentState)[0].nome
                const cityName = citiesApi.filter((city) => city.id === currentCity)[0].nome

                console.log({
                    email: email,
                    name: name,
                    phone: phone,
                    state: stateName,
                    stateId: currentState,
                    city: cityName,
                    cityId: currentCity,
                    neighborhood: neighborhood,
                    address: address,
                    password: password,
                    passwordConfirmation: passwordConfirmation
                })

                api.put(`/users/profile`, {
                    email: email,
                    name: name,
                    phone: phone,
                    state: stateName,
                    stateId: currentState,
                    city: cityName,
                    cityId: currentCity,
                    neighborhood: neighborhood,
                    address: address,
                    password: password,
                    passwordConfirmation: passwordConfirmation
                }, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }).then(() => { toast.success("ok") })
            }
        }

    }

    const getStates = () => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .then((res) => {
                console.log(res.data)
                setStatesApi(res.data.map((state: any) => {
                    return {
                        nome: state.nome,
                        id: state.id
                    }
                }))
            })
    }

    const getDistricts = () => {
        setLoadingCities(true)
        api.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${currentState}/distritos`,)
            .then((res) => {
                setCitiesApi(res.data.map((city: any) => {
                    return {
                        nome: city.nome,
                        id: city.id
                    }
                }))
                setLoadingCities(false)
            })
    }

    const consultUser = () => {
        api.get("/users/profile", {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                setName(res.data.name)
                setEmail(res.data.email)
                setPhone(res.data.phone)
                setNeighborhood(res.data.neighborhood)
                setCity(res.data.city)
                setAddress(res.data.address)
                setCurrentState(res.data.state_id)
                setCurrentCity(res.data.city_id)
            })
    }

    useEffect(() => {
        consultUser()
        getStates()
    }, [])

    useEffect(() => {
        getDistricts()
    }, [currentState])

    const handleChangeState = (event: SelectChangeEvent<unknown>) => {
        setCurrentState(event.target.value as number);
    };

    const handleChangeCity = (event: SelectChangeEvent<unknown>) => {
        setCurrentCity(event.target.value as number);
    };

    return (
        <ProfileContainer>
            <MainContainer>
                <TextProfile>Editar Perfil</TextProfile>
                <Line></Line>
                <EditProfileForm onSubmit={(e) => submit(e)}>
                    <DobleFields>
                        <Input invalid={invName} placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <InputBorderBlack invalid={invPhone} placeholder="Telefone" value={phone} id="phone" setValue={setPhone} type="text" mask='(99) 99999-9999' />
                    </DobleFields>
                    <Input invalid={invEmail} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentState}
                        onChange={(e) => handleChangeState(e)}
                    >
                        {statesApi.sort((a, b) => {
                            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
                        }).map((stateApi, i) => (
                            <MenuItem key={stateApi.id + uuidv4()} value={stateApi.id}>{stateApi.nome}</MenuItem>
                        ))}
                    </StyledSelect>
                    <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentCity}
                        disabled={loadingCities}
                        onChange={(e) => handleChangeCity(e)}
                    >
                        {citiesApi.sort((a, b) => {
                            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
                        }).map((cityApi, i) => (
                            <MenuItem key={cityApi.id + uuidv4()} value={cityApi.id}>{cityApi.nome}</MenuItem>
                        ))}
                    </StyledSelect>
                    <DobleFields>
                        <Input invalid={false} placeholder="Bairro" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} type="text" />
                        <Input invalid={false} placeholder="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} type="text" />
                    </DobleFields>
                    <DobleFields>
                        <Input invalid={invPassword} placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                        <Input invalid={invPasswordConfirmation} placeholder="Confirmar senha" value={passwordConfirmation} id="password-confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" />
                    </DobleFields>
                    <div className='mt-2'>
                        <Button inLoading={false} text="Salvar" />
                    </div>
                </EditProfileForm>
            </MainContainer>
        </ProfileContainer>
    )
}
