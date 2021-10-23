import {
    Container,
    Item,
    Image,
    Anchor
} from './project.styles';  

import { projects } from '../../fixtures/projects';

import { GitHub } from '../../assets/Icons/GitHub';

export const Project = () => {
    return (
        <Container>
            {
                projects.map(({ title, href, img }) => (
                    <Item key={title} title={{title}}>
                        <Image src={img} />
                        <Anchor href={href} ><GitHub width="2rem" fill="#000" /></Anchor>
                    </Item> 
                ))
            }
        </Container>
    )
}
