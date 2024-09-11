import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber';
import Section from './components/Section';
import TaskTracker from './components/TaskTracker';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
    <div className="bg-dark">
      <div className="headingME">
        <h1 className="heading text-center text-light"><span>RAZIN</span> blog's</h1>
      </div>
    <Navber />
    <Section />
    <TaskTracker />
    <Blog />
    
      </div>
    </div>
  );
}

export default App;
