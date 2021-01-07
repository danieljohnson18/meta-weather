import React from 'react'

const Card = () => {
    return (
        <div className="bg-blue-300 p-6 rounded-lg">
            <div className="flex-col">
                <p>2020-12-14</p>
                <div className="flex justify-center item-center">
                    <img src="https://www.metaweather.com/static/img/weather/lc.svg" alt="weather" width='50px' height='50px'/>
                </div>
            </div>
            <div className="flex justify-between">
                <span>22°C</span>
                <span>22°C</span>
            </div>
        </div>
    )
}

export default Card
