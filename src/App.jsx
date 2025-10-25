import "./App.css";
import MainPage from "./pages/MainPage";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <>
      <LoadingScreen />
      <MainPage />
    </>
  );
}

export default App;
