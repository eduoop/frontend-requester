import styled from "styled-components";
import InputMask from 'react-input-mask';

interface Props {
    invalid: boolean;
}

export const Input = styled.input<Props> `
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
    &:focus {
      background-color: #1f1f1f14;
    }
    `

export const InputMasked = styled(InputMask) <Props> `
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
    &:focus {
      background-color: #1f1f1f14;
    }
`