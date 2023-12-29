import React, {useState} from 'react'
import Waldo from '../../assets/images/waldo.jpg'
import Timer from "./Timer";
import Frame from "./Frame";

export default function Game() {
    const [frame, setFrame] = useState(null)
    const [time, setTime] = useState(0)
    const [playing, setPlaying] = useState(true)

    function moveFrame(e) {
        setFrame([e.pageX,e.pageY])
    }

    function clearFrame() {
        setFrame(null)
    }

    function checkFrame() { // [1200, 185]
        if ((frame[0] >= 1160 && frame[0] <= 1240) && (frame[0] >= 145 && frame[1] <= 225)) {
            setPlaying(false)
        }
        else { setTime(count => count + 1000) }
        setFrame(null)
    }

    return (
        <div>
            <h1 className={'flex justify-center p-4 text-3xl font-bold'}>Can you find Waldo?</h1>
            <Timer time={time} setTime={setTime} playing={playing}/>
            <img src={Waldo} alt="waldo" onClick={moveFrame}/>
            {frame && <Frame frame={frame} clearFrame={clearFrame} checkFrame={checkFrame}/>}
        </div>
    )
}
