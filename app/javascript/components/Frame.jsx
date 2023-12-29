import React, {useEffect, useState} from 'react'

export default function Frame({frame, clearFrame, checkFrame}) {
    const className = `absolute border-4 border-green-400 bg-green-400 bg-opacity-40 shadow-2xl w-[80px] h-[80px]`
    const left = (frame[0] * window.innerWidth) - 40
    const top = (frame[1] * window.innerHeight) - 40

    return (
        <>
            <div className={className} style={{left:`${left}px`, top:`${top}px`}}>
            </div>
            <div className={'absolute flex justify-around bg-gray-800 bg-opacity-80 rounded-b-lg w-[80px]'}
                 style={{left:`${left}px`, top:`${top + 80}px`}}>
                <button onClick={checkFrame}>✅</button>
                <button onClick={clearFrame}>❌</button>
            </div>
        </>
    )
}
