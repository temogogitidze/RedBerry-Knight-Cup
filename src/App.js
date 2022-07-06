import { Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";

import StartingPage from "./components/Pages/StartingPage";
import FirstStep from "./components/Pages/FirstStep";
import SecondStep from "./components/Pages/SecondStep";
import RegComplete from "./components/Pages/RegComplete";
import { UserContext } from "./components/context/UserContext";

function App() {
  const [userData, setUserData] = useState([]);

  const providerValue = useMemo(
    () => ({ userData, setUserData }),
    [userData, setUserData]
  );
  // const value = { userData, setUserData };

  return (
    <div>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/first-step" element={<FirstStep />} />
          <Route path="/second-step" element={<SecondStep />} />
          <Route path="/reg-completed" element={<RegComplete />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
