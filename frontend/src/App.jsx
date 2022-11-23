import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import Admin from "./components/Admin";
import AdminHome from "./components/adminHome";
import UserRegistration from "./components/userRegistration";
import ViewAllUser from "./components/viewAllUser";
import UpdateUser from "./components/updateUser";
import DeleteUser from "./components/deleteUser";
import RegisterProduct from "./components/registerProduct";
import ViewAllProduct from "./components/viewAllProduct";
import UpdateProduct from "./components/updateProduct";
import DeleteProduct from "./components/deleteProduct";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/adminhome" element={<AdminHome />} />
          <Route
            exact
            path="/userregistration"
            element={<UserRegistration />}
          />
          <Route exact path="/viewalluser" element={<ViewAllUser />} />
          <Route exact path="/updateuser/:userId" element={<UpdateUser />} />
          <Route exact path="/deleteuser/:userId" element={<DeleteUser />} />
          <Route exact path="/registerproduct" element={<RegisterProduct />} />
          <Route exact path="/viewallproduct" element={<ViewAllProduct />} />
          <Route
            exact
            path="/deleteproduct/:productId"
            element={<DeleteProduct />}
          />
          <Route
            exact
            path="/updateproduct/:productId"
            element={<UpdateProduct />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
