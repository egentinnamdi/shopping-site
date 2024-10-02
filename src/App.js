import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import LandingPage from "./pages/LandingPage";
import GlobalStyle from "./style/GlobalStyle";
import Groceries from "./features/Categories/Groceries";
import Beauty from "./features/Categories/Beauty";
import Fashion from "./features/Categories/Fashion";
import Music from "./features/Categories/Music";
import Travel from "./features/Categories/Travel";
import Outdoor from "./features/Categories/Outdoor";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/categories" element={<Categories />}>
            <Route index element={<Navigate replace to="groceries" />} />
            <Route path="groceries" element={<Groceries />} />
            <Route path="beauty" element={<Beauty />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="music" element={<Music />} />
            <Route path="travel" element={<Travel />} />
            <Route path="outdoor" element={<Outdoor />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
