import { Routes, Route } from "react-router-dom";

import StartingPage from "./components/Pages/StartingPage";
import FirstStep from "./components/Pages/FirstStep";
import SecondStep from "./components/Pages/SecondStep";
import RegComplete from "./components/Pages/RegComplete";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/first-step" element={<FirstStep />} />
        <Route path="/second-step" element={<SecondStep />} />
        <Route path="/reg-completed" element={<RegComplete />} />
      </Routes>
    </div>
  );
}

export default App;
