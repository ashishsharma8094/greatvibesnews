import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
// import SearchPage from "./components/SearchPage";
import Nopage from "./components/Nopage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="search" element={<SearchPage />} /> */}
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
