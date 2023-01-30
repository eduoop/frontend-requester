import styled from "styled-components";
import InputMask from 'react-input-mask';

interface Props {
    invalid: boolean;
}

export const Input = styled.input<Props> `
    border: none;
    border-bottom: 2px solid var(--white-300);
    background-color: transparent;
    outline: none;
    transition: .2s;
    padding: .3em .3em;
    font-size: 1.3em;
    color: white;
    width: 100%;
    ${(props) => props.invalid === true && `
        color: var(--red-700);
        border-color: var(--red-700);
    `}
    &:focus {
        background-color: #f5f8fa08;
        border-color: #f5f8fa8c;
    }
    &::placeholder {
        color: #f5f8fa4a;
    }
    &:disabled {
        color: #ffffff6e;
        border-bottom: 2px solid #ffffff6e;
    }
`

export const InputMasked = styled(InputMask) <Props> `
    border: none;
    border-bottom: 2px solid var(--white-300);
    background-color: transparent;
    outline: none;
    transition: .2s;
    padding: .3em .3em;
    font-size: 1.3em;
    color: white;
    width: 100%;
    ${(props) => props.invalid === true && `
        color: var(--red-700);
        border-color: var(--red-700);
    `}      
    &:focus {
        background-color: #f5f8fa08;
        border-color: #f5f8fa8c;
    }
    &::placeholder {
        color: #f5f8fa4a;
    }
    &:disabled {
        color: #ffffff6e;
        border-bottom: 2px solid #ffffff6e;
    }
`