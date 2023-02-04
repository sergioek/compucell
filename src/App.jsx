import React from "react";
import { CartProvider } from "./components/Context/CartContext";
import { LoginProvider } from "./components/Context/LoginContext";
import { AppRoutes } from "./components/Routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </LoginProvider>
    </div>
  );
}
export default App;
