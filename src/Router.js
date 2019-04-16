import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// pages
import Home from './Pages/Home'
import About from './Pages/About'
import Clients from './Pages/Clients'

// components
import TopNavigator from './Components/TopNavigator'
import ContactForm from './Components/ContactForm'

const AppRouter = () => {
    return (
        <Router>
            <TopNavigator />
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/clients/" component={Clients} />
            <ContactForm />
        </Router>
    )
}

export default AppRouter
