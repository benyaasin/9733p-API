import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarBS from '../components/NavbarBS'

function RootLayout() {
    return (
        <>
            <NavbarBS />
            <Outlet />
        </>
    )
}

export default RootLayout