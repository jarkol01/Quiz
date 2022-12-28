import { Grid } from '@mui/material';
import SideBar from '../SideBar/';
import Box from '@mui/material/Box';
import QuestionBar from '../QuestionBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#bc063a',
        dark: '#880035'
      }
    },
  });




  const data = [
    {id: 1, question: "Czy niebo jest czerwone?", answer: 'Nie'},
    {id: 2, question: "Czy bejbiczek kocha bejbiczka?", answer: 'Tak'},
    {id: 3, question: "Czy sądzisz, że w twoim przekonaniu Napoleon był niski? Jeśli tak to dlaczego, podaj odpowieź i ja wyjaśnij", answer: 'Tak'},
]

function AppLayout() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={12} lg={3} xl={2} sx={{backgroundColor: "#fafafa"}}>
                        <SideBar/>
                    </Grid>
                    <Grid item xs={12} lg={9} xl={10} sx={{textAlign: 'center', padding: '5%'}}>
                        <QuestionBar question={data[1].question}/>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
      );
}

export default AppLayout;