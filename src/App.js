import './App.css'
import {FaTwitter} from "react-icons/fa"
import QuotesList from './QuotesList.json'

let randomizer = Math.floor(Math.random() * 10);
let firstQuote = QuotesList[randomizer].quote
let firstAuthor = QuotesList[randomizer].author

const Text = (props) => {
  return (
    
      <h2 id="text">
        "{props.quote}"
      </h2>
   
  )
}

const Author = (props) => {
  return(
    <div>
      <h3 id="author">{props.author}</h3>
    </div>
  )
}

function App() {
  return (

    <div className="container">
      <h1>Random Quote Generator</h1>    

      <div id="quote-box">
        <Text quote={firstQuote} />
        <Author author={firstAuthor} />
        <div className="bottom-spaceout"> 
          <a id="tweet-quote"><FaTwitter/ > </a>
          <button id="new-quote">new quote</button>  
        </div>
        
        
      </div>
      <div className="footer">
        <h4>pmayc</h4>
      </div>
    </div>
  );
}

export default App;
