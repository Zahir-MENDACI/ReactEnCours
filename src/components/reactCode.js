
import React from "react"

const QRCode = require("qrcode.react")

const ReactCode = props => {
    return (
        <div>
            <QRCode value={ "https://www.github.com/AnthonyParis/ReactEnCours?ID=" + props.id }/>
        </div>
    )
}

export default ReactCode
