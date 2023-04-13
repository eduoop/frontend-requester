import React, { useContext } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth/AuthContext';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { LinksContainer, Navbar, ProfileContainer } from './styles'

export const SideBar = () => {

  const { height, width } = useWindowDimensions();
  const token = localStorage.getItem("authToken");

  const verifiPadding = () => {
    if (width > 600) {
      return 'px-3'
    } else {
      return 'px-2'
    }
  }

  const verifyActive = (active: boolean) => {
    if (active === true) {
      return `text-white ${verifiPadding()} font-[500] text-lg w-fit py-1 bg-orange rounded-md`
    } else {
      return `text-white ${verifiPadding()} transition duration-150 font-[500] text-lg w-fit py-1 hover:bg-red-500 rounded-md`;
    }
  }

  const verifyActiveProfile = (active: boolean) => {
    if (active === true) {
      return `text-white ${verifiPadding()} text-lg w-fit py-1 text-red-500 rounded-md flex`
    } else {
      return `text-white ${verifiPadding()} transition duration-150 text-lg w-fit py-1 hover:text-red-500 rounded-md`;
    }
  }

  const auth = useContext(AuthContext)

  return (
    <>
      <Navbar>
        <div style={{ display: "flex", width: "90%", justifyContent: "space-between" }}>
          <LinksContainer>
            <NavLink className={({ isActive }) => (verifyActive(isActive))} to="/requests">Pedidos</NavLink>
            <NavLink className={({ isActive }) => (verifyActive(isActive))} to="/snacks">Lanches</NavLink>
          </LinksContainer>
          <ProfileContainer>
            <NavLink className={({ isActive }) => (verifyActiveProfile(isActive))} to="/profile">
              <BsPersonCircle fontSize={32}/>
            </NavLink>
            <MdOutlineLogout onClick={async () => {
              await auth.singout(token)
              const navigate = useNavigate()
              navigate("/")
            }} fontSize={23} className="cursor-pointer text-white hover:text-red-500 transition duration-150"/>
          </ProfileContainer>
        </div>
      </Navbar>
    </>
  )
}
