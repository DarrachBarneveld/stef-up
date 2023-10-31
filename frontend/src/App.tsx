import { WorkoutContextProvider } from "./context/WorkoutContext";
import RootRoutes from "./routes/Routes";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <WorkoutContextProvider>
        <RootRoutes />
      </WorkoutContextProvider>
    </AuthContextProvider>
  );
}

export default App;
