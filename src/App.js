import './App.css'



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
      <h3>Zig Ziglar</h3>
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
        <button>new quote</button>
      </div>
    </div>
  );
}

export default App;
