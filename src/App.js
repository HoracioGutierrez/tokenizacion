import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <>  
            <Header/>
            <Content/>
            <Footer/>
            <ToastContainer/>
        </>
    )
}

export default App