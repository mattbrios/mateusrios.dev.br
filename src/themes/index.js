import { createMuiTheme } from '@material-ui/core/styles';

import './main.css';

const palette = {
    primary: {
        light: '#29B6F6',
        main: '#039BE5',
        contrastText: '#FFFFFF'
    },
    secondary: {
        main: '#FFCA28',
        dark: '#fecf64',
        contrastText: '#455A64'
    }
}

const Theme = createMuiTheme({
    palette
});

export default Theme;