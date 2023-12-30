import React from 'react'
import Timer from "./Timer";
import {Link} from "react-router-dom";

export default function WinModal({time}) {
    return (
        <div className={'absolute w-[100%] h-[100%] backdrop-blur-sm flex justify-center items-center'}>
            <div className={'bg-white rounded-3xl w-[550px] h-[350px] shadow-2xl flex flex-col items-center justify-center gap-8'}>
                <h1 className={'text-3xl font-bold'}>You win!</h1>
                <Timer time={time} />

                <div className={'flex flex-col items-center gap-2'}>
                    <h2 className={'text-md'}>Record your time on the leaderboards:</h2>
                    <div className={'flex gap-4'}>
                        <input type="text" maxLength={13} className={'rounded-md h-8 w-40 font-mono'}></input>
                        <Link to={'/'} className={'bg-blue-500 text-white rounded-md px-4 flex justify-center items-center'}>
                            <button>Save</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
