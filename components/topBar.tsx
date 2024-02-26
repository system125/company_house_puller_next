import React, { useCallback } from "react"
import SearchBox from "./searchTextBox"
/*
* Returns TopBar functional Components 
* Consists of Header  search text box and so on
*/



const Header = () => {
    return (
        <div className="w-[fit]" >
            <header>
                <h1 className="text-2xl text-white text-right hero-content">Company House Puller</h1>
            </header>
        </div>
    )
}



const TopBar = () => {
    
    return (
        <div className="flex sm:flex-row flex-col w-[100%] h-fit sticky top-0 navbar bg-slate-600">
            <Header/>
            <SearchBox />
        </div>
    )
}

export default TopBar;