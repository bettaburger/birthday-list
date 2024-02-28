import './App.css'
import Time from './components/Time.js';
import List from './components/List.js';

function App() {
  
  return (
    <div className="App">
      <h1>Birthday Tracker</h1>
      <Time/>
      <h4>Track your friends or family birthdays, start by adding a person below!</h4>
      <div className="item">
        <List/>
      </div>
    </div>
  )
}



export default App