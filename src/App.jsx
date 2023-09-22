import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          {/* protected route - dasboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* protected route - dasboard */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
