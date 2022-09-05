import React from 'react'
import './Pagination.css'

const Pagination = () => {

    const totalPages = 58;
    const pages =[]

    for(let i=1; i===totalPages; i++){
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(page => {
                    <button>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination
