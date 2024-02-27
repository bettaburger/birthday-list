import './App.css'
import Time from './components/Time.js';
import List from './components/List.js';

function App() {
  return (
    <div className="App">
      <h1>Birthday Tracker</h1>
      <Time/>
      <div className="item">
        <List/>
      </div>
    </div>
  )
}



export default App