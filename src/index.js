import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './providers/ThemeProvider/ThemeProvider'
import ReduxProvider from './providers/ReduxProvider/ReduxProvider'
import ActionProvider from './providers/ActionProvider/ActionProvider'
import "./estilos.scss"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <ReduxProvider>
        <ThemeProvider>
            <ActionProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ActionProvider>
        </ThemeProvider>
    </ReduxProvider>,
    document.getElementById('root'))