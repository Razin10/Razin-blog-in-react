import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
    <div className="animation">
        <div className="sadiv"></div>
       <h1>السلام عليكم</h1>
       <h2>আসসালামু আলাইকুম</h2>
    </div>
    <div className="bg-dark">
      <div className="headingME">
        <h1 className="heading text-center text-light"><span>RAZIN</span> blog's</h1>
      </div>
    <Navber />
    <Section />
    
      </div>
    </div>
  );
}

export default App;
