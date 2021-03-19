
import React from "react"

import ReactCode from "./components/reactCode"
import ReactPad from "./components/reactPad"

import "./App.css"

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ReactCode id="AnthonyParis"/>
                <ReactPad/>
            </header>
        </div>
    )
}
