import '../css/App.css';
import AboutMe from './AboutMe';
import Hero from './Hero';
import ProjectDisplayWrapper from './ProjectDisplayWrapper';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <ProjectDisplayWrapper />
    </div>
  );
}

export default App;
