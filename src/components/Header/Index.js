import { Navigation } from '../Navigation/Index';
import { ButtonDarkMode } from '../ButtonDarkMode/Index';

import { Logo } from '../../assets/Icons/Logo';

import { Menu } from '../../assets/Icons/Menu';

// Styles
import {
    Container,
    Wrapper,
    Amborguesa
} from './header.styles';

const handleMenu = () => {
    const nav = document.querySelector('#nav');

    nav.classList.toggle("active");

}

export const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo width="3.3rem" />
                <Navigation />
                <ButtonDarkMode />
                <Amborguesa onClick={handleMenu} id="menu" ><Menu fill="#000" width="1.5rem" /></Amborguesa>
            </Wrapper>
        </Container>
    )
}
