import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ApiProvider } from "./api/ApiContext.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthContext.jsx";
import { CartProvider } from "./FindMyRecipeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApiProvider>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </ApiProvider>
  </AuthProvider>
);
