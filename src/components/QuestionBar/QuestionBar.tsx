import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ShuffleIcon from '@mui/icons-material/Shuffle';

interface QuestionBar {
    question: string;
}

function QuestionBar(props: QuestionBar) {
    return (
        <>
            <h1>{props.question}</h1>
            <TextField id="userInput" label="Twoja odpowiedź" variant="outlined" fullWidth/>
            <div>
                <Button variant="contained" color='primary' sx={{margin: '1rem'}} startIcon={<SendIcon/>}>Sprawdź odpowiedź</Button>
                <Button variant="contained" color='primary' sx={{margin: '1rem'}} startIcon={<ShuffleIcon/>}>Wylosuj nowe pytanie</Button>
            </div>
        </>
    );
}

export default QuestionBar