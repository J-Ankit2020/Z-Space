import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const RootLayout = () => {

    return (
        <div className='md:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-[url(/assets/destination/background-destination-mobile.jpg)] bg-cover text-cream font-primary w-screen h-screen overflow-auto'>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default RootLayout;