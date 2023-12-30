import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import HighScores from "./HighScores";

export default function Home() {
    const [scores, setScores] = useState(null)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch('/scores')
            .then(res=>res.json())
            .then(json=> {
                setScores(json)
                setFetching(false)
            })
    }, []);

    return (
        <div className={'flex flex-col items-center gap-8 mx-60'}>
            <h1 className={'text-5xl pt-8'}>
                Where's Waldo?
            </h1>
            <p className={'text-lg text-center'}>
                It's the game you know and love, so get ready to search for the candy cane striped, British chap hiding
                in the crowd. Simply click on the image to select an area, then click ✅ to confirm or ❌ to cancel
                your selection. Careful! Wrong guess add 10 seconds to your timer!
            </p>
            <Link to={'/game'}>
                <button className={'text-xl text-white bg-blue-500 px-2 py-0.5 rounded-md'}>Play</button>
            </Link>
            {!fetching && <HighScores scores={scores}/>}
        </div>
    )
}
