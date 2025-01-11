import React from 'react'

function Counter({ days, hours, minutes, seconds }) {
    return (
        <div>
        <h1>Sales countdown timer</h1>
        <h2>Offer Ends in</h2>
            <table>
                <tbody>
                    <tr>
                        <th>{days}</th>
                        <th>{hours}</th>
                        <th>{minutes}</th>
                        <th>{seconds}</th>
                    </tr>
                    <tr>
                        <td>Days</td>
                        <td>Hours</td>
                        <td>Minutes</td>
                        <td>Seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Counter
