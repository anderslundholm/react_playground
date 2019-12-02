import React from 'react'

interface HeaderProps {
    text?: string
}

const Header: React.FC<HeaderProps> = (props) => {
    React.useEffect(() => {
        alert(document.querySelector("#myHeader"))
    })
    return (
    <h1 id="myHeader">Hello {props.text}</h1>
    )
}

Header.defaultProps = {
    text: "People"
}

export default Header