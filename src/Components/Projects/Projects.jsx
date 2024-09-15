import React from 'react'
import ProjectsCSS from './Projects.module.css';

function Projects() {
  return (
    <>
    <section id="projects">
            <div className={ProjectsCSS.project}>
                <h2>
                    Things I've Done!
                </h2>
                <p>A collect of projects</p>
                <div className={ProjectsCSS.project_cards}>
                    <div className={ProjectsCSS.project_card}>
                        <h3>Tube-Checker</h3>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Modi veritatis possimus recusandae odit, quod
              quisquam tenetur repellat repellendus! Aliquam magnam
              praesentium labore sint ad asperiores odit hic fugiat
              impedit aliquid!</p>
              <a href="">GitHub</a>
              <a href="">Tube-Checker</a>
                    </div>
                    <div className={ProjectsCSS.project_card}>
                        <h3>Tube-Checker</h3>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Modi veritatis possimus recusandae odit, quod
              quisquam tenetur repellat repellendus! Aliquam magnam
              praesentium labore sint ad asperiores odit hic fugiat
              impedit aliquid!</p>
              <a href="">GitHub</a>
              <a href="">Tube-Checker</a>
                    </div>
                    <div className={ProjectsCSS.project_card}>
                        <h3>Tube-Checker</h3>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Modi veritatis possimus recusandae odit, quod
              quisquam tenetur repellat repellendus! Aliquam magnam
              praesentium labore sint ad asperiores odit hic fugiat
              impedit aliquid!</p>
              <a href="">GitHub</a>
              <a href="">Tube-Checker</a>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default Projects