import './App.css';
import Post from './post'
import Comments from './comments'


function App() {
  return (
    <div className="App">
      <div className='post-page'>
        <Post />
        <Comments />
      </div>
    </div>
  );
}

export default App;
