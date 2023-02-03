import Styled from "styled-components";
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    invalid: boolean;
}

export const RequestsContainer = Styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex
`

export const MainContainer = Styled.div`
    width: 90%;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    flex-direction: column;
    display: flex;
    justify-content: center;
     @media (max-width: 600px) {
        padding-right: 1em;
    }
`

export const CreateEndSearch = Styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;
`

export const PopContainer = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = Styled.h1`
    text-align: center;
    color: var(--black-700);
    font-size: 1.7em;
    font-weight: 600;
    padding: .5em .5em 0 .5em;
    text-transform: uppercase;
`

export const Line = Styled.div`
    width: 100%;
    height: 2px;
    background-color: var(--black-700);
    margin-bottom: .5em;
    margin-top: .5em;
`

export const ListRequests = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin-top: .5em;
`