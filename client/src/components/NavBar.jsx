
import React, { useState } from 'react'


function NavBar() {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <>
            <nav className=" border-gray-200 bg-gray-900">

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <span className=" cursor-pointer  self-center text-2xl font-semibold whitespace-nowrap text-white">
                    <a onClick={() => window.location.href = "/"} >Lista de produtos</a>
                    </span>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                        
                           
                            <li>
                                <a onClick={() => window.location.href = "/cadastro"} className= "cursor-pointer block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-white hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Adicionar items</a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default NavBar;
