import Main from './components/Main'
import About from './components/About'
import NavBar from './components/Nav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main />
      <About />
    </div>
  );
}

export default App;
