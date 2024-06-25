import React from 'react'
import logohome from '../assets/home.svg'

const HomeP = () => {
    return (
        <section className="home">
            <div className='desc'>
            <h2>Desarrollador FullStack</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora velit ea est sed earum id veniam eius sequi, repudiandae ipsa magni eligendi, architecto officia? Quae consequuntur soluta vero quibusdam.
            </p>
            <button className='btn'>View Project <i class="fa-brands fa-github"></i></button>
            </div>
            <div className='image'>
            <img src={logohome} alt="home" />
            </div>
        </section>
    )
}

export default HomeP