import {
    Container,
    Card,
    Title,
    Content,
    Link
} from './project.styles';

import { GitHub } from '../../assets/Icons/GitHub';

import { projects } from '../../fixtures/projects'
import { ProjectTech } from '../ProjectTech/Index';

export const Project = () => {
    return (
        <Container>
            {
                projects.map(({title, href, img, tech}) => (
                    <Card theme={{img}} key={title}>
                        <Content>
                            <Title>{title}</Title>
                            <ProjectTech tech={tech} />
                        </Content>
                        <Link target="_blank" href={href}><GitHub /></Link>
                    </Card>
                ))
            }
        </Container>
    )
}
