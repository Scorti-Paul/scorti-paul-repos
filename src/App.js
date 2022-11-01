import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Repo from './components/Repo';
import ErrorBoundary from './components/ErrorBoundary';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/repo' element={<Repo />} />
        </Route>
        <Route path='/error-boundary' element={<ErrorBoundary />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
