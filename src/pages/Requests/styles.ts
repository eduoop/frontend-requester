import Styled from "styled-components";
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    invalid: boolean;
}

export const RequestsContainer = Styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const MainContainer = Styled.div`
    width: 90%;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
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
    height: 3px;
    background-color: var(--black-700);
    margin-bottom: .5em;
    margin-top: .5em;
`

export const Form = Styled.form`
    padding: .5em;  
    width: 100%; 
    display: flex;
    flex-direction: column;
    gap: .7em;
`

export const Input = Styled.input<Props>`
    border: none;
    border: 2px solid var(--black-700);
    background-color: transparent;
    outline: none;
    transition: .2s;
    padding: .3em .4em;
    font-weight: 500;
    font-size: 1.3em;
    color: var(--black-700);
    border-radius: 9px;
    width: 100%;
    ${(props) => props.invalid === true && `
        color: var(--red-700);
        border-color: var(--red-700);
    `}
    // &:focus {
    //     background-color: #f5f8fa08;
    //     border-color: #f5f8fa8c;
    // }
    // &::placeholder {
    //     color: #f5f8fa4a;
    // }
    // &:disabled {
    //     color: #ffffff6e;
    //     border-bottom: 2px solid #ffffff6e;
    // }
`

export const InputSearch = Styled(Autocomplete) <Props>`
    border: none;
    border: 2px solid var(--black-700);
    background-color: transparent;
    outline: none;
    transition: .2s;
    padding: 0;
    font-weight: 500;
    font-size: 1.3em;
    color: var(--black-700);
    border-radius: 9px;
    width: 100%;
    ${(props) => props.invalid === true && `
        color: var(--red-700);
        border-color: var(--red-700);
    `}

    &:before {
        border: 2px solid var(--black-700);
        border-radius: 9px;
        padding: 0;
      }
    
      &:after {
        border: 2px solid var(--black-700);
        border-radius: 9px;
        padding: 0;
      }

      .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
        border: none !important;
      }

      .MuiOutlinedInput-root {
        padding: 0 !important;
      }
      .MuiAutocomplete-input {
        padding: 0.3em 0.4em !important;
        font-weight: 500 !important;
        font-size: 1.3em !important;
        font-family: Poppins !important;
      }
      .css-1qqsdnr-MuiAutocomplete-root {
        display: flex !important;
        align-items: center !important;
    }
`