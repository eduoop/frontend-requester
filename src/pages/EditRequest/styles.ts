import Styled from "styled-components";
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';

interface Props {
  invalid: boolean;
}

export const Container = Styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const MainContainer = Styled.div`
    width: 90%;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
     @media (max-width: 600px) {
        padding-right: 1em;
    }
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

export const Title = Styled.h1`
    color: #1F1F1F;
    font-weight: 500;
    font-size: 2em;
    text-align: center;
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

export const StyledSelect = Styled(Select)`
  .MuiSelect-select {
    padding: 0.3em 0.4em !important;
    font-size: 1.3em !important;
    font-weight: 500;
    font-family: Poppins !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 2px solid var(--black-700) !important;
    font-size: 1.3em !important;
    font-weight: 500;
    font-family: Poppins !important;
    border-radius: 9px;
  }
`

export const AddItemContainer = Styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5em;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`

export const AddItemButton = Styled.button`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 0.7em 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  background-color: var(--red-700);
  cursor: pointer;
  color: white;
  -webkit-transition: .2s;
  transition: .2s;

  &:hover {
    opacity: .9;
}

  @media (max-width: 600px) {
    padding-right: 1em;
  }
`

export const ContainerItems = Styled.div`
  width: 100%;
  display: flex;
  gap: 0.5em;
`

export const StyledTextArea = Styled.textarea<Props> `
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
    min-height: 150px;
    width: 100%;
    ${(props) => props.invalid === true && `
        color: var(--red-700);
        border-color: var(--red-700);
    `}
`

export const Line = Styled.div`
    width: 100%;
    height: 3px;
    background-color: var(--black-700);
    margin-bottom: .5em;
    margin-top: .5em;
`

export const ListSnacks = Styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  flex-wrap: wrap;
`

export const AddHeader = Styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2em;
  flex-wrap: wrap;
  margin-bottom: .5em;
  @media (max-width: 600px) {
    gap: 0;
  }
`

export const Save = Styled.button`
  padding: .1em .4em;
  text-transform: uppercase;
  color: var(--white-300);
  font-weight: 600;
  font-size: 2em;
  text-align: center;
  background-color: var(--red-700);
  border-radius: 4px;
  box-shadow: 2px 2px 8px #00000063;
  transition: .3s;
   &:hover {
        opacity: .9;
    }
`





