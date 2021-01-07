import React from 'react'

const Layout = ({children}) => {
    return (
        <div>
            <div className='h-screen overflow-x-hidden'>
                <main className="mx-auto h-full">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
