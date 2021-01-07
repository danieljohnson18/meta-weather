import React from 'react'

const CardStatus = () => {
    return (
        <div className="bg-blue-300 rounded-lg px-auto py-8">
            <div className="flex-col">
                <p className="text-center text-white">Wind Status</p>
                <div className="flex justify-center items-center mt-5">
                    <span className="text-5xl font-bold">
                        5
                        <sub className="font-lighter ml-1">mph</sub>
                    </span>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <i className="material-icons">navigation</i>
                    <span className="text-gray-100">N</span>
                </div>
            </div>
        </div>
    )
}

export default CardStatus
