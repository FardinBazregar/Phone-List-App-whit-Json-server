import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="New-contact" element={<NewContact />} />
    </Routes>
  );
};

export default App;
