import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Hero from "./pages/home/Hero";
import ProductDetail from "./pages/products/ProductDetail";
import { Provider } from "react-redux";
import store from "./redux_store/store";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import ProtectedRoute from "./component/auth/ProtectedRoute";
import Restricted from "./component/auth/Restricted";
import ListingPage from "./pages/products/ListingPage";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <div className="sticky top-0 z-10">
          <Header />
          <Navbar />
        </div>

        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Hero />} />
              <Route index element={<Hero />} />
              <Route
                path="productdetail"
                element={<ProtectedRoute component={<ProductDetail />} />}
              />
              <Route path="listingpage" element={<ListingPage />} />
            </Route>
            <Route
              path="signup"
              element={<Restricted component={<SignUp />} />}
            />
            <Route
              path="/signup/login"
              element={<Restricted component={<Login />} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
