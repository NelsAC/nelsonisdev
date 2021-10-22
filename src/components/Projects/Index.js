import { Project } from '../Project/Index';
import {
    Container,
    Wrapper,
    Title,
    Span
} from './projects.styles';

export const Projects = () => {
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Recent <Span>Projects</Span></Title>
                <Project /> 
            </Wrapper>
        </Container>
    )
}
