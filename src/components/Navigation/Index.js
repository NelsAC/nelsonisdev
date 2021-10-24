// Styles
import {
    Nav,
    Anchor
} from './navigation.styles';


// Fixtures
import {
    navigation
} from '../../fixtures/navigation';

export const Navigation = () => {
    return (
        <Nav id="nav">
            {
                navigation.map(({ href, title }) => (
                    <Anchor href={href} key={title}>
                        {title}
                    </Anchor>
                ))
            }
        </Nav>
    )
}
