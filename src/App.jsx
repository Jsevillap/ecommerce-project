import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import "./main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
