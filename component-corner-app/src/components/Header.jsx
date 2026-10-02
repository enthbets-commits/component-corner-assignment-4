import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="store-name">{storeName}</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;