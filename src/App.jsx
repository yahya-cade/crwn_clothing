import Home from "./routes/Home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/CheckOut/CheckOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
