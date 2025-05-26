import React from 'react';
import { Collapse } from 'antd';


const { Panel } = Collapse;

const projects = [
    {
        key: '1',
        label: "ColabLearn",
        projectLogoUrl: "../../images/colabLearnLogo.jpg",
        projectDescription: `ColabLearn is an innovative e-learning platform dedicated
                            to delivering cutting-edge tech courses and programs. Our 
                            ongoing work leverages the latest research in learning science 
                            and learning engineering. We are creating content that goes beyond 
                            mere information dissemination, focusing on fostering deep understanding 
                            and knowledge creation, particularly in an era where AI solutions are abundant 
                            but true learning and knowledge acquisition remain critical.`,
        projectLink: "www.youtube.com/@ColabLearn",
    }
];

const Project = () => (
    <Collapse accordion>
        {projects.map(project => (
            <Panel header={project.label} key={project.key}>
                <p>{project.projectDescription}</p>
                {/* You can include the project logo and link if needed */}
                { <img src={project.projectLogoUrl} alt={project.label} />}
                {<a href={project.projectLink} target="_blank" rel="noopener noreferrer">View More</a>}
            </Panel>
        ))}
    </Collapse>
);

export default Project;
