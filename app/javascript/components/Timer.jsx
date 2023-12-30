import React from "react"
import {useState, useEffect} from "react"
import {formatTime} from "../helpers";

export default function Timer({time, setTime, playing}) {

    useEffect(() => {
        let counter
        if (playing) {
            counter = setInterval(() => {
                setTime(count => count + 1)
            }, 10)
        }

        return () => { clearInterval(counter) }
    }, [playing]);

    const [displayMins, displaySecs, displayCsecs] = formatTime(time)

    return (
        <div className="timer font-mono flex justify-center text-xl">
            <span>{displayMins}</span>:
            <span>{displaySecs}</span>:
            <span>{displayCsecs}</span>
        </div>
    )
}
