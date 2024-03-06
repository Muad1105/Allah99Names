import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EachNameStructure from "./components/EachNameStructure";
import AllNamesList from "./components/AllNamesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navigate to="/Allah99Names/allNames" />} />
          <Route
            path="https://muad1105.github.io/Allah99Names/"
            element={<Navigate to="/allNames" />}
          />
          <Route path="/Allah99Names/allNames" element={<AllNamesList />} />
          <Route path="/Allah99Names" element={<EachNameStructure />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
