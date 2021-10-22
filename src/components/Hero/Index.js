import { Circle } from '../Circle/Index';  
import { Socials } from '../Socials/Index';

import heroImg from '../../assets/img/heroImg.jpg';  

import { 
    Container,
    Wrapper,
    Image,
    Content,
    Title,
    Subtitle
} from './hero.styles';

export const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Image src={heroImg} alt="imagen de Nelson" />
                <Content>
                    <Title>Nelson Alarcon</Title>
                    <Subtitle>Frontend Developer</Subtitle>
                    <Socials />
                </Content>
                <Circle />
            </Wrapper>
        </Container>
    )
}
