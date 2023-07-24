import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { AppProvider } from './components/Context';

const client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api",
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AppProvider>
    </ApolloProvider>
  </React.StrictMode>
);
