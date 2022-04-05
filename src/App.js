import './App.css';
import Header from './components/Header'
import './index.css';

import Game from './components/Game'
import data from './activities.json';

function App() {
  
 
  
  return (
    <div className="app h-screen">
      <Header/>
      <Game/>

    </div>
  );
}

export default App;
