//components
import { Navigation } from '../Navigation/Index';
import { ButtonDarkMode } from '../ButtonDarkMode/Index';

//assets icons
import { Logo } from '../../assets/Icons/Logo';
import { LogoDM } from '../../assets/Icons/LogoDM';
import { Menu } from '../../assets/Icons/Menu';

//styles
import {
    Container,
    Wrapper,
    Anchor,
    Amborguesa
} from './header.styles';

export const Header = ({ mode, setMode }) => {

    const handleMenu = () => {
        const nav = document.querySelector('#nav');
        nav.classList.toggle("active");
    }

    return (
        <Container className={ mode && 'dark' }>
            <Wrapper>
                <Anchor href="#home">
                    {
                        mode 
                            ?   <LogoDM width="3.3rem" />
                            :   <Logo width="3.3rem" />
                    }
                </Anchor>
                <Navigation />
                <ButtonDarkMode setMode={setMode} mode={mode} />
                <Amborguesa onClick={handleMenu} id="menu" className={ mode && 'dark' }>
                    <Menu width="1.5rem" />
                </Amborguesa>
            </Wrapper>
        </Container>
    )
}
