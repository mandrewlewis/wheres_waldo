import React, {useState} from 'react'
import Timer from "./Timer";
import {useNavigate} from "react-router-dom";

export default function WinModal({time}) {
    const navigator = useNavigate()
    const [name, setName] = useState('')

    function saveScore(x) {
        const token = document.querySelector('meta[name="csrf-token"]').content;
        const body = {
            name: name === '' ? 'Anonymous' : name,
            time: time
        }
        fetch('/scores', {
            method: "POST",
            headers: {
                "X-CSRF-token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res=>res.json())
            .then(json=>navigator('/'))
    }

    return (
        <div className={'absolute w-[100%] h-[100%] backdrop-blur-sm flex justify-center items-center'}>
            <div className={'bg-white rounded-3xl w-[550px] h-[350px] shadow-2xl flex flex-col items-center justify-center gap-8'}>
                <h1 className={'text-3xl font-bold'}>You win!</h1>
                <Timer time={time} />

                <div className={'flex flex-col items-center gap-2'}>
                    <h2 className={'text-md'}>Record your time on the leaderboards:</h2>
                    <div className={'flex gap-4'}>
                        <input value={name} onChange={(e)=>setName(e.target.value)}
                               type="text" maxLength={13} className={'rounded-md h-8 w-40 font-mono'}></input>
                        <button onClick={()=>saveScore(name)}
                                className={'bg-blue-500 text-white rounded-md px-4'}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
