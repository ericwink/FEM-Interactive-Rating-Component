import thankyouimg from '../images/illustration-thank-you.svg'

export default function ThankYou({ rating }) {

    return (
        <main className="container flex text-align-center">
            <section className='flex flex-2 justify-center'>
                <img src={thankyouimg} alt="illustration of tablet with credit card and receipt" />
            </section>
            <section className='flex flex-1 justify-center'>
                <p className='confirmation'>You selected {rating} out of 5</p>
            </section>
            <article className='flex flex-2'>
                <h1 className='mb-10'>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </article>
        </main>
    )
}