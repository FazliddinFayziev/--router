import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='main'>
            <div>
                <h2>Everything is good</h2>
                <Link to={'/login'} className='button'>
                    <button>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Home