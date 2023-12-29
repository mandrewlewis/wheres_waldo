import React, {useState} from 'react'
import Waldo from '../../assets/images/waldo.jpg'
import Timer from "./Timer";

export default function Home() {
    return (
        <div>
            <h1 className={'flex justify-center p-4 text-3xl font-bold'}>Can you find Waldo?</h1>
            <img src={Waldo} alt="waldo" />
            <Timer />
        </div>
    )
}
