import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Homepage from "./recipes/Homepage.jsx";
import Recipes from "./recipes/Recipes.jsx";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Error404 from "./Error404.jsx";
import DetailsPage from "./recipes/DetailsPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:Id" element={<DetailsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
