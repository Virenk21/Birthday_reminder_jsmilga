import './App.css';
import List from './List';


function App() {
  return (
    <main>
      <section className='container'>
        <h3>0 birthdays Today</h3>
        <List />
        <button onClick={() => console.log('u clicked me')}>clear all</button>
      </section>
    </main>
  );
};

export default App;
