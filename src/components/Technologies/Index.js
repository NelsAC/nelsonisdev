import {
    Container
} from './technologies.styles';

import { technologies } from '../../fixtures/technologies';
import { Technology } from '../Technology/Index';

export const Technologies = ({ mode }) => {
    return (
        <Container className={ mode && 'dark tech'}>
            {
                technologies.map(tech => (
                    <Technology {...tech} key={tech.title}/>
                ))
            }
        </Container>
    )
}
