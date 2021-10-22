import { Container } from "./projectTech.styles"

export const ProjectTech = ({ tech }) => {
    return (
        <Container>
            {
                tech.map(Icon => <Icon width="2.5rem" />)
            }
        </Container>
    )
}
