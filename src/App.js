import './App.css';
import TopBar from './components/TopBar';
import AboutSection from './components/AboutSection'
import EducationSkills from './components/Education_Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        <AboutSection/>
        <EducationSkills/>
        <Projects/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
