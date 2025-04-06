import React from 'react'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const BookCard = (props) => {
    const [bookStat, setBookStat] = useState('Not Read')

    const readBook = () => {
        setBookStat('Read')
    }
    useEffect(
        () => {
           readBook()
        }, [bookStat]
    )
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.author}</p>
            <button className="btn btn-primary" onClick={readBook}>Go somewhere</button>
            </div>
        </div>
    </div>
  )
}

export default BookCard