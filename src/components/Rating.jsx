import { useState } from 'react'
import star from '../images/icon-star.svg'

export default function Rating() {
    const [rating, setRating] = useState('')

    return (
        <main className="container">
            <section className='banner'>
                <div className='circle-container'>
                    <img src={star} alt="star logo" />
                </div>
            </section>
            <article>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </article>
            <section className='rating-container'>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '1' ? 'active btn-circle' : 'btn-circle'} name='1'>1</button>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '2' ? 'active btn-circle' : 'btn-circle'} name='2'>2</button>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '3' ? 'active btn-circle' : 'btn-circle'
                } name='3' > 3</button >
                <button onClick={(e) => setRating(e.target.name)} className={rating === '4' ? 'active btn-circle' : 'btn-circle'} name='4' > 4</button>
                <button onClick={(e) => setRating(e.target.name)} className={rating === '5' ? 'active btn-circle' : 'btn-circle'} name='5' > 5</button>
            </section>
            <section className='submit'>
                <button>Submit</button>
            </section>
        </main>
    )
}