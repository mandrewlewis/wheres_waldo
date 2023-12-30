import React, {useState} from 'react'
import Waldo from '../../assets/images/waldo.jpg'
import Timer from "./Timer";
import Frame from "./Frame";
import {Link} from "react-router-dom";
import WinModal from "./WinModal";

export default function Game() {
    const [frame, setFrame] = useState(null)
    const [time, setTime] = useState(0)
    const [playing, setPlaying] = useState(true)

    function moveFrame(e) {
        normX = (e.clientX / window.innerWidth)
        normY = (e.clientY / window.innerHeight)
        setFrame([normX,normY])
    }

    function clearFrame() {
        setFrame(null)
    }

    function checkFrame() {
        if ((frame[0] >= .763 && frame[0] <= .815) && (frame[0] >= .260 && frame[1] <= .356)) {
            setPlaying(false)
        }
        else { setTime(count => count + 1000) }
        setFrame(null)
    }

    return (
        <div className={'flex flex-col items-center'}>
            <div>
                <h1 className={'flex justify-center p-4 text-3xl font-bold'}>Can you find Waldo?</h1>
                <Timer time={time} setTime={setTime} playing={playing}/>
            </div>
            <Link to={'/'} className={'absolute right-[10px] top-[10px] text-blue-600'}>I give up!</Link>
            <img src={Waldo} alt="waldo" onClick={moveFrame} draggable={'false'}/>
            {frame && <Frame frame={frame} clearFrame={clearFrame} checkFrame={checkFrame}/>}
            {!playing && <WinModal time={time}/>}
        </div>
    )
}
