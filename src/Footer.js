import React from 'react'
import { ReactSVG } from 'react-svg'

function Footer() {
    return (
        <ReactSVG src="./wave.svg" style={{ position: "fixed", bottom: -10, width: "100vw" }} ></ReactSVG>
    )
}

export default Footer
