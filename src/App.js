import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChnage = () => {
    const names = ["Gal Gaddot", "Nicky Minaj", "Lana Del Ray"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChnage()}!
        </p>
        
      </header>
    </div>
  );
}

export default App;
