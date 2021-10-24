import { Socials } from '../Socials/Index';

import {
    Container,
} from './footer.styles';

export const Footer = ({ mode }) => {
    return (
        <Container className={mode && 'dark'}>
            <Socials />
        </Container>
    )
}
