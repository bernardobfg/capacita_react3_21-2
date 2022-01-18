import { AppRoutes } from "./routes";
import "./app.css"
import { ContextProvider } from "./contexts";
function App() {
  return (
    <ContextProvider>
      <AppRoutes/>
    </ContextProvider>
    );
}

export default App;
