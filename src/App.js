import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import GlobalStyle from "./style/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/groceries" element={<Groceries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
