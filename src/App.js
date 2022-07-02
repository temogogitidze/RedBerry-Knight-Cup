import { Routes, Route } from "react-router-dom";

import StartingPage from "./components/Pages/StartingPage";
import FirstStep from "./components/Pages/FirstStep";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/firstStep" element={<FirstStep />} />
      </Routes>
    </div>
  );
}

export default App;
