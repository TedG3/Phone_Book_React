import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Addphone from "./pages/Addphone";
import Login from "./pages/Login";
import NoPages from "./pages/NoPages";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AddContact" element={<Addphone />} />
          <Route path="Login" element={<Login />} />
          <Route path="Search" element={<Search/>} />
          <Route path="Favourites" element={<Favourites/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
