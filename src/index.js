import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './providers/ThemeProvider/ThemeProvider'
import ReduxProvider from './providers/ReduxProvider/ReduxProvider'
import ActionProvider from './providers/ActionProvider/ActionProvider'

ReactDOM.render(
    <ReduxProvider>
        <ThemeProvider>
            <ActionProvider>
                <App />
            </ActionProvider>
        </ThemeProvider>
    </ReduxProvider>,
    document.getElementById('root'))