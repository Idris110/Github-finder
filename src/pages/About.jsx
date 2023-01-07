import React from 'react'

function About() {
    return (
        <div className="container px-4 lg:mx-auto md:mx-auto xl:mx-auto">
            <h2 className='text-4xl mb-4'>Github Finder</h2>
            <p className='mb-4 text-xl font-light'>
                A React app to search GitHub profiles and see profile details.
                <br />
                To find more information
                <a className='text-blue-700' href='https://github.com/idris110/Github-finder'>
                    {' '}
                    Github repository
                </a>{' '}
                by
                <strong>
                    <a href='https://github.com/idris110'> Idris Ratlamwala</a>
                </strong>
                .
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
        </div>
    )
}

export default About