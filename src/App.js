import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import { useContext } from 'react';
import { PortfolioContext } from './context/AppContext';

function App() {

  const { theme } = useContext(PortfolioContext);
  console.log("App Component");
  return (
    <div className={`w-screen h-screen ${theme === 'light' ? 'bg-light-background text-light-text' : 'bg-dark-background text-dark-text'}`}>
      <Navbar />
      
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
