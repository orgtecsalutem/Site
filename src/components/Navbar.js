import logo from "../assets/images/logo.png";

export function Navbar() {
  return (
    <nav className="main-nav">
      <h1>
        <img src={logo} alt="Logo" />
      </h1>
      <ul>
        <li>
          <a href="">Link</a>
        </li>
        <li>
          <a href="">Link</a>
        </li>
        <li>
          <a href="">Link</a>
        </li>
        <li>
          <button>
            <a href="">Participe conosco</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
