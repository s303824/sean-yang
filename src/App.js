import logo from './pfp.jpg';
import './App.css';
import TopBar from './components/TopBar';
import AboutSection from './components/AboutSection'
import Education_Skills from './components/Education_Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        <AboutSection/>
        <Education_Skills/>
      </header>
    </div>
  );
}

export default App;
