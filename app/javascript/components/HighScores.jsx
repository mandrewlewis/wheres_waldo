import React from 'react'
import {formatTime} from "../helpers";

export default function HighScores({ scores }) {
    return (
        <div className={'flex flex-col items-center gap-6 mt-8'}>
            <h2 className={'text-2xl'}>🏆 High Scores 🏆</h2>
            <table className={'text-center'}>
                <thead>
                    <tr>
                        <th className={'w-[130px]'}>Name</th>
                        <th className={'w-[130px]'}>Time</th>
                    </tr>
                </thead>
                <tbody className={'font-mono'}>
                    {scores && scores.map(score => {
                        [min, sec, csec] = formatTime(score.time)
                        return (
                            <tr key={score.id}>
                                <td>{score.name}</td>
                                <td>{min}:{sec}:{csec}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
}
