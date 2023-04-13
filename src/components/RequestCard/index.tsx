import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { FormEvent, useEffect, useState } from 'react'
import { Request } from '../../models/request.model'
import { FilterDolarToBr } from '../../utils/FilterDolarToBr'
import { CardRequest, DataContainer, LittleLabel, Data, Range, ListSnacks, LittleLabelBolder, StyledSelect, Actions, Delete, Edit, Note, ConfirmDelete, NotePopUp, NoteDescription } from './styles'
import { CgTrash } from "react-icons/cg"
import { HiOutlinePencil } from "react-icons/hi"
import { BsExclamationLg } from 'react-icons/bs'
import { api } from '../../config/api'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import { MdNotes } from 'react-icons/md'

type Props = {
    request: Request;
    requests: Request[];
    setRequests: React.Dispatch<React.SetStateAction<Request[]>>;
}

export const RequestCard = ({ request, requests, setRequests }: Props) => {

    const [status, setStatus] = useState("")
    const [confirmDelete, setConfirmDelete] = useState(false)
    const token = localStorage.getItem('authToken');
    const navigate = useNavigate()

    const verifyColor = () => {
        if (status === "canceled") {
            return "#d92323"
        } else if (status === "complete") {
            return "#23d938"
        } else if (status === "waiting") {
            return "#2369d9"
        } else {
            return "yellow"
        }
    }

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        if (confirmDelete) {
            setTimeout(() => {
                setConfirmDelete(false)
            }, 3000)
        }
    }, [confirmDelete])

    const deleteRequest = (e: FormEvent) => {
        e.preventDefault();

        api.delete(`/requests/${request.id}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
                setRequests(requests.filter((requestFilter) => requestFilter.id !== request.id))
            })
    }

    const editStatus = () => {
        api.put(`/requests/${request.id}`, {
            name: request.name,
            price: request.price,
            status: status,
            note: request.note ? request.note : "",
            requestItems: request.requestItems.map((snack) => {
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
            .then((res) => {})
    }

    useEffect(() => {
        editStatus()
    }, [status])

    useEffect(() => {
        setStatus(request.status)
    }, [])

    return (
        <CardRequest>
            <DataContainer>
                <LittleLabel color='#1F1F1F'>
                    Cliente:
                </LittleLabel>
                <Data>
                    {request.name}
                </Data>
            </DataContainer>

            <DataContainer style={{ height: "100%" }}>
                <LittleLabel color='#1F1F1F'>
                    Item(s):
                </LittleLabel>
                <ListSnacks style={{ overflowY: `${request.requestItems.length > 3 ? "scroll" : "hidden"}`, height: `${request.requestItems.length > 3 ? "73px" : "auto"}` }}>
                    {request.requestItems && request.requestItems.map((snack) => (
                        <LittleLabelBolder color='rgb(214,35,0)'>
                            {snack.amount} {snack.name}, {FilterDolarToBr(snack.price)}
                        </LittleLabelBolder>
                    ))}
                </ListSnacks>
            </DataContainer>

            <DataContainer>
                <LittleLabel color='#1F1F1F'>
                    Total:
                </LittleLabel>
                <Data>
                    {FilterDolarToBr(request.price)}
                </Data>
            </DataContainer>

            <DataContainer>
                <LittleLabel color='#1F1F1F'>
                    Status:
                </LittleLabel>
                <StyledSelect
                    labelId="demo-select-small"
                    id="demo-select-small"
                    onChange={(e: any) => handleChange(e)}
                    value={status ? status : request.status}
                >
                    <MenuItem value={"waiting"}>Em andamento</MenuItem>
                    <MenuItem value={"complete"}>Finalizado</MenuItem>
                    <MenuItem value={"canceled"}>Cancelado</MenuItem>
                </StyledSelect>
            </DataContainer>

            <DataContainer>
                <Actions>
                    {
                        request.note &&
                        <Popup contentStyle={{ padding: "0" }} trigger={<Note>
                            <MdNotes fontSize={20} color="white" />
                        </Note>} position="bottom center">
                            <NotePopUp>
                                <NoteDescription>
                                    {request.note}
                                </NoteDescription>
                            </NotePopUp>
                        </Popup>
                    }
                    <Edit onClick={() => navigate(`/edit-request/${request.id}`)}>
                        <HiOutlinePencil fontSize={20} color="white" />
                    </Edit>
                    {confirmDelete ?
                        <ConfirmDelete onClick={deleteRequest}>
                            <BsExclamationLg fontSize={20} color="white" />
                        </ConfirmDelete>
                        :
                        <Delete onClick={() => setConfirmDelete(true)}>
                            <CgTrash fontSize={20} color="white" />
                        </Delete>
                    }
                </Actions>
            </DataContainer>
            <Range color={verifyColor()} />
        </CardRequest>
    )
}
