import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import NewsDetails from "./pages/NewsDetails/NewsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/news/:id" element={<NewsDetails />} /> */}
        <Route path="/news/" element={<NewsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
