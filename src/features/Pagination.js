import React from 'react'

export default function Pagination({info, onNext = () =>{}, onPrev = () =>{}}) {
console.log({info})
    const {count, next, prev} = info || {} ;

    
    return (
        <div>
            <span>La cantidad de episodios es: {count}</span>
            <button onClick = {() => onPrev(prev)} >Previous</button>
            <button onClick = {() => onNext(next)} >Next</button>
        </div>
    )
}
