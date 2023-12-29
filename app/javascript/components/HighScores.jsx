import React from 'react'

export default function HighScores({ scores }) {
    scores = [
        { 'name': 'Andrew', 'score': '01:12:44' },
        { 'name': 'Haley', 'score': '00:45:87' }
    ]

    return (
        <div className={'flex flex-col items-center gap-6 mt-8'}>
            <h2 className={'text-2xl'}>🏆 High Scores 🏆</h2>
            <table className={'w-[200px] text-center'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {scores && scores.map(score => {
                        return (
                            <tr key={score['name']}>
                                <td>{score['name']}</td>
                                <td>{score['score']}</td>
                            </tr>
                        )})}
                </tbody>
            </table>
        </div>
    )
}
