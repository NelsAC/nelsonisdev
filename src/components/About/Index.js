import {
    Container,
    Wrapper,
    Content,
    Subtitle,
    Paragraph,
    Title,
    Span
} from './about.styles';

export const About = ({ mode }) => {
    return (
        <Container id="about" className={ mode && 'dark' }>
            <Wrapper>
                <Title>About <Span>Me</Span></Title>
                <Content>
                    <Subtitle>Hola mundo, me llamo Nelson</Subtitle>
                    <Paragraph>Me apasionan las tecnologías web, principalmente por JavaScript. Una de mis mayores motivaciones es aprender. Actualmente estoy tomando cursos en plataformas de educación como Youtube, Platzi y Udemy.</Paragraph>
                </Content>
            </Wrapper>
        </Container>
    )
}
