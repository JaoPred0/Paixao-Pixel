import React from 'react'
import ScrollVelocity from './tools/ScrollVelocity'

const TextAction = () => {
    return (
        <div className=''>
            <ScrollVelocity
                texts={['Paixão', 'Pixel']}
                className="custom-scroll-text text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 tracking-wider"
            />

        </div>
    )
}

export default TextAction
