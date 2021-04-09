import React from "react"
import QRCode from 'qrcode.react'

 const Code = () => {
     return (
         <div>
             <QRCode value={ "https://signature-app-react.herokuapp.com//signature/"} size={300}/>
         </div>
     )
 }

 export default Code
