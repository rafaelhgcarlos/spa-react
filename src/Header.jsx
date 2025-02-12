import "./App.css";

function Header() {
  return (
    <header className="container">
      <h1>Dazzle</h1>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-buttons">
        <button id="bt-login">Login</button>
        <button id="bt-signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
