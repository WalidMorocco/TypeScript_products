import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="app-container">
      <header className="nav">
        <nav className="nav">
          <h1>ShopifyShoota</h1>
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
