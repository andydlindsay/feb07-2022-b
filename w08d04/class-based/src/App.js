import './App.css';
import {useState} from 'react';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-Based Components</h2>
      <button onClick={() => setShowLifecycle(!showLifecycle)}>Change view</button>
      { !showLifecycle && <ClassBased message="hello world" /> }
      { showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;
