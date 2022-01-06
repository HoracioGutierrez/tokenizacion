import Button from '@mui/material/Button';
import useActions from './hooks/useActions';
import useDarkMode from './hooks/useDarkMode';

const App = () => {

    const dark = useDarkMode()  
    const {toggleDarkMode} = useActions()  

    return (
        <div>
            <p>Soy App {dark ? 'Dark' : 'Light'}</p>
            <Button variant='contained' color='primary' onClick={toggleDarkMode}>dark mode</Button>
            <Button variant='contained' color='primary'>primario</Button>
            <Button variant='contained' color='secondary'>secundario</Button>
        </div>
    )
}

export default App