import React from 'react'
import { Link } from 'react-router-dom'
import useReview from '../../Hook/useReview'
import Card from '../Review/Card/Card'
import './Home.css'
import product from './images/r15.webp'
function Home() {
    const [reviews, setReview] = useReview()
    return (
        <section className='container'>
            <div className="header">
                <div className='header-content '>
                    <h1>YAMAHA R15 V4</h1>
                    <h2>Yamaha R15 V4 Racing Blue is the base variant in the R15 V4 lineup and is priced at Rs. 1.74 Lakh. This Racing Blue variant comes with an engine putting out and of max power and max torque respectively.</h2>
                    <button className='header-btn'>Live Demo</button>
                </div>
                <div className='image'>
                    <img src={product} alt="" />
                </div>
            </div>
            {/* Review Section Start  */}

            <div className="reviews container">
                <h1 className='review-heading'>Customer Reviews</h1>
                <div className="review">

                    {
                        reviews.slice(0, 3).map(review => {
                            return (
                                <Card key={review.id} review={review} />
                            )
                        })
                    }


                </div>
                <Link className='btn btn-primary  mt-5' to="/review">See All Reviews</Link>
            </div>
        </section>
    )
}

export default Home