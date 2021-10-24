import { getActiveMode } from '../../helpers/getActiveMode';

//assets icons
import { Sun } from '../../assets/Icons/Sun';
import { Moon } from '../../assets/Icons/Moon';

//styles
import {
    Ball,
    Icon,
    Button
} from './buttonDarkMode.styles';

export const ButtonDarkMode = ({ mode, setMode }) => {

    const { ballLeft, sunColor, moonColor } = getActiveMode(mode);

    return (
        <Button onClick={() => setMode(!mode)} >
            <Icon style={{color: sunColor}}><Sun /></Icon>
            <Icon  style={{color: moonColor}}><Moon /></Icon>
            <Ball style={{ left: ballLeft + "px" }} />
        </Button>
    )
}
