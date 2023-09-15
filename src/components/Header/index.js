import './Header.css';

function Header() {
  return (
    <header className="nav-header">
      <div className="logo">
        <img src="" alt="Guntur Mirchi" />
        <span className="logo-header__name">Guntur Mirchi</span>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="">Daily snapshot</a>
          </li>
          <li className="main-nav__item">
            <a href="">Dried red chilli live rates</a>
          </li>
          <li className="main-nav__item">
            <a href="">Chilli varieties</a>
          </li>
          <li className="main-nav__item">
            <a href="">About us</a>
          </li>
          <li className="main-nav__item">
            <a href="">9912599123</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
