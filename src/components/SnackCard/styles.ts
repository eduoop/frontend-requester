import Styled from "styled-components";

export const Card = Styled.div`
    padding: .5em;
    border-radius: 9px;
    box-shadow: 2px 2px 8px #00000063;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    transition: .2s;
    &:hover {
        box-shadow: 2px 2px 8px #00000033;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`

export const NameContainer = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Name = Styled.h1`
    font-weight: 700;
    font-size: 1.5em;
    color: var(--red-700)
`

export const Amount = Styled.small`
    font-weight: 700;
    font-size: 1.3em;
`

export const PriceEndAmount = Styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1em;
   width: 100%;
`

export const Actions = Styled.div`
   display: flex;
   align-items: center;
   gap: .3em;
   width: 100%;
   margin-top: 1em;
`

export const DeleteButton = Styled.button`
   width: 50%;
   padding-top: .3em;
   padding-bottom: .3em;
   background-color: #ff0f2b;
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: .3s;
   &:hover {
    opacity: .9;
   }
`

export const EditButton = Styled.button`
   width: 50%;
   padding-top: .3em;
   padding-bottom: .3em;
   background-color: #0f4bff;
   border-radius: 4px;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: .3s;
   &:hover {
    opacity: .9;
   }

`


