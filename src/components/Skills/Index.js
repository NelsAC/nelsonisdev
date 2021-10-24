import { Technologies } from '../Technologies/Index';

import {
    Container,
    Wrapper,
    Title,
    Span
} from './skills.styles';

export const Skills = ({ mode }) => {
    return (
        <Container id="skills" className={ mode && 'dark' }>
            <Wrapper>
                <Title>My <Span>Skills</Span></Title>
                <Technologies mode={mode} />
            </Wrapper>
        </Container>
    )
}
