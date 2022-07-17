import './App.css';
import Header from './components/Header';
import Times from './components/Times';
import Credits from './components/Credits';

function App() {
  return (
    <div className="App">
      <Header day="Segunda"></Header>
      <Times></Times>
      <hr></hr>
      <Credits></Credits>
    </div>
  );
}

export default App;
