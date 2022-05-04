import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import StoreProvider from ''
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Homepage'
import Dashboard from './pages/Dashboard/Dashboard'
import Tournament from './pages/TourneyPage/Tourney'
import Contact from './pages/Contact/Contact'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
    ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
