import React from "react"
import {useState, useEffect} from "react"

export default function Timer() {

    const [time, setTime] = useState(0)

    useEffect(() => {
        const key = setInterval(() => {
            setTime(count => count + 4)
        }, 40)

        return () => { clearInterval(key) }
    }, []);

    function formattedTime(centiseconds) {
        const mins = Math.floor(centiseconds / 6000)
        const secs = Math.floor((centiseconds - (mins * 6000)) / 100)
        const csecs = centiseconds - (mins * 6000) - (secs * 100)
        return [`${mins < 10 ? '0' : ''}${mins}`,
            `${secs < 10 ? '0' : ''}${secs}`,
            `${csecs < 10 ? '0' : ''}${csecs}`]
    }

    const [displayMins, displaySecs, displayCsecs] = formattedTime(time)

    return (
        <div className="timer font-mono flex justify-center text-xl">
            <span>{displayMins}</span>:
            <span>{displaySecs}</span>:
            <span>{displayCsecs}</span>
        </div>
    )
}
