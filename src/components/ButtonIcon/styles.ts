import Styled from "styled-components";

export const ButtonDisabled = Styled.button`
    width: fit-content;
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
    display: flex;
    gap: .2em;
    align-items: center;
`

export const ButtonAble = Styled.button`
    width: fit-content;
    border: none;
    outline: none;
    border-radius: 5px;
    height: 100%;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
    background-color: var(--red-700);
    cursor: pointer;
    color: white;
    transition: .2s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2em;
    &:hover {
        background-color: rgb(172 28 0);
    }

    @media (max-width: 600px) {
        border-radius: 50%
    }
`