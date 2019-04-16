import React, { Component } from 'react'
import './App.css'
import Theme from './Theme'
import Router from './Router'

class App extends Component {
    render() {
        return (
            <Theme>
                <Router />
            </Theme>
        )
    }
}

export default App
