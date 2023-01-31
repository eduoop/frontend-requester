import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Navbar } from './styles'

export const SideBar = () => {

  const { height, width } = useWindowDimensions();

  const verifiPadding = () => {
    if (width > 600) {
      return 'px-3'
    } else {
      return 'px-2'
    }
  }

  const verifyActive = (active: boolean) => {
    if (active === true) {
      return `text-white ${verifiPadding()} font-[500] text-lg w-fit py-1 bg-orange rounded-lg`
    } else {
      return `text-white ${verifiPadding()} transition duration-150 font-[500] text-lg w-fit py-1 hover:bg-red-500 rounded-lg`;
    }
  }

  return (
    <>
      <Navbar>
        <div style={{ display: "flex", width: "90%", gap: "1em" }}>
          <NavLink className={({ isActive }) => (verifyActive(isActive))} to="/requests">Pedidos</NavLink>
          <NavLink className={({ isActive }) => (verifyActive(isActive))} to="/snacks">Lanches</NavLink>
        </div>
      </Navbar>
    </>
  )
}
