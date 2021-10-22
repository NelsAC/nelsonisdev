import { Technologies } from '../Technologies/Index';

import {
    Container,
    Wrapper,
    Title,
    Span
} from './skills.styles';

export const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>My <Span>Skills</Span></Title>
                <Technologies />
            </Wrapper>
        </Container>
    )
}
