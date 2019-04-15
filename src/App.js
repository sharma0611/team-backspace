import React, { Component } from 'react'
import './App.css'
import Home from './Pages/Home'
import Theme from './Theme'

class App extends Component {
    render() {
        return (
            <Theme>
                <Home />
            </Theme>
        )
    }
}

export default App
