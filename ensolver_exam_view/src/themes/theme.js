import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

let theme = createTheme({
	palette: {
		primary: {
			main: orange[700]
		}
	}
})

export default theme;
