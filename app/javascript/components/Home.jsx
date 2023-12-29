import React, {useState} from 'react'
import Waldo from '../../assets/images/waldo.jpg'
import Timer from "./Timer";
import Frame from "./Frame";

export default function Home() {
    const [frame, setFrame] = useState(null)

    function moveFrame(e) {
        setFrame([e.pageX,e.pageY])
    }

    return (
        <div>
            <h1 className={'flex justify-center p-4 text-3xl font-bold'}>Can you find Waldo?</h1>
            <Timer />
            <img src={Waldo} alt="waldo" onClick={moveFrame}/>
            {frame && <Frame frame={frame} />}
        </div>
    )
}
