import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NovedadesPage from './pages/NovedadesPage.jsx';




function App() {
  return (
    <div className="App">
     
    

      <BrowserRouter>
     <Header/>

        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='about' element={ <AboutPage />}/>   
          <Route path='portfolio' element={ <PortfolioPage />}/>
          <Route path='service' element={ <ServicePage />}/>
          <Route path='contact' element={<ContactPage />}/>
          <Route path='novedades' element={<NovedadesPage />}/>
        </Routes>

      </BrowserRouter>
  
    
    <Footer 
    />
    </div>
  );
}

export default App;
