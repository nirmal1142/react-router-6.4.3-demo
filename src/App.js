import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Header } from "./pages/header";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/errorPage";
import ContractUs from "./pages/contractUs";
// import Header from "./pages/header";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/contact" element={<ContractUs />} />
    </>
  )
);
