import React from 'react'


const LeftAside = ({toggle, setToggle}) => {


    const buttonHandler = () => {
        setToggle(!toggle);
    };
    return (
        <div className={toggle ? 'hidden' : ''}>
            <div className="flex-col">
                <div className="flex">
                    <button className="bg-gray-400 text-white mt-10 ml-10 rounded-md p-3" onClick={buttonHandler}>
                        Search for places
                    </button>
                </div>
                <div className="flex flex-col justify-start items-center h-full">
                    {/* image */}
                    <img src='https://www.metaweather.com/static/img/weather/sn.svg'
                        alt=""
                        width= '150px'
                        height='150px'
                    />

                    <p>
                        <span className="font-extrabold text-white text-7xl ">26</span>
                        <span className=" text-white text-7xl">°C</span>
                    </p>

                    <p className="text-gray-50 font-bold mt-10 text-3xl">Clear</p>
                    <p className="text-gray-50 font-bold mt-10 text-2xl">Today</p>

                    <div className=" flex justify-center items-center">
                        <p className="text-gray-200 font-bold text-2xl mt-12">
                            <i class='material-icons'>location_on</i> London
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LeftAside
