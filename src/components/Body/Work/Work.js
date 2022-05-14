import React from 'react';
import Separator from '../../Common/separater/Separator';
import { WorkData } from '../../Data/work';
import './Work.css';
import WorkCard from './WorkCard/WorkCard';


const Work = () => {
    const data = WorkData;
    return (
        <div className='work'>
            <Separator></Separator>
            <label className='section-title'>Work</label>
            <div className='work-list'>
                {
                    data.map((item) => {
                        return (
                            <WorkCard item={item}></WorkCard>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Work;