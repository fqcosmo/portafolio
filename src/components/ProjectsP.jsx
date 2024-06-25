import React from 'react'
import CardWorks from './CardWorks'

const ProjectsP = () => {
  return (
    <section className='projects'>
        <h5>Galería de Proyectos</h5>
        <div className='card_items'>
        <CardWorks/>
        <CardWorks/>
        <CardWorks/>
        <CardWorks/>
        <CardWorks/>
        <CardWorks/>
        </div>
    </section>
  )
}

export default ProjectsP