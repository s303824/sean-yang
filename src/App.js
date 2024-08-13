import './App.css';
import TopBar from './components/TopBar';
import AboutSection from './components/AboutSection'
import Education_Skills from './components/Education_Skills';
import Projects from './components/Projects';
import EmailContact from './components/EmailContact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        <AboutSection/>
        <Education_Skills/>
        <Projects/>
      </header>
      <EmailContact/>
    </div>
  );
}

export default App;
