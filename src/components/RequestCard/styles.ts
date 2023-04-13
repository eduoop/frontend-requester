import Styled from "styled-components";
import Select from '@mui/material/Select';

interface Props {
  color: string;
}

export const CardRequest = Styled.div`
    width: 100%;
    padding: 1em 20px 1em 1em;
    box-shadow: 2px 2px 6px #00000040;
    border-radius: 9px;
    display: flex;
    align-items: center;
    position: relative;
    gap: .5em;
    height: 120px;
    @media (max-width: 600px) {
      flex-direction: column;
      height: auto;
  }
`

export const Range = Styled.div<Props> `
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 100%;
    border-radius: 0 9px 9px 0;
    background-color: ${(props) => props.color};
`

export const DataContainer = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1em;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    width: 20%;
    @media (max-width: 600px) {
      width: 100%;
      overflow: initial;
    }
`


export const LittleLabel = Styled.h2<Props> `
    font-size: 1em;
    font-weight: 600;
    color: ${(props) => props.color}
`

export const LittleLabelBolder = Styled.h2<Props> `
    font-size: 1em;
    font-weight: 700;
    color: ${(props) => props.color}
`

export const Data = Styled.h2`
    color: var(--red-700);
    font-size: 1.5em;
    font-weight: 700;
`

export const ListSnacks = Styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding-right: 10px;

    ::-webkit-scrollbar {
        width: 8px;
        border-radius: 6px;
      }

    ::-webkit-scrollbar-track {
        background: #1f1f1f2e;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb {
        width: .2em;
        background-color: #1f1f1f94;
        border-radius: 6px;
    }
`

export const StyledSelect = Styled(Select)`
  .MuiSelect-select {
    padding: 0px !important;
    color: var(--red-700);
    font-size: 1.3em;
    font-weight: 700;
    font-family: Poppins !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
    color: var(--red-700);
    font-size: 1.3em;
    font-weight: 700;
    font-family: Poppins !important;
    border-radius: 9px;
  }

  .css-1869usk-MuiFormControl-root {
    margin: 0;
  }

  .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon {
    display: none;
  }

  .MuiSelect-iconOpen {
    display: none;
  }
`

export const Actions = Styled.div`
  height 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5em;
`

export const Delete = Styled.button`
  padding: .5em;
  background-color: rgb(214,35,0);
  border-radius: 50%;
  transition: .3s;
  outline: none;
  &:hover {
    background-color: #d62300d1;
  }
`

export const Edit = Styled.button`
  padding: .5em;
  background-color: #2369d9;
  border-radius: 50%;
  transition: .3s;
  outline: none;
  &:hover {
    background-color: #2369d9d6;
  }
`

export const Note = Styled.button`
  padding: .5em;
  background-color: #23d938;
  border-radius: 50%;
  transition: .3s;
  outline: none;
  &:hover {
    background-color: #23d938db;
  }
`
export const ConfirmDelete = Styled.button`
  padding: .5em;
  background-color: #d9b223;
  border-radius: 50%;
  transition: .3s;
  outline: none;
  &:hover {
    background-color: #d9b223d1;
  }
`

export const NotePopUp = Styled.div`
  padding: .7em;
  width: 260px;
  background-color: white;
  box-shadow: 2px 2px 6px #00000040;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 6px;
`

export const NoteDescription = Styled.h1`
  font-size: 1em;
  font-weight: 400;
`