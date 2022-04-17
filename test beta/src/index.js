import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPages from "./pages/NoPages";

export default function App() {
  return (
    <><h1>Phone Directory</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter></>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));