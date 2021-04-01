import React from "react"
import QRCode from 'qrcode.react'

 const Code = () => {
     return (
         <div>
             <QRCode value={ "http://192.168.1.91:3000/signature/"} size={300}/>
         </div>
     )
 }

 export default Code
