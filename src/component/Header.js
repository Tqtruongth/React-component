import React from 'react'

const Header = ()=> {
    const headerStyle = {
        background: 'black',
        color: '#ff0',
        textAlign: 'center',
        padding: '15px'
    }

    return(
        <div>
            <header style ={headerStyle}>
            <h1> Công Việc Cần Làm</h1>
            </header>

        </div>
    )
}
export default Header
