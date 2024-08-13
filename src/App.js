import './App.css';
import TopBar from './components/TopBar';
import AboutSection from './components/AboutSection'
import EducationSkills from './components/Education_Skills';
import Projects from './components/Projects';
import EmailContact from './components/EmailContact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        <AboutSection/>
        <EducationSkills/>
        <Projects/>
      </header>
      <EmailContact/>
    </div>
  );
}

export default App;
