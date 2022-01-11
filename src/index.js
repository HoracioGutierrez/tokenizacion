import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './providers/ThemeProvider/ThemeProvider'
import ReduxProvider from './providers/ReduxProvider/ReduxProvider'
import ActionProvider from './providers/ActionProvider/ActionProvider'
import { BrowserRouter } from 'react-router-dom'
import { MoralisProvider } from 'react-moralis'
import AuthProvider from './providers/AuthProvider/AuthProvider'
import "./estilos.scss"
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
    <MoralisProvider serverUrl='https://xxtfd8oof3or.usemoralis.com:2053/server' appId='phmh671MeJ32ZurrXStGDAIrFy3k2pfKTQjOtYYN'>
        <ReduxProvider>
            <ThemeProvider>
                <ActionProvider>
                    <BrowserRouter>
                        <AuthProvider>
                            <App />
                        </AuthProvider>
                    </BrowserRouter>
                </ActionProvider>
            </ThemeProvider>
        </ReduxProvider>
    </MoralisProvider>,
    document.getElementById('root'))