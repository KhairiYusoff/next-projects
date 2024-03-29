"use client"

import React, { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const handleSubmit = () => {

    }
    return (
        <form onSubmit={handleSubmit} className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'>
            <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />

            </div>
        </form>
    )
}

export default SearchBar