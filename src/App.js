import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello {process.env.REACT_APP_MESSAGE}</h1> 
    </div>
  );
}

export default App;
