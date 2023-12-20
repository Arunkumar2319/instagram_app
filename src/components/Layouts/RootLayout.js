import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './RootLayout.css';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const RootLayout = () => {
    const [searchTerm, setSearchTerm] = useState('nature')

    return (
        <>
            <header>
                <Navbar setSearchTerm={setSearchTerm}/>
            </header>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <main>
                <Outlet searchTerm={searchTerm}/>
            </main>
        </>
    )
}

export default RootLayout;