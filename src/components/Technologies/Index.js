import {
    Container
} from './technologies.styles';

import { technologies } from '../../fixtures/technologies';
import { Technology } from '../Technology/Index';

export const Technologies = () => {
    return (
        <Container>
            {
                technologies.map(tech => (
                    <Technology {...tech} key={tech.title}/>
                ))
            }
        </Container>
    )
}
