
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h2 className='header'>header 1</h2>
        <div className='content'>
          <p>scroll up to view the sticky headers</p>
        </div>
      </section>
      <section className='content'>
        <h2 className='header'>header 2</h2>
        <div>
          <p>content 2</p>
        </div>
      </section>
      <section className='content'>
        <h2 className='header'>header 3</h2>
        <div>
          <p>content 3</p>
        </div>
      </section>
      <section className='content'>
        <h2 className='header'>header 4</h2>
        <div>
          <p>content 4</p>
        </div>
      </section>

    </div>
  );
}

export default App;
