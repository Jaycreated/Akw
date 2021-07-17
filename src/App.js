//import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
