//components
import { Navigation } from '../Navigation/Index';
import { ButtonDarkMode } from '../ButtonDarkMode/Index';

//assets icons
import { Logo } from '../../assets/Icons/Logo';
import { Menu } from '../../assets/Icons/Menu';

//styles
import {
    Container,
    Wrapper,
    Amborguesa
} from './header.styles';

export const Header = ({ mode, setMode }) => {

    const handleMenu = () => {
        const nav = document.querySelector('#nav');
        nav.classList.toggle("active");
    }

    return (
        <Container>
            <Wrapper>
                <Logo width="3.3rem" />
                <Navigation />
                <ButtonDarkMode setMode={setMode} mode={mode} />
                <Amborguesa onClick={handleMenu} id="menu" ><Menu fill="#000" width="1.5rem" /></Amborguesa>
            </Wrapper>
        </Container>
    )
}
