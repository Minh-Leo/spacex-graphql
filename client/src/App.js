import React from 'react';
// import LaunchesContext from './context/LaunchesContext';

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';

import { BrowserRouter, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Rocket from './components/Rocket';
import './App.css';
import logo from './logo.png';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: '/graphql',
});
const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='container'>
          <img
            src={logo}
            style={{ width: 300, display: 'block', margin: 'auto' }}
            alt=''
          />
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
          <Route exact path='/rocket/:rocket_id' component={Rocket} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}
