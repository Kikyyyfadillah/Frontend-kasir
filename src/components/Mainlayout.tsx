import React from 'react'
import MainHeader from "./MainHeader"

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-slate-100 w-full h-screen flex flex-row'>
            <MainHeader />
            {children}
        </div>
    );
};

export default Mainlayout;