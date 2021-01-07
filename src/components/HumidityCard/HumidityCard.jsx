import React from 'react'

const HumidityCard = () => {
    return (
        <div className="bg-blue-300 rounded-lg px-auto py-8">
            <div className="flex-col">
                <p className="text-center text-white">HumidityCard</p>
                <div className="flex justify-center items-center mt-5">
                    <span className="text-5xl font-bold">
                        56
                        <sub className="font-lighter ml-1">%</sub>
                    </span>
                </div>
               <div className="flex justify-center items-center mt-10">
                   <div className="w-9/12 h-2 bg-white rounded-full mt-2">
                     <div className="bg-yellow-300 h-2 w-6 rounded-full"></div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default HumidityCard
