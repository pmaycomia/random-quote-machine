import './App.css'
import {FaTwitter} from "react-icons/fa"


const Text = () => {
  return (
    
      <h2 id="text">
        "If you can dream it, you can achieve it."
      </h2>
   
  )
}

const Author = () => {
  return(
    <div>
      <h3 id="author">Zig Ziglar</h3>
    </div>
  )
}

function App() {
  return (

    <div className="container">
      <h1>Random Quote Generator</h1>    

      <div id="quote-box">
        <Text />
        <Author />
        <div className="bottom-spaceout"> 
          <a id="tweet-quote"><FaTwitter/ > </a>
          <button>new quote</button>  
        </div>
        
        
      </div>
      <div className="footer">
        <h4>pmayc</h4>
      </div>
    </div>
  );
}

export default App;
