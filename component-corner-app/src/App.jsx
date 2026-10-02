import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Shopping cart state
  const [cart, setCart] = useState([]);

  // Product information
  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 89.99,
      image:
        "https://placehold.co/600x400/111827/ffffff?text=Mechanical+Keyboard",
      description:
        "A responsive mechanical keyboard designed for gaming, work, and everyday use.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 49.99,
      image:
        "https://placehold.co/600x400/374151/ffffff?text=Gaming+Mouse",
      description:
        "A lightweight gaming mouse with precise tracking and customizable controls.",
    },
    {
      id: 3,
      name: "Wireless Headset",
      price: 79.99,
      image:
        "https://placehold.co/600x400/4b5563/ffffff?text=Wireless+Headset",
      description:
        "Comfortable wireless headphones with clear audio for gaming and entertainment.",
    },
  ];

  // Add a product to the shopping cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove a product from the shopping cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate the total price of everything in the cart
  const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="app">
      <Header
        storeName="TechCorner"
        cartCount={cart.length}
      />

      <Hero
        title="Upgrade Your Setup"
        subtitle="Discover quality computer and gaming accessories built for your everyday setup."
        ctaText="Shop Now"
      />

      <main className="products-section">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <section className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}

              <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
            </>
          )}
        </section>
      </main>

      <Footer
        storeName="TechCorner"
        email="support@techcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;