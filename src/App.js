import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
       <Header />
      <main >
        <Home />
        <Projects />
      </main>
      
    </div>
  );
}

export default App;
