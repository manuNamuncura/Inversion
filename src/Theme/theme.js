import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#f50057' },
      background: { default: '#f5f5f5', paper: '#fff' },
    },
    typography: {
      fontFamily: '"Roboto-Condensed", sans-serif',
      h1: { fontSize: '2.5rem', fontWeight: 700 },
    },
    shape: { borderRadius: 8 },
    spacing: 8,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });
  

export default theme;
