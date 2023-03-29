import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import ImageIcon from '@material-ui/icons/Image';
import './ProjectContainer.css'
import {useGallery} from "../../useGallery";

const ProjectContainer = ({project}) => {
    const {openGallery} = useGallery()
    return (
    <div className='project'>
        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
            <ul className='project__stack'>
                {project.stack.map((item) => (
                    <li key={uniqid()} className='project__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <GitHubIcon/>
            </a>
        )}
        {project.images && (
            <a
                onClick={()=>openGallery(project)}
                aria-label='live preview'
                className='link link--icon'
            >
                <ImageIcon/>
            </a>

        )}
        {project.livePreview && (
            <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <LaunchIcon/>
            </a>
        )}


    </div>
)
}
export default ProjectContainer
