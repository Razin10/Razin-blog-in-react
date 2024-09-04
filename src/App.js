import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="headingME">
        <h1 className="heading"><span>RAZIN</span> blog's</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">
              home
            </a>
          </li>
          <li>
            <a href="#about">
              about
            </a>
          </li>
          <li>
            <a href="#project">
              project
            </a>
          </li>
          <li>
            <a href="#blog">
              blog
            </a>
          </li>
        </ul>
      </nav>

      <section id="home">
        hi
      </section>
      <section id="about">
        i
      </section>
      <section id="blog">
        am
      </section>
      <section id="project">
        razin
      </section>
    </div>
  );
}

export default App;
