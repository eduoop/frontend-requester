import Styled from "styled-components";

interface Props {
    invalid: boolean;
}

export const SnacksContainer = Styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const SnacksMain = Styled.div`
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
    flex-direction: column;
    gap: 1em;
`

export const CreateSnack = Styled.form`
    display: flex;
    gap: 1em;
    width: 70%;
    @media (max-width: 700px) {
        width: 100%;
    }
`

export const InputBorderBlack = Styled.input<Props>`
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

export const ListSnacks = Styled.div`
    display: flex;
    gap: .5em;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 1.5em;
`
