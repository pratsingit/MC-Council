import React from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Marquee from './Marquee';
import AboutPage from './AboutPage';
import video1 from './video1.mp4';
import './styles.css';
import './App.css';
import LoginForm from './LoginForm'; 
import Cuser from './Cuser'; 
import QuizForm from './quiz';
import QuizForm2 from './quiz2';
import QuizForm3 from './quiz3';
import VideoPlayer from './videofile';

const Video = () => {
  return <video autoPlay loop muted playsInline src={video1} />;
};

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app">
      {isHome && <Video />}
    
      <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/Cuser" element={<Cuser />} />
            <Route path="/ethicalhacking" element={<QuizForm />} />
            <Route path="/artificialint" element={<QuizForm2 />} />
            <Route path="/webdev" element={<QuizForm3 />} />
            <Route path="/videofile" element={<VideoPlayer />} />
            <Route path="/" element={
              <>
              <Header />
            
          <Marquee />
          <Footer />
              </>
            } /> */
      </Routes>
      {/* <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact>
          <Header />
          <div className="wrapper">
            <MainContent />
          </div>
          <Marquee />
          <div className="white-background"></div>
          <Footer />
        </Route>
      </Switch> */}
    </div>
  );
};


export default App;


