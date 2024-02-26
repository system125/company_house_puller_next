'use client'
import {atom,useAtom, useAtomValue} from "jotai"
import React from "react"
import { useCallback,useState} from "react"

const searchText = atom("")
const searchById = atom(false)

const activeBtnClass = "btn btn-primary"
const inactiveBtnClass = "btn btn-primary btn-outline"
const searchByNameClass = atom((get) => 
    !get(searchById)? activeBtnClass:inactiveBtnClass
)

const searchByIdClass = atom((get) => 
    get(searchById)? activeBtnClass:inactiveBtnClass
)

// -- Client rendered search text box and selection if it is by id or number
const SearchBox = () => {
    // -- Atom for search text box
    const [_searchText,setSearchText] = useAtom(searchText)
    const [_searchById,setSearchById] = useAtom(searchById)
    
    const _searchByNameClass = useAtomValue(searchByNameClass)
    const _searchByIdClass = useAtomValue(searchByIdClass)

    const handleInput = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setSearchText(e.target?.value)
    },[])

    const searchTxTBox = (
        <div className="md:flex-1 w-[100%]">
            <input 
                type="text"
                className="flex-1 justify-self-center rounded-lg input-sm input-bordered"  
                value={_searchText}
                onChange={handleInput}
            />
        </div>

    )

    // -- Search Box toggle
    const searchToggle = (
        <div className="w-[100%] md:w-[fit] flex flex-row justify-center md:justify-end pt-4">
            <button 
                className={_searchByNameClass}
                onClick={() => setSearchById(false)}>
                    Search By Name
                </button>
            <button 
                className={_searchByIdClass}
                onClick={() => setSearchById(true)}
                >
                Search By Id
            </button>
        </div>
    )


    return (
        <div className="w-100%  sm:flex-1 flex flex-col md:flex-row px-4 pb-4">
        {searchTxTBox}
        
        {searchToggle}

        <button className="bg-green-950 hover:bg-green-600 active:bg-green-300 active:scale-75 "> Test Button</button>
        </div>
    )
}

export default SearchBox