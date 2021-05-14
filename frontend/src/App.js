import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import WhoWeAre from './pages/WhoWeAre/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import Contacts from './pages/Contacts/Contacts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';

function App() {
    return ( < Router >
        <GlobalStyle />
        
        <
        ScrollToTop / >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> <
        Route path = '/whoweare'
        component = { WhoWeAre }
        /> <
        Route path = '/whatwedo'
        component = { WhatWeDo }
        /> <
        Route path = '/contacts'
        component = { Contacts }
        />    <
        Route path = '/login'
        component = { SigninPage }
        /> 
        <
        Route path = '/signup'
        component = { SignupPage }
        />  </Switch >
        <
        Footer / >
        </Router>
    );
}

export default App;