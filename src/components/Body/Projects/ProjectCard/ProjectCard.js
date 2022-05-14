import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectCard.css'
const ProjectCard = ({ project }) => {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <div className='project-links'>
                    {
                        project.demo && (
                            <a className='project-link' href={project.demo} target="_blank">
                                <div className='link-button'>
                                    <FontAwesomeIcon icon={faEarthAmerica} className='special-icon' />
                                    Demo
                                </div>
                            </a>
                        )
                    }
                    {
                        project.github && (
                            <a className='project-link' href={project.github} target="_blank">
                                <div className='link-button'>
                                    <i class="devicon-github-original colored"></i>
                                    Github
                                </div>
                            </a>
                        )
                    }
                </div>

                <p>{project.about}</p>
                <div className='project-tags'>
                    {
                        project.tags.map((tag) => {
                            return (
                                <label className='tags'>{tag}</label>
                            )
                        })
                    }
                </div>

            </div>
            <img src={[project.image]} alt="" className='project-photo' />
        </div>
    );
};

export default ProjectCard;