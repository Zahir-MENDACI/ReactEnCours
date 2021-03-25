
import React from "react"

import "react-big-calendar/lib/css/react-big-calendar.css"

const { Calendar, momentLocalizer } = require("react-big-calendar")
const moment = require("moment")

const ReactCalendar = props => {
    const localizer = momentLocalizer(moment)

    const events = [{
        id : 0,
        title : "Welcome",
        start : new Date(2021, 3, 25),
        end : new Date(2021, 3, 26),
    }]

    return (
        <div>
            <Calendar localizer={ localizer } events={ events }/>
        </div>
    )
}

export default ReactCalendar
