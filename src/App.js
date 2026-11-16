
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
       <Header />
      <main >
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
