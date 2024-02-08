import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="w-full h-full pt-[1rem] pb-[4rem] px-[2rem]">
          <Navbar />
          <Routes>
            <Route path="/" element={<div>dashboard page</div>} />
            <Route path="/predictions" element={<div>predictions page</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
