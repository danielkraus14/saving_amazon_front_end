import {useState} from 'react';

import Navbar from './layouts/Navbar';
import LandingPage from './components/LandingPage';

function App() {

  const [language, setLanguage] = useState('en');

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <LandingPage language={language} />
    </>
  );
}

export default App;
