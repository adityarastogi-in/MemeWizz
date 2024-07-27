import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="../images/logo.png" 
                className="header--image"
            />
            <h1 className="header--title">MemeWizz</h1>
        </header>
    )
}