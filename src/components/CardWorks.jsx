import React from 'react'
import project_title from '../assets/project.png'

const CardWorks = () => {
  return (
    <article className='items'>
    <div className='card'>
      <h4>Titulo del Proyecto</h4>
      <hr />
    </div>
    <div className='image_container'>
      <img src={project_title}alt="home" />
    </div>
    <div className='icons'>
    <i class="fa-brands fa-github"></i>
    <i class="fa-solid fa-code"></i>
    </div>
    <p>Read More</p>
  </article>
  )
}

export default CardWorks