import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EachNameStructure from "./components/EachNameStructure";
import AllNamesList from "./components/AllNamesList";

function App() {
  const basename =
    process.env.NODE_ENV === "development" ? "/" : "/Allah99Names";
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navigate to="/allNames" />} />
          <Route path="/Allah99Names" element={<Navigate to="/allNames" />} />
          <Route path="/allNames" element={<AllNamesList />} />
          <Route path="/name" element={<EachNameStructure />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
