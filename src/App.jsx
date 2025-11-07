import "./App.css";
import MainPage from "./pages/MainPage";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  setInterval(() => {
    setLoading(false);
  }, 2150);

  return (
    <>
      {loading && <LoadingScreen />}
      <MainPage />
    </>
  );
}

export default App;
