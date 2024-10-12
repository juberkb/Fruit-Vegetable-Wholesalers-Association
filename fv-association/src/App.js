import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from "./comman/navbar/Navbar.js"
import Footer from "./comman/footer/Footer.js"
import NotFound from './pages/notfound/NotFound.js';
import HomePage from './pages/home/HomePage.js';
import AboutUs from './pages/aboutpages/AboutUs.js';
import Members from './pages/members/Members.js';
import Services from './pages/service/Services.js';
import ConstactUs from './pages/contact/ContactUs.js';
import RegisterNow from './pages/registerPage/RegisterNow.js';
import Events from './pages/events/Events.js';
import Resources from './pages/resources/Resources.js';
import News from './pages/news/News.js';
import PrevMembers from './pages/members/PrevMembers.js';

function App() {
  return (

  <ChakraProvider >
      <header className="App-header" >
        <Router>
          <Navbar  />
          <Routes>
          <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/members" element={<Members/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<ConstactUs/>}/>
            <Route path="/registernow" element={<RegisterNow/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/previousMemebrs" element={<PrevMembers/>}/>

          </Routes>
          <Footer />
        </Router>
      </header>
    
      </ChakraProvider>
  );
}

export default App;