import React from 'react';
import Separator from '../../Common/separater/Separator';
import { ProjectData } from '../../Data/projects';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';
const Projects = () => {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Separator></Separator>
            <label className='section-title'>My Projects</label>
            <div>
                {
                    data.map((project) => {
                        return <ProjectCard key={project.id} project={project}></ProjectCard>
                    })
                }
            </div>
        </div>
    );
};

export default Projects;