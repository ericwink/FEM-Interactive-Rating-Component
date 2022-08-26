import { useState } from 'react'
import star from '../images/icon-star.svg'

export default function Rating({ rating, setRating, setSubmit }) {

    function handleSubmit() {
        if (!rating) return alert('Please select a rating')
        setSubmit(true)
    }

    return (
        <main className="container flex">
            <section className='banner flex flex-1 align-center'>
                <div className='circle-container flex'>
                    <img src={star} alt="star logo" />
                </div>
            </section>
            <article className='flex flex-1'>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </article>
            <section className='rating-container flex flex-1'>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '1' ? 'active btn-circle flex' : 'btn-circle flex'} name='1'>1</button>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '2' ? 'active btn-circle flex' : 'btn-circle flex'} name='2'>2</button>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '3' ? 'active btn-circle flex' : 'btn-circle flex'
                } name='3' > 3</button >
                <button onClick={(e) => setRating(e.target.name)} className={rating === '4' ? 'active btn-circle flex' : 'btn-circle flex'} name='4' > 4</button>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '5' ? 'active btn-circle flex' : 'btn-circle flex'} name='5' > 5</button>
            </section>
            <section className='submit flex flex-1 align-center'>
                <button onClick={handleSubmit}>Submit</button>
            </section>
        </main>
    )
}