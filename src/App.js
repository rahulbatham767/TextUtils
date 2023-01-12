import { useState } from 'react';
import { About } from './Components/About';
import { Alert } from './Components/Alert';
import { Navbar } from './Components/Navbar';
import { TextForm } from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState('dark');

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }

    )
    setTimeout(() => {
      setAlert({});
    }, 2000);

  }

  const [alert, setAlert] = useState({});

  const toogleMode = (cls) => {
    console.log(cls);
    if (darkMode === 'dark') {
      setdarkMode('light');
      document.body.style.backgroundColor = '#7676ff';

      showAlert("Light Mode Enabled", 'primary');
    }
    else {
      setdarkMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode Enabled", 'dark');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" abouttext="About" mode={darkMode} tooglemode={toogleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={darkMode} />} />
          <Route exact path="/" element={
            <TextForm heading="Enter Text to Analyze" mode={darkMode} show={showAlert} />
          } />
        </Routes>
      </Router>

    </>
  )
}

export default App;
