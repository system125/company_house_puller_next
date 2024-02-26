import React from "react"
import {atom,useAtom} from "jotai"

/*
* Returns TopBar functional Components 
* Consists of Header  search text box and so on
*/

const searchText = atom("")
const searchById = atom(false)

const Header = () => {
    return (
        <div className="w-[100%] " >
            <header>
                <h1>Company House Puller</h1>
            </header>
        </div>
    )
}

const TopBar = () => {
    
    return (
        <div className="flex flex-col w-[100%] h-fit">
            <Header></Header>
        </div>
    )
}

export default TopBar;