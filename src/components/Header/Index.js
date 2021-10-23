import { Navigation } from '../Navigation/Index';
import { ButtonDarkMode } from '../ButtonDarkMode/Index';

import Logo from '../../assets/img/Logo';

// Styles
import {
    Container,
    Wrapper,
    Button
} from './header.styles';

export const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo className="logo" />
                <Navigation />
                <ButtonDarkMode />
            </Wrapper>
        </Container>
    )
}
