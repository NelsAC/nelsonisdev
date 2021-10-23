import {
    Container,  
    CheckBox,
    Label,
    Ball,
    Icon
    
} from './buttonDarkMode.styles';

import { Sun } from '../../assets/Icons/Sun';
import { Moon } from '../../assets/Icons/Moon';

export const ButtonDarkMode = () => {
    return (
        <Container>
            <CheckBox type="checkbox" id="xd" />
            <Label htmlFor="xd">
                <Icon><Sun /></Icon>
                <Icon><Moon /></Icon>
                <Ball  />
            </Label>
        </Container>
    )
}
