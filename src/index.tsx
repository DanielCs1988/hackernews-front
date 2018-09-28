import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloProvider} from "react-apollo";

const httpLink = createHttpLink({
    uri: 'https://hackernews-gql.herokuapp.com'
});

const apollo = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={apollo}>
        <App />
    </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
