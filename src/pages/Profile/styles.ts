import Styled from "styled-components";

export const ProfileContainer = Styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const TextProfile = Styled.div`
    text-align: center;
    color: var(--black-700);
    font-size: 1.7em;
    font-weight: 600;
    text-transform: uppercase;
`

export const EditProfileForm = Styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-top: 1em;
`

export const DobleFields = Styled.div`
    display: flex;
    width: 100%;
    gap: 1em;
`