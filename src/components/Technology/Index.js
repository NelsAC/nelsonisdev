import {
    Container,
    Anchor,
    Description
} from './technology.styles';

export const Technology = ({ title, Icon, color, href}) => {
    return (
        <Anchor href={href} >
            <Container>
                <Icon fill={color} />
                <Description>{title}</Description>
            </Container>
        </Anchor>
    )
}
