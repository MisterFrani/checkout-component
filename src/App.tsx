import AppLayout from "./layouts/AppLayout";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./contexts/StateContext";

function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
