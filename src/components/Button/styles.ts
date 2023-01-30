import Styled from "styled-components";

export const ButtonDisabled = Styled.button`
    width: 100%;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    background-color: rgb(214 35 0 / 70%);
    cursor: pointer;
    color: white;
    height: fit-content;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonAble = Styled.button`
    width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    background-color: var(--red-700);
    cursor: pointer;
    color: white;
    transition: .2s;
    &:hover {
        background-color: rgb(172 28 0);
    }
`