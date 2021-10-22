import { socials } from '../../fixtures/socials';

import { 
    Container,
    List,
    Item
} from './socials.styles';

export const Socials = () => {
    return (
        <Container>
            {
                socials.map(({ title, href, Icon, color }) => (
                    <List key={title} theme={{color}}>
                        <Item href={href}><Icon fill="#727272" /></Item>
                    </List>
                ))
            }
        </Container>
    )
}
