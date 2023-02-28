
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      {/* <h1>lets build a tik tok clone</h1> */}

      {/* app container */}
        {/* videos */}
      <div className="app__videos">
        <h1>videos</h1>
        <Video
        url="https://youtu.be/YSU406hCAYo"
        channel="saurabh"
        description="this is a test"
        song="this is a song"
        likes={111}
        messages={222}
        shares={333}
        />
        <Video
        url="https://youtu.be/YSU406hCAYo"
        channel="saurabh"
        description="this is a test"
        song="this is a song"
        likes={111}

        messages={222}
        />
        <Video
        url="https://youtu.be/YSU406hCAYo"
        channel="saurabh"
        description="this is a test"
        song="this is a song"
        likes={111}
        messages={222}
        />
        <Video
        url="https://youtu.be/YSU406hCAYo"
        channel="saurabh"
        description="this is a test"
        song="this is a song"
        likes={111}
        messages={222}
        
        />
      
      </div>

      
    </div>
  );
}

export default App;
