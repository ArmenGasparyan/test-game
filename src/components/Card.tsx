import React, { useState } from 'react'
import './Card.css'

export const Card = ({ id, value, isOpened, onClick, done }: { id: number, value: number, isOpened: boolean, onClick(): void, done: boolean }) => {
    if (done) {
        return <h1>DONE</h1>
    }
    if (!isOpened) {
       return  <div className='card-opened' onClick={onClick}>?</div>
    }
  return (
    <div className='card-closed' onClick={onClick}>{value}</div>
  )
}
