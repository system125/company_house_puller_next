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
    const [searchTextst,setSearchText] = useAtom(searchText)
    const [_searchById,setSearchById] = useAtom(searchById)
    
    const _searchByNameClass = useAtomValue(searchByNameClass)
    const _searchByIdClass = useAtomValue(searchByIdClass)

    const handleInput = useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setSearchText(e.target?.value)
    },[])


    const searchToggle = (
        <div className="w-[100%] flex flex-row justify-center pt-4">
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
        <div className="w-100% flex flex-col px-4 pb-4">
            <input 
            type="text"
             className="w-[100%] rounded-lg input-sm input-bordered"  
             value={searchTextst} 
             onChange={handleInput}
        />
        {searchToggle}
        </div>
    )
}

export default SearchBox