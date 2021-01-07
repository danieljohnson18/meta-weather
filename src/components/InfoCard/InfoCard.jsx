import React from 'react'

const InfoCard = ({title}) => {
    return (
        <div className="bg-blue-300 rounded-lg px-auto py-4">
            <div className="flex-col text-center">
                <p>{title}</p>
                <div className="flex justify-center items-center p-3">
                    <span className="text-5xl font-bold">
                        12
                    </span>
                    <span>
                        <sub className="ml-2 white">miles</sub>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
