import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  const [section, setSection] = React.useState('About Me');

  function handleSection(string) {
    console.log(string)
    setSection(string);
    console.log(section);
  }

  return (
    <div className="portfolio-app">
      <Header section = {section}
              handleSection = {handleSection}/>
      <h2 className='section-heading'>{section}</h2>
      <Body section = {section}
            handleSection = {handleSection}/>
      <Footer />
    </div>
  );
}

export default App;
