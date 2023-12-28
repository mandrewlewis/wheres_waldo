import React from 'react'
import Waldo from '../../assets/images/waldo.jpg'

export default function Home() {
    return (
        <div>
            <h1 style={{display:'flex', justifyContent:'center'}}>Can you find Waldo?</h1>
            <img src={Waldo} alt="waldo" style={{width:'100%'}}/>
        </div>
    )
}
