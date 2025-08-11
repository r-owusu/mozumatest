import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='error-page'>
            <div className='error-inner'>
                <div className='error-head'>
                    <p>Home / <span>404 Error</span></p>
                </div>

                <div className='error-info'>
                    <h1>404 Not Found</h1>
                    <p>Your visited page not found. You may go to home page.</p>

                    <Link to='/'>Back to home page</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
