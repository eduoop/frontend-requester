import Styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = Styled.nav `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80px;
    background-color: #1F1F1F;
    padding: .5em 0 .5em 0;
`

export const LinksContainer = Styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`

export const ProfileContainer = Styled.div`
    display: flex;
    align-items: center;
`