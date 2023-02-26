
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <h1>lets build a tik tok clone</h1>

      {/* app container */}
        {/* videos */}
      <div className="app__videos">
        <h1>videos</h1>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
      
      </div>

      
    </div>
  );
}

export default App;
