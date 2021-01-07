import React from 'react'

const Search = ({toggle, setToggle}) => {

    const buttonHandler = () =>{
        setToggle(!toggle)
    };

    return (
        <div className={!toggle ? 'hidden' : ''}>
            <div className='flex justify-end m-3'>
                <button onClick={buttonHandler} className='text-white text-xl focu:outline-none'>
                    &#10005;
                </button>
            </div> 
            <div className="flex items-baseline justify-center">
                <input 
                    type="text" 
                    name="places" 
                    id="places" 
                    placeholder="Search for Places"  
                    className="mt-10 ml-2 p-3 w-auto focus:outline-none focus:ring focus:border-red-100"
                />
                <button className="bg-blue-200 p-2 mx-2 rounded-md focus:outline-none 
                    focus:ring-2 focus:ring-purple-200 focus:ring-opacity-50 hover:bg-gray-600 hover:text-white 
                    transition duration-300 ease-in-out text-black"
                >
                        Search
            </button>
            </div>
        </div>
    )
}

export default Search;
 