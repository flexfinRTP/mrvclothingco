import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="User-button-div">
          <button id="login" className="User-button">Login</button>
          <button id="cart" className="User-button">Cart</button>

          <p id="Welcome-msg">Welcome, $[user_first]!</p>
        </div>
        <div>
          <img id="Main-logo" src={process.env.PUBLIC_URL + '/MRV.png'} alt="" />
          <h1 id="Main-header">Missouri River Clothing Co.</h1>
          <hr />
        </div>
        <div>
          <nav className="App-nav">
            <a className="Nav-link" href="">MENS</a>
            <a className="Nav-link" href="">WOMENS</a>
            <a className="Nav-link" href="">KIDS</a>
            <a className="Nav-link" href="">SHOES</a>
            <a className="Nav-link" href="">ACCESSORIES</a>
          </nav>
        </div>

      </header>

      <body>

      </body>

      <footer>
        <p id="Sig">2021 &copy;MRV Clothing Co. | Washington, MO</p>
      </footer>
    </div>
  );
}

export default App;
