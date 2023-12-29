import React, {useEffect, useState} from 'react'

export default function Frame({frame, clearFrame, checkFrame}) {
    const className = `absolute border-4 border-green-400 bg-green-400 bg-opacity-40 shadow-2xl w-[80px] h-[80px]`
    const left = `${frame[0] - 40}px`
    const top = `${frame[1] - 40}px`

    return (
        <>
            <div className={className} style={{left:left, top:top}}>
            </div>
            <div className={'absolute flex justify-around bg-gray-800 bg-opacity-80 rounded-b-lg w-[80px]'}
                 style={{left:left, top:`${frame[1] + 40}px`}}>
                <button onClick={checkFrame}>✅</button>
                <button onClick={clearFrame}>❌</button>
            </div>
        </>
    )
}
