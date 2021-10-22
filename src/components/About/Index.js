import {
    Container,
    Wrapper,
    Content,
    Subtitle,
    Paragraph,
    Title,
    Span
} from './about.styles';

export const About = () => {
    return (
        <Container id="about">
            <Wrapper>
                <Title>About <Span>Me</Span></Title>
                <Content>
                    <Subtitle>Hi there, I'm Nelson</Subtitle>
                    <Paragraph>I am passionate about web technologies, mainly because of React. I love JavaScript. One of my greatest motivations is to learn. I started programming since I was in school learning from YouTube videos and online education platforms like Platzi and Udemy</Paragraph>
                </Content>
            </Wrapper>
        </Container>
    )
}
