import React, { useState } from 'react'
import './App.css'
import {FaTwitter} from "react-icons/fa"
import QuotesList from './QuotesList.json'



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

function RandomQuotes() {

  const [random, setRandom] = useState(0);
  let randomizer;
  let randQuote = QuotesList[random].quote
  let randAuthor = QuotesList[random].author
  
  
  const nextQuoteClick = () => {   
    randomizer = () => Math.floor(Math.random() * QuotesList.length)
    setRandom(randomizer)
    console.log(random);
    //how can I randomize without repeating previous number?
  } 

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>    

      <div id="quote-box">
        <Text quote={randQuote} />
        <Author author={randAuthor} />
        <div className="bottom-spaceout"> 
          <a href="https://www.twitter.com" id="tweet-quote"><FaTwitter/ > </a>
          <button onClick={nextQuoteClick} id="new-quote">new quote</button>  
        </div>        
      </div>

      <div className="footer">
        <h4>pmayc</h4>
      </div>
      
    </div>
  );
}

export default RandomQuotes;
